import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

const chapters = [
  { step: 'STEP 01', icon: '💡', title: '프롬프트 엔지니어링이란?', desc: '프롬프트의 개념과 AI 모델과의 대화 원리를 이해합니다.', path: '/lectures/what-is-prompt' },
  { step: 'STEP 02', icon: '🤖', title: 'AI 모델 이해하기', desc: 'ChatGPT, Claude, Gemini 등 주요 AI 모델의 특징을 비교합니다.', path: '/lectures/ai-models' },
  { step: 'STEP 03', icon: '🏗️', title: '프롬프트 구조와 패턴', desc: '효과적인 프롬프트의 구조와 핵심 패턴을 학습합니다.', path: '/lectures/structure' },
  { step: 'STEP 04', icon: '🎯', title: 'Few-shot 기법', desc: '예시를 활용하여 AI의 응답 품질을 높이는 기법을 배웁니다.', path: '/lectures/few-shot' },
  { step: 'STEP 05', icon: '🧠', title: 'Chain-of-Thought', desc: 'AI가 단계별로 사고하도록 유도하는 고급 기법을 학습합니다.', path: '/lectures/chain-of-thought' },
  { step: 'STEP 06', icon: '🎭', title: '역할 부여와 시스템 프롬프트', desc: 'AI에게 역할을 부여하고 시스템 프롬프트를 설계합니다.', path: '/lectures/role-system' },
  { step: 'STEP 07', icon: '✍️', title: '실전: 글쓰기', desc: '블로그, 이메일, 보고서 등 글쓰기에 프롬프트를 활용합니다.', path: '/lectures/writing' },
  { step: 'STEP 08', icon: '💻', title: '실전: 코딩', desc: '코드 생성, 디버깅, 리팩토링에 프롬프트를 활용합니다.', path: '/lectures/coding' },
  { step: 'STEP 09', icon: '📊', title: '실전: 데이터 분석', desc: '데이터 분석, 시각화, 인사이트 도출에 AI를 활용합니다.', path: '/lectures/analysis' },
  { step: 'STEP 10', icon: '🌐', title: '실전: 번역', desc: '자연스러운 번역과 로컬라이제이션에 AI를 활용합니다.', path: '/lectures/translation' },
  { step: 'STEP 11', icon: '💼', title: '실전: 비즈니스', desc: '회의록, 제안서, 시장 분석 등 비즈니스에 AI를 활용합니다.', path: '/lectures/business' },
]

export default function LecturesHome() {
  return (
    <>
      <SEOHead title="강의안" description="프롬프트 엔지니어링 강의안 - 기초부터 실전까지 체계적인 강의 자료" />
      <section className="page-header"><div className="container"><h1>강의안</h1><p>프롬프트 엔지니어링의 기초부터 실전 활용까지 체계적인 강의 자료입니다</p></div></section>
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
