import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookStructure() {
  return (
    <>
      <SEOHead title="워크북: 프롬프트 구조와 패턴" description="RTF, CRISPE 프레임워크를 직접 작성하며 익히는 워크북" />

      <section className="page-header">
        <div className="container">
          <h1>워크북: 프롬프트 구조와 패턴</h1>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">

          <div className="callout-box">
            <h3>실습 목표</h3>
            <ul>
              <li>RTF 프레임워크 직접 작성</li>
              <li>CRISPE 프레임워크 직접 작성</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>빈칸 채우기 - RTF 패턴</h3>
            <p>"마케팅 블로그 글 작성"이라는 과제에 RTF 패턴을 적용해보세요.</p>
            <ol>
              <li><strong>Role(역할):</strong> ______</li>
              <li><strong>Task(과제):</strong> ______</li>
              <li><strong>Format(형식):</strong> ______</li>
            </ol>
          </div>

          <div className="prompt-example">
            <h3>프롬프트 작성 연습 - CRISPE 프레임워크</h3>
            <p>CRISPE 프레임워크를 활용하여 프롬프트를 직접 작성해보세요.</p>
            <ul>
              <li><strong>C</strong>apacity (역량): AI의 역할 설정</li>
              <li><strong>R</strong>equest (요청): 구체적인 요청 내용</li>
              <li><strong>I</strong>nsight (통찰): 배경 정보 제공</li>
              <li><strong>S</strong>tatement (진술): 세부 지시사항</li>
              <li><strong>P</strong>ersonality (성격): 응답 톤 설정</li>
              <li><strong>E</strong>xperiment (실험): 여러 변형 시도</li>
            </ul>
            <textarea className="exercise-textarea" rows={8} placeholder="CRISPE 프레임워크로 프롬프트를 작성해보세요..." />
          </div>

          <div className="exercise-box">
            <h3>자가 점검</h3>
            <ul>
              <li>RTF 패턴의 각 요소를 설명할 수 있는가?</li>
              <li>CRISPE 프레임워크를 활용하여 프롬프트를 구성할 수 있는가?</li>
              <li>상황에 맞는 프레임워크를 선택할 수 있는가?</li>
            </ul>
          </div>

          <div className="lesson-nav">
            <Link to="/workbook/ai-models" className="btn btn-prev">&larr; 이전: AI 모델 이해하기</Link>
            <Link to="/workbook/few-shot" className="btn btn-next">다음: Few-shot 기법 &rarr;</Link>
          </div>

        </div>
      </section>
    </>
  )
}
