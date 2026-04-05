import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { getLectures, incrementViews } from '../../services/lectureService'
import { supabase } from '../../config/supabase'
import SEOHead from '../../components/SEOHead'

const staticLessons = [
  { week: 1, title: '프롬프트 엔지니어링이란?', path: '/lectures/what-is-prompt' },
  { week: 2, title: 'AI 모델 이해하기', path: '/lectures/ai-models' },
  { week: 3, title: '프롬프트 구조와 패턴', path: '/lectures/structure' },
  { week: 4, title: 'Few-shot 기법', path: '/lectures/few-shot' },
  { week: 5, title: 'Chain-of-Thought', path: '/lectures/chain-of-thought' },
  { week: 6, title: '역할 부여와 시스템 프롬프트', path: '/lectures/role-system' },
  { week: 7, title: '실전: 글쓰기', path: '/lectures/writing' },
  { week: 8, title: '실전: 코딩', path: '/lectures/coding' },
  { week: 9, title: '실전: 데이터 분석', path: '/lectures/analysis' },
  { week: 10, title: '실전: 번역', path: '/lectures/translation' },
  { week: 11, title: '실전: 비즈니스', path: '/lectures/business' },
]

export default function LecturesHome() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [lectures, setLectures] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    loadLectures()
  }, [])

  const loadLectures = async () => {
    setLoading(true)
    const { data } = await getLectures()
    setLectures(data || [])
    setLoading(false)
  }

  const toggleExpand = (lecture) => {
    if (expandedId === lecture.id) {
      setExpandedId(null)
    } else {
      setExpandedId(lecture.id)
      incrementViews(lecture.id)
    }
  }

  const handleFileAction = (e) => {
    if (!user) {
      e.preventDefault()
      alert('파일을 보려면 로그인이 필요합니다.')
      navigate('/login')
    }
  }

  const getFileUrl = (fileUrl) => {
    if (!fileUrl) return null
    if (fileUrl.startsWith('http')) return fileUrl
    const cleanPath = fileUrl.startsWith('/pdf/') ? fileUrl : `/pdf/${fileUrl}`
    return `${import.meta.env.BASE_URL}${cleanPath.replace(/^\//, '')}`
  }

  const getFileName = (fileUrl) => {
    if (!fileUrl) return ''
    return fileUrl.split('/').pop()
  }

  const getStaticLesson = (weekNumber) => {
    return staticLessons.find(s => s.week === weekNumber)
  }

  return (
    <>
      <SEOHead title="강의안" description="프롬프트 엔지니어링 강의안 - 주차별 강의 자료 및 학습 콘텐츠" />

      <section className="page-header">
        <div className="container">
          <h1>강의안</h1>
          <p>프롬프트 엔지니어링의 기초부터 실전 활용까지 체계적인 강의 자료입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!supabase ? (
            <div className="lecture-empty">Supabase가 설정되지 않았습니다.</div>
          ) : (
            <>
              {user && (
                <div className="lecture-toolbar">
                  <Link to="/lectures/write" className="lecture-write-btn">
                    강의안 등록
                  </Link>
                </div>
              )}

              {loading ? (
                <div className="lecture-loading">
                  <div className="loading-spinner"></div>
                </div>
              ) : lectures.length === 0 ? (
                <div className="lecture-empty">등록된 강의안이 없습니다.</div>
              ) : (
                <div className="lecture-table-wrapper">
                  <table className="lecture-table">
                    <thead>
                      <tr>
                        <th className="lecture-col-week">주차</th>
                        <th>제목</th>
                        <th className="lecture-col-actions">자료</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lectures.map((lecture) => {
                        const isExpanded = expandedId === lecture.id
                        const fileUrl = getFileUrl(lecture.file_url)
                        const staticLesson = getStaticLesson(lecture.week_number)
                        return (
                          <React.Fragment key={lecture.id}>
                            <tr
                              className={isExpanded ? 'active-row' : ''}
                              style={{ cursor: 'pointer' }}
                              onClick={() => toggleExpand(lecture)}
                            >
                              <td className="lecture-col-week">
                                <span className="lecture-week-badge">
                                  Week {lecture.week_number}
                                </span>
                              </td>
                              <td className="lecture-title-cell">
                                <div className="lecture-title-row">
                                  <span className={`lecture-expand-icon ${isExpanded ? 'expanded' : ''}`}>&#9654;</span>
                                  <span>{lecture.title}</span>
                                  {staticLesson && (
                                    <Link
                                      to={staticLesson.path}
                                      className="lecture-static-link"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      학습자료
                                    </Link>
                                  )}
                                </div>
                              </td>
                              <td className="lecture-col-actions" onClick={(e) => e.stopPropagation()}>
                                <div className="lecture-btn-group">
                                  {fileUrl ? (
                                    <>
                                      <a
                                        className="lecture-btn newtab"
                                        href={fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleFileAction}
                                      >
                                        보기
                                      </a>
                                      <a
                                        className="lecture-btn download"
                                        href={fileUrl}
                                        download={getFileName(lecture.file_url)}
                                        onClick={handleFileAction}
                                      >
                                        다운로드
                                      </a>
                                    </>
                                  ) : (
                                    <span className="lecture-no-file">파일 없음</span>
                                  )}
                                  {user && user.id === lecture.author_id && (
                                    <Link
                                      to={`/lectures/edit/${lecture.id}`}
                                      className="lecture-btn edit-btn"
                                    >
                                      수정
                                    </Link>
                                  )}
                                </div>
                              </td>
                            </tr>
                            {isExpanded && (
                              <tr className="lecture-dropdown-row">
                                <td colSpan={3}>
                                  <div className="lecture-dropdown-content">
                                    {lecture.content ? (
                                      <div className="lecture-content-text">
                                        {lecture.content.split('\n').map((line, i) => (
                                          <p key={i}>{line || '\u00A0'}</p>
                                        ))}
                                      </div>
                                    ) : (
                                      <p className="lecture-content-empty">내용이 없습니다.</p>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
