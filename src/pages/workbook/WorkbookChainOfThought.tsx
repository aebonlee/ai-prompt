import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookChainOfThought() {
  return (
    <>
      <SEOHead title="워크북: Chain-of-Thought" description="CoT 프롬프트를 직접 설계하며 익히는 워크북" />

      <section className="page-header">
        <div className="container">
          <h1>워크북: Chain-of-Thought</h1>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">

          <div className="callout-box">
            <h3>실습 목표</h3>
            <ul>
              <li>CoT 프롬프트 직접 설계</li>
              <li>단계별 추론 유도</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>빈칸 채우기 - 수학 문제에 CoT 적용</h3>
            <p>아래 수학 문제에 Chain-of-Thought를 적용하여 단계별로 풀어보세요.</p>
            <div className="prompt-block">
              <p><strong>문제:</strong> "가게에서 사과 3개를 각 500원에 사고, 바나나 2묶음을 각 1,200원에 샀습니다. 10,000원을 냈다면 거스름돈은?"</p>
            </div>
            <ol>
              <li>1단계: 사과 비용 계산 = ______</li>
              <li>2단계: 바나나 비용 계산 = ______</li>
              <li>3단계: 총 비용 계산 = ______</li>
              <li>4단계: 거스름돈 계산 = ______</li>
            </ol>
          </div>

          <div className="prompt-example">
            <h3>프롬프트 작성 연습</h3>
            <p>복잡한 분석 문제에 CoT 패턴을 적용한 프롬프트를 작성해보세요.</p>
            <p><strong>과제:</strong> "스타트업의 시장 진입 전략을 수립해달라"는 요청에 단계별 사고를 유도하는 CoT 프롬프트를 작성하세요.</p>
            <textarea className="exercise-textarea" rows="8" placeholder="CoT 패턴을 적용한 프롬프트를 작성해보세요...&#10;&#10;예시:&#10;다음 문제를 단계별로 생각하여 풀어주세요.&#10;1단계: ...&#10;2단계: ...&#10;..." />
          </div>

          <div className="exercise-box">
            <h3>자가 점검</h3>
            <ul>
              <li>Chain-of-Thought의 개념과 효과를 설명할 수 있는가?</li>
              <li>복잡한 문제에 단계별 추론을 유도하는 프롬프트를 작성할 수 있는가?</li>
              <li>CoT가 효과적인 상황과 그렇지 않은 상황을 구분할 수 있는가?</li>
            </ul>
          </div>

          <div className="lesson-nav">
            <Link to="/workbook/few-shot" className="btn btn-prev">&larr; 이전: Few-shot 기법</Link>
            <Link to="/workbook/role-system" className="btn btn-next">다음: 역할 부여와 시스템 프롬프트 &rarr;</Link>
          </div>

        </div>
      </section>
    </>
  )
}
