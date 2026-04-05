import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookWhatIsPrompt() {
  return (
    <>
      <SEOHead title="워크북: 프롬프트 엔지니어링이란?" description="프롬프트 엔지니어링의 기본 개념을 실습으로 익히는 워크북" />

      <section className="page-header">
        <div className="container">
          <h1>워크북: 프롬프트 엔지니어링이란?</h1>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">

          <div className="callout-box">
            <h3>실습 목표</h3>
            <ul>
              <li>프롬프트 개념 이해하기</li>
              <li>좋은 프롬프트와 나쁜 프롬프트 구분</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>빈칸 채우기</h3>
            <p>아래 빈칸을 채워보세요.</p>
            <ol>
              <li>프롬프트란 AI에게 전달하는 ______이다.</li>
              <li>프롬프트 엔지니어링이 중요한 이유는 ______.</li>
            </ol>
          </div>

          <div className="prompt-example">
            <h3>프롬프트 작성 연습</h3>
            <p>다음 상황에 맞는 프롬프트를 작성해보세요:</p>
            <p><strong>상황:</strong> 회사 소개 이메일을 작성해야 합니다. 신규 거래처에 보낼 우리 회사의 주요 서비스와 강점을 소개하는 이메일을 AI에게 요청하는 프롬프트를 작성해보세요.</p>
            <textarea className="exercise-textarea" rows={6} placeholder="여기에 프롬프트를 작성해보세요..." />
          </div>

          <div className="exercise-box">
            <h3>자가 점검</h3>
            <ul>
              <li>프롬프트의 정의를 자신의 말로 설명할 수 있는가?</li>
              <li>좋은 프롬프트의 조건을 3가지 이상 나열할 수 있는가?</li>
            </ul>
          </div>

          <div className="lesson-nav">
            <span className="nav-placeholder" />
            <Link to="/workbook/ai-models" className="btn btn-next">다음: AI 모델 이해하기 &rarr;</Link>
          </div>

        </div>
      </section>
    </>
  )
}
