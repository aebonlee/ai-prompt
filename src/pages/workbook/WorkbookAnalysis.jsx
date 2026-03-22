import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookAnalysis() {
  return (
    <>
      <SEOHead title="워크북: 실전 데이터 분석" description="데이터 분석, 시각화, 인사이트 도출을 위한 프롬프트를 직접 작성하고 연습하는 실전 워크북입니다." />
      <section className="page-header"><div className="container"><h1>워크북: 실전 데이터 분석</h1><p>데이터 분석과 시각화를 위한 프롬프트 실습</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>실습 목표</h3>
          <ul>
            <li>데이터 분석 요청을 위한 체계적인 프롬프트를 작성할 수 있다</li>
            <li>데이터 시각화 유형과 목적을 프롬프트에 명확히 지정할 수 있다</li>
            <li>분석 결과의 출력 형식과 인사이트 도출 방향을 설정할 수 있다</li>
            <li>다양한 데이터 유형에 맞는 분석 프롬프트를 설계할 수 있다</li>
          </ul>
        </div>

        <h2>빈칸 채우기</h2>
        <div className="exercise-box">
          <h3>개념 확인: 데이터 분석 프롬프트</h3>
          <ul>
            <li>데이터 분석 프롬프트의 핵심 요소: "데이터 유형: ___, 분석 목적: ___, 출력 형식: ___"</li>
            <li>시각화 프롬프트에서 ___을(를) 지정하면 적절한 차트 유형을 선택할 수 있다</li>
            <li>분석 프롬프트에 ___을(를) 포함하면 비즈니스 맥락에 맞는 인사이트를 도출할 수 있다</li>
            <li>데이터 전처리 요청 시 ___와(과) ___을(를) 명시해야 정확한 결과를 얻을 수 있다</li>
          </ul>
        </div>

        <h2>프롬프트 작성 연습</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 1: 월별 매출 데이터 분석</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">지난 12개월간의 월별 매출 데이터(제품별, 지역별)가 있습니다. 매출 추이를 분석하고, 성장률이 높은 제품과 지역을 파악해야 합니다. 경영진 보고용 요약 자료가 필요합니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">월별 매출 데이터를 분석하는 프롬프트를 작성해보세요. 데이터 형식, 분석 관점, 출력 형식을 구체적으로 지정하세요.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 2: 고객 설문 분석</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">500명의 고객 만족도 설문 결과가 있습니다. 5점 척도 평가(서비스, 품질, 가격, 배송)와 자유 응답 텍스트가 포함되어 있습니다. 주요 불만 사항과 개선점을 도출해야 합니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">여기에 직접 설문 분석 프롬프트를 작성해보세요. 정량 데이터와 정성 데이터를 모두 분석하는 방법을 포함하세요.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 3: 데이터 시각화 요청</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">웹사이트 트래픽 데이터(일별 방문자 수, 페이지뷰, 이탈률, 유입 채널)를 대시보드로 시각화해야 합니다. Python(matplotlib 또는 plotly)을 사용합니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">여기에 직접 시각화 프롬프트를 작성해보세요. 차트 유형, 색상 스키마, 레이아웃을 포함하세요.</div>
          </div>
        </div>

        <h2>자가 점검</h2>
        <div className="exercise-box">
          <h3>체크리스트</h3>
          <ul>
            <li>데이터 분석 프롬프트에 데이터 유형과 분석 목적을 명확히 지정할 수 있는가?</li>
            <li>분석 결과의 출력 형식(표, 차트, 요약문 등)을 구체적으로 요청할 수 있는가?</li>
            <li>비즈니스 맥락을 프롬프트에 포함하여 실행 가능한 인사이트를 도출할 수 있는가?</li>
            <li>데이터 시각화 요청 시 적절한 차트 유형과 표현 방식을 지정할 수 있는가?</li>
            <li>데이터 전처리와 이상치 처리 방법을 프롬프트에 포함할 수 있는가?</li>
          </ul>
        </div>

        <div className="lesson-nav">
          <Link to="/workbook/coding" className="lesson-nav-btn prev">← 이전: 실전: 코딩</Link>
          <Link to="/workbook/translation" className="lesson-nav-btn next">다음: 실전: 번역 →</Link>
        </div>
      </div></div></section>
    </>
  )
}
