import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { getWorkbooks, incrementWorkbookViews } from '../../services/workbookService'
import { supabase } from '../../config/supabase'
import SEOHead from '../../components/SEOHead'

const staticWorkbooks = [
  { week: 1, title: '프롬프트 엔지니어링이란?', path: '/workbook/what-is-prompt' },
  { week: 2, title: 'AI 모델 이해하기', path: '/workbook/ai-models' },
  { week: 3, title: '프롬프트 구조와 패턴', path: '/workbook/structure' },
  { week: 4, title: 'Few-shot 기법', path: '/workbook/few-shot' },
  { week: 5, title: 'Chain-of-Thought', path: '/workbook/chain-of-thought' },
  { week: 6, title: '역할 부여와 시스템 프롬프트', path: '/workbook/role-system' },
  { week: 7, title: '실전: 글쓰기', path: '/workbook/writing' },
  { week: 8, title: '실전: 코딩', path: '/workbook/coding' },
  { week: 9, title: '실전: 데이터 분석', path: '/workbook/analysis' },
  { week: 10, title: '실전: 번역', path: '/workbook/translation' },
  { week: 11, title: '실전: 비즈니스', path: '/workbook/business' },
]

export default function WorkbookHome() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [workbooks, setWorkbooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    loadWorkbooks()
  }, [])

  const loadWorkbooks = async () => {
    setLoading(true)
    const { data } = await getWorkbooks()
    setWorkbooks(data || [])
    setLoading(false)
  }

  const toggleExpand = (workbook) => {
    if (expandedId === workbook.id) {
      setExpandedId(null)
    } else {
      setExpandedId(workbook.id)
      incrementWorkbookViews(workbook.id)
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

  const getStaticWorkbook = (weekNumber) => {
    return staticWorkbooks.find(s => s.week === weekNumber)
  }

  return (
    <>
      <SEOHead title="실습 워크북" description="프롬프트 엔지니어링 실습 워크북 - 주차별 실습 자료" />

      <section className="page-header">
        <div className="container">
          <h1>실습 워크북</h1>
          <p>직접 프롬프트를 작성하며 실력을 키워보세요</p>
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
                  <Link to="/workbook/write" className="lecture-write-btn">
                    워크북 등록
                  </Link>
                </div>
              )}

              {loading ? (
                <div className="lecture-loading">
                  <div className="loading-spinner"></div>
                </div>
              ) : workbooks.length === 0 ? (
                <div className="lecture-empty">등록된 워크북이 없습니다.</div>
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
                      {workbooks.map((workbook) => {
                        const isExpanded = expandedId === workbook.id
                        const fileUrl = getFileUrl(workbook.file_url)
                        const staticWb = getStaticWorkbook(workbook.week_number)
                        return (
                          <React.Fragment key={workbook.id}>
                            <tr
                              className={isExpanded ? 'active-row' : ''}
                              style={{ cursor: 'pointer' }}
                              onClick={() => toggleExpand(workbook)}
                            >
                              <td className="lecture-col-week">
                                <span className="lecture-week-badge">
                                  Week {workbook.week_number}
                                </span>
                              </td>
                              <td className="lecture-title-cell">
                                <div className="lecture-title-row">
                                  <span className={`lecture-expand-icon ${isExpanded ? 'expanded' : ''}`}>&#9654;</span>
                                  <span>{workbook.title}</span>
                                  {staticWb && (
                                    <Link
                                      to={staticWb.path}
                                      className="lecture-static-link"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      실습자료
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
                                        download={getFileName(workbook.file_url)}
                                        onClick={handleFileAction}
                                      >
                                        다운로드
                                      </a>
                                    </>
                                  ) : (
                                    <span className="lecture-no-file">파일 없음</span>
                                  )}
                                  {user && user.id === workbook.author_id && (
                                    <Link
                                      to={`/workbook/edit/${workbook.id}`}
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
                                    {workbook.content ? (
                                      <div className="lecture-content-text">
                                        {workbook.content.split('\n').map((line, i) => (
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
