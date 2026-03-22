import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

const chapters = [
  { step: 'STEP 01', icon: '💡', title: '프롬프트 엔지니어링이란?', desc: '프롬프트의 개념을 실습으로 익힙니다.', path: '/workbook/what-is-prompt' },
  { step: 'STEP 02', icon: '🤖', title: 'AI 모델 이해하기', desc: 'AI 모델별 특징을 실습으로 비교합니다.', path: '/workbook/ai-models' },
  { step: 'STEP 03', icon: '🏗️', title: '프롬프트 구조와 패턴', desc: '프롬프트 구조를 직접 설계해봅니다.', path: '/workbook/structure' },
  { step: 'STEP 04', icon: '🎯', title: 'Few-shot 기법', desc: 'Few-shot 예시를 직접 작성해봅니다.', path: '/workbook/few-shot' },
  { step: 'STEP 05', icon: '🧠', title: 'Chain-of-Thought', desc: 'CoT 프롬프트를 직접 설계해봅니다.', path: '/workbook/chain-of-thought' },
  { step: 'STEP 06', icon: '🎭', title: '역할 부여와 시스템 프롬프트', desc: '역할과 시스템 프롬프트를 실습합니다.', path: '/workbook/role-system' },
  { step: 'STEP 07', icon: '✍️', title: '실전: 글쓰기', desc: '글쓰기 프롬프트를 직접 작성합니다.', path: '/workbook/writing' },
  { step: 'STEP 08', icon: '💻', title: '실전: 코딩', desc: '코딩 프롬프트를 직접 작성합니다.', path: '/workbook/coding' },
  { step: 'STEP 09', icon: '📊', title: '실전: 데이터 분석', desc: '데이터 분석 프롬프트를 실습합니다.', path: '/workbook/analysis' },
  { step: 'STEP 10', icon: '🌐', title: '실전: 번역', desc: '번역 프롬프트를 직접 작성합니다.', path: '/workbook/translation' },
  { step: 'STEP 11', icon: '💼', title: '실전: 비즈니스', desc: '비즈니스 프롬프트를 실습합니다.', path: '/workbook/business' },
]

export default function WorkbookHome() {
  return (
    <>
      <SEOHead title="실습 워크북" description="프롬프트 엔지니어링 실습 워크북 - 직접 작성하며 배우는 실전 연습" />
      <section className="page-header"><div className="container"><h1>실습 워크북</h1><p>직접 프롬프트를 작성하며 실력을 키워보세요</p></div></section>
      <section className="section" style={{ background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="curriculum-grid">
            {chapters.map((item, i) => (
              <Link to={item.path} className="curriculum-card" key={i}>
                <span className="curriculum-step">{item.step}</span>
                <div className="curriculum-icon">{item.icon}</div>
                <h3 className="curriculum-card-title">{item.title}</h3>
                <p className="curriculum-card-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
