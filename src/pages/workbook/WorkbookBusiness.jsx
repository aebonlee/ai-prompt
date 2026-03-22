import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookBusiness() {
  return (
    <>
      <SEOHead title="워크북: 실전 비즈니스" description="회의록, 제안서, 시장 분석 등 비즈니스 문서 작성을 위한 프롬프트를 직접 작성하고 연습하는 실전 워크북입니다." />
      <section className="page-header"><div className="container"><h1>워크북: 실전 비즈니스</h1><p>회의록, 제안서, 시장 분석을 위한 프롬프트 실습</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>실습 목표</h3>
          <ul>
            <li>회의록 정리를 위한 효율적인 프롬프트를 작성할 수 있다</li>
            <li>투자자 또는 고객 대상 제안서 초안 프롬프트를 구성할 수 있다</li>
            <li>시장 분석 및 경쟁사 조사 프롬프트를 체계적으로 설계할 수 있다</li>
            <li>비즈니스 문서의 대상 독자와 목적에 맞는 프롬프트를 작성할 수 있다</li>
          </ul>
        </div>

        <h2>빈칸 채우기</h2>
        <div className="exercise-box">
          <h3>개념 확인: 비즈니스 프롬프트</h3>
          <ul>
            <li>비즈니스 프롬프트의 핵심 요소: "문서 유형: ___, 대상 독자: ___, 핵심 포인트: ___"</li>
            <li>회의록 프롬프트에서 ___을(를) 지정하면 핵심 결정사항과 액션 아이템을 구분할 수 있다</li>
            <li>제안서 프롬프트에서 ___을(를) 명시하면 독자의 관심사에 맞춘 내용을 생성할 수 있다</li>
            <li>시장 분석 프롬프트에 ___와(과) ___을(를) 포함하면 실행 가능한 전략을 도출할 수 있다</li>
          </ul>
        </div>

        <h2>프롬프트 작성 연습</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 1: 투자자 대상 제안서</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">시리즈 A 투자 유치를 위한 제안서 초안을 작성해야 합니다. 회사의 비전, 시장 기회, 비즈니스 모델, 재무 계획, 팀 소개를 포함해야 하며, VC 투자자가 주요 독자입니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">투자자 대상 제안서 초안을 작성하는 프롬프트를 만들어보세요. 문서 구조, 톤, 핵심 강조 포인트를 포함하세요.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 2: 회의록 정리</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">1시간 동안 진행된 프로젝트 킥오프 회의의 녹취록이 있습니다. 참석자 5명의 발언이 섞여 있으며, 결정사항, 액션 아이템, 다음 회의 안건을 추출해야 합니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">여기에 직접 회의록 정리 프롬프트를 작성해보세요. 출력 형식, 분류 기준, 우선순위 표시 방법을 포함하세요.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 3: 경쟁사 분석 보고서</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">SaaS 시장에 신규 진입을 검토하고 있습니다. 주요 경쟁사 3곳의 제품 특징, 가격 정책, 강점과 약점을 비교 분석하고, 차별화 전략을 도출해야 합니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">여기에 직접 경쟁사 분석 프롬프트를 작성해보세요. 분석 프레임워크, 비교 항목, 출력 형식을 포함하세요.</div>
          </div>
        </div>

        <h2>자가 점검</h2>
        <div className="exercise-box">
          <h3>체크리스트</h3>
          <ul>
            <li>비즈니스 문서 프롬프트에 문서 유형과 대상 독자를 명확히 지정할 수 있는가?</li>
            <li>회의록 정리 프롬프트에 결정사항과 액션 아이템 추출을 요청할 수 있는가?</li>
            <li>제안서 프롬프트에 독자의 관심사와 핵심 메시지를 반영할 수 있는가?</li>
            <li>시장 분석 프롬프트에 적절한 분석 프레임워크를 지정할 수 있는가?</li>
            <li>비즈니스 문서의 톤과 격식 수준을 상황에 맞게 설정할 수 있는가?</li>
          </ul>
        </div>

        <div className="lesson-nav">
          <Link to="/workbook/translation" className="lesson-nav-btn prev">← 이전: 실전: 번역</Link>
          <Link to="/workbook" className="lesson-nav-btn next">다음: 워크북 홈 →</Link>
        </div>
      </div></div></section>
    </>
  )
}
