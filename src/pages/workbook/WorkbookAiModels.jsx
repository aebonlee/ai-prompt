import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookAiModels() {
  return (
    <>
      <SEOHead title="워크북: AI 모델 이해하기" description="AI 모델별 특징을 실습으로 비교하는 워크북" />

      <section className="page-header">
        <div className="container">
          <h1>워크북: AI 모델 이해하기</h1>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">

          <div className="callout-box">
            <h3>실습 목표</h3>
            <ul>
              <li>AI 모델 특징 파악</li>
              <li>상황별 모델 선택</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>빈칸 채우기</h3>
            <p>각 AI 모델의 강점을 정리해보세요.</p>
            <ol>
              <li>ChatGPT의 강점은 ______.</li>
              <li>Claude의 강점은 ______.</li>
              <li>Gemini의 강점은 ______.</li>
            </ol>
          </div>

          <div className="prompt-example">
            <h3>프롬프트 작성 연습</h3>
            <p>같은 프롬프트를 다른 AI 모델에 입력해보고 결과를 비교하세요.</p>
            <p><strong>과제:</strong> 아래 프롬프트를 ChatGPT, Claude, Gemini에 각각 입력한 뒤, 응답의 차이점을 아래에 정리해보세요.</p>
            <div className="prompt-block">
              <code>"한국의 전통 음식 5가지를 추천하고, 각각의 특징을 한 문장으로 설명해줘."</code>
            </div>
            <textarea className="exercise-textarea" rows="6" placeholder="각 모델의 응답 차이를 정리해보세요..." />
          </div>

          <div className="exercise-box">
            <h3>자가 점검</h3>
            <ul>
              <li>주요 AI 모델 3가지 이상의 특징을 설명할 수 있는가?</li>
              <li>상황에 따라 적절한 AI 모델을 선택할 수 있는가?</li>
            </ul>
          </div>

          <div className="lesson-nav">
            <Link to="/workbook/what-is-prompt" className="btn btn-prev">&larr; 이전: 프롬프트 엔지니어링이란?</Link>
            <Link to="/workbook/structure" className="btn btn-next">다음: 프롬프트 구조와 패턴 &rarr;</Link>
          </div>

        </div>
      </section>
    </>
  )
}
