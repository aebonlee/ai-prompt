import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const curriculum = [
  { step: 'STEP 01', icon: 'fa-solid fa-lightbulb', title: '프롬프트 엔지니어링이란?', desc: '프롬프트의 개념과 AI 모델과의 대화 원리를 이해합니다.', path: '/intro/what-is-prompt', topics: 'Prompt · AI · LLM' },
  { step: 'STEP 02', icon: 'fa-solid fa-robot', title: 'AI 모델 이해하기', desc: 'ChatGPT, Claude, Gemini 등 주요 AI 모델의 특징을 비교합니다.', path: '/intro/ai-models', topics: 'ChatGPT · Claude · Gemini' },
  { step: 'STEP 03', icon: 'fa-solid fa-cubes', title: '프롬프트 구조와 패턴', desc: '효과적인 프롬프트의 구조와 핵심 패턴을 학습합니다.', path: '/learn/structure', topics: '구조 · 패턴 · 템플릿' },
  { step: 'STEP 04', icon: 'fa-solid fa-bullseye', title: 'Few-shot 기법', desc: '예시를 활용하여 AI의 응답 품질을 높이는 기법을 배웁니다.', path: '/learn/few-shot', topics: 'Zero-shot · Few-shot · Example' },
  { step: 'STEP 05', icon: 'fa-solid fa-brain', title: 'Chain-of-Thought', desc: 'AI가 단계별로 사고하도록 유도하는 고급 기법을 학습합니다.', path: '/learn/chain-of-thought', topics: 'CoT · 추론 · 단계별' },
  { step: 'STEP 06', icon: 'fa-solid fa-masks-theater', title: '역할 부여와 시스템 프롬프트', desc: 'AI에게 역할을 부여하고 시스템 프롬프트를 설계합니다.', path: '/learn/role-system', topics: 'Role · System · Persona' },
  { step: 'STEP 07', icon: 'fa-solid fa-pen-nib', title: '실전: 글쓰기', desc: '블로그, 이메일, 보고서 등 글쓰기에 프롬프트를 활용합니다.', path: '/practice/writing', topics: '블로그 · 이메일 · 보고서' },
  { step: 'STEP 08', icon: 'fa-solid fa-code', title: '실전: 코딩', desc: '코드 생성, 디버깅, 리팩토링에 프롬프트를 활용합니다.', path: '/practice/coding', topics: '코드생성 · 디버깅 · 리팩토링' },
  { step: 'STEP 09', icon: 'fa-solid fa-chart-bar', title: '실전: 데이터 분석', desc: '데이터 분석, 시각화, 인사이트 도출에 AI를 활용합니다.', path: '/practice/analysis', topics: '분석 · 시각화 · 인사이트' },
  { step: 'STEP 10', icon: 'fa-solid fa-globe', title: '실전: 번역', desc: '자연스러운 번역과 로컬라이제이션에 AI를 활용합니다.', path: '/practice/translation', topics: '번역 · 현지화 · 다국어' },
  { step: 'STEP 11', icon: 'fa-solid fa-briefcase', title: '실전: 비즈니스', desc: '회의록, 제안서, 시장 분석 등 비즈니스에 AI를 활용합니다.', path: '/practice/business', topics: '회의록 · 제안서 · 전략' },
]

const features = [
  { icon: 'fa-solid fa-bullseye', title: '실습 중심 학습', desc: '매 챕터마다 직접 프롬프트를 작성하고 결과를 비교하며 학습합니다.' },
  { icon: 'fa-solid fa-arrows-rotate', title: '다양한 AI 모델 대응', desc: 'ChatGPT, Claude, Gemini 등 여러 AI 모델에 적용 가능한 범용 기법을 다룹니다.' },
  { icon: 'fa-solid fa-clipboard-list', title: '업무 활용 템플릿', desc: '실무에서 바로 사용할 수 있는 프롬프트 템플릿을 제공합니다.' }
]

const targets = [
  { icon: 'fa-solid fa-user-tie', title: 'AI 활용 입문자', desc: 'AI를 처음 접하거나 더 잘 활용하고 싶은 분' },
  { icon: 'fa-solid fa-laptop-code', title: '개발자', desc: 'AI를 코딩 보조 도구로 활용하고 싶은 개발자' },
  { icon: 'fa-solid fa-pen-to-square', title: '콘텐츠 크리에이터', desc: 'AI로 콘텐츠 생산성을 높이고 싶은 분' }
]

export default function Home() {
  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-effect">
          <div className="particles">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${3 + Math.random() * 5}px`,
                height: `${3 + Math.random() * 5}px`,
                '--duration': `${15 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * 10}s`
              }} />
            ))}
          </div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="title-line">AI에게 올바르게</span>
            <span className="title-line"><span className="highlight">질문하는 기술</span>을 배우세요</span>
          </h1>
          <p className="hero-description">
            ChatGPT, Claude 등 AI 모델에서 원하는 결과를 이끌어내는 프롬프트 작성 기법을 체계적으로 학습합니다.
          </p>
          <div className="hero-buttons">
            <Link to="/intro/what-is-prompt" className="btn btn-primary">학습 시작하기</Link>
            <Link to="/playground" className="btn btn-secondary">실습하기</Link>
          </div>
          <div className="hero-tags">
            <span className="hero-tag">ChatGPT</span>
            <span className="hero-tag">Claude</span>
            <span className="hero-tag">Prompt</span>
            <span className="hero-tag">Few-shot</span>
            <span className="hero-tag">Chain-of-Thought</span>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"><div className="wheel" /></div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section" style={{ background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">커리큘럼</h2>
            <p className="section-subtitle">프롬프트 엔지니어링의 기초부터 실전 활용까지 체계적으로 학습합니다.</p>
          </div>
          <div className="curriculum-grid">
            {curriculum.map((item, i) => (
              <Link to={item.path} className="curriculum-card" key={i}>
                <span className="curriculum-step">{item.step}</span>
                <div className="curriculum-icon"><i className={item.icon} /></div>
                <h3 className="curriculum-card-title">{item.title}</h3>
                <p className="curriculum-card-desc">{item.desc}</p>
                <span className="curriculum-topics">{item.topics}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">학습 특징</h2>
            <p className="section-subtitle">실전에 바로 적용할 수 있는 프롬프트 엔지니어링 역량을 키웁니다.</p>
          </div>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon"><i className={f.icon} /></div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target */}
      <section className="section" style={{ background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">학습 대상</h2>
            <p className="section-subtitle">AI 활용에 관심 있는 모든 분을 위한 학습 과정입니다.</p>
          </div>
          <div className="target-grid">
            {targets.map((t, i) => (
              <div className="target-card" key={i}>
                <div className="target-icon"><i className={t.icon} /></div>
                <h3 className="target-title">{t.title}</h3>
                <p className="target-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
