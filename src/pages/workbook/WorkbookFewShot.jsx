import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookFewShot() {
  return (
    <>
      <SEOHead title="워크북: Few-shot 기법" description="Few-shot 예시를 직접 작성하며 익히는 워크북" />

      <section className="page-header">
        <div className="container">
          <h1>워크북: Few-shot 기법</h1>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">

          <div className="callout-box">
            <h3>실습 목표</h3>
            <ul>
              <li>Few-shot 예시 작성</li>
              <li>Zero-shot과 Few-shot 비교</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>빈칸 채우기 - Zero-shot을 Few-shot으로 변환</h3>
            <p>아래 Zero-shot 프롬프트를 Few-shot 프롬프트로 변환해보세요.</p>
            <div className="prompt-block">
              <p><strong>Zero-shot:</strong> "다음 문장의 감성을 분석해줘."</p>
            </div>
            <p><strong>Few-shot으로 변환:</strong></p>
            <ol>
              <li>예시 1: "이 제품 정말 좋아요!" &rarr; ______</li>
              <li>예시 2: "배송이 너무 느려서 실망했어요." &rarr; ______</li>
              <li>예시 3: "가격은 괜찮은데 품질은 보통이에요." &rarr; ______</li>
            </ol>
          </div>

          <div className="prompt-example">
            <h3>프롬프트 작성 연습</h3>
            <p>감성 분석을 위한 Few-shot 예시 3개를 직접 작성해보세요.</p>
            <p><strong>과제:</strong> 음식 리뷰에 대한 감성 분석 Few-shot 프롬프트를 완성하세요. 긍정, 부정, 중립 예시를 각각 포함해야 합니다.</p>
            <textarea className="exercise-textarea" rows="8" placeholder="Few-shot 프롬프트를 작성해보세요...&#10;&#10;예시:&#10;입력: &quot;...&quot;&#10;감성: 긍정/부정/중립&#10;&#10;입력: &quot;...&quot;&#10;감성: ..." />
          </div>

          <div className="exercise-box">
            <h3>자가 점검</h3>
            <ul>
              <li>Zero-shot과 Few-shot의 차이를 설명할 수 있는가?</li>
              <li>적절한 Few-shot 예시를 선별하는 기준을 알고 있는가?</li>
              <li>Few-shot 예시의 개수가 결과에 미치는 영향을 이해하는가?</li>
            </ul>
          </div>

          <div className="lesson-nav">
            <Link to="/workbook/structure" className="btn btn-prev">&larr; 이전: 프롬프트 구조와 패턴</Link>
            <Link to="/workbook/chain-of-thought" className="btn btn-next">다음: Chain-of-Thought &rarr;</Link>
          </div>

        </div>
      </section>
    </>
  )
}
