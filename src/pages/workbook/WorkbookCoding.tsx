import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookCoding() {
  return (
    <>
      <SEOHead title="워크북: 실전 코딩" description="코드 생성, 디버깅, 리팩토링 등 개발 관련 프롬프트를 직접 작성하고 연습하는 실전 워크북입니다." />
      <section className="page-header"><div className="container"><h1>워크북: 실전 코딩</h1><p>코드 생성, 디버깅, 리팩토링을 위한 프롬프트 실습</p></div></section>
      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>실습 목표</h3>
          <ul>
            <li>코드 생성을 위한 명확하고 구체적인 프롬프트를 작성할 수 있다</li>
            <li>디버깅 상황에서 오류 컨텍스트를 효과적으로 전달하는 프롬프트를 구성할 수 있다</li>
            <li>코드 리팩토링 요청 시 개선 방향과 제약조건을 명시할 수 있다</li>
            <li>프로그래밍 언어와 프레임워크에 맞는 프롬프트를 설계할 수 있다</li>
          </ul>
        </div>

        <h2>빈칸 채우기</h2>
        <div className="exercise-box">
          <h3>개념 확인: 코드 생성 프롬프트</h3>
          <ul>
            <li>코드 생성 프롬프트의 핵심 요소: "언어: ___, 기능: ___, 제약조건: ___"</li>
            <li>디버깅 프롬프트에서는 ___와(과) ___을(를) 반드시 포함해야 한다</li>
            <li>리팩토링 요청 시 ___을(를) 명시하면 AI가 적절한 디자인 패턴을 적용할 수 있다</li>
            <li>코드 리뷰 프롬프트에서 ___을(를) 지정하면 특정 관점에서의 피드백을 받을 수 있다</li>
          </ul>
        </div>

        <h2>프롬프트 작성 연습</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 1: 로그인 폼 유효성 검사</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">React 프로젝트에서 로그인 폼의 유효성 검사 함수를 구현해야 합니다. 이메일 형식 검증, 비밀번호 강도 확인(8자 이상, 대소문자 및 특수문자 포함), 에러 메시지 반환 기능이 필요합니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">로그인 폼 유효성 검사 함수를 만드는 프롬프트를 작성해보세요. 사용할 언어, 함수의 입출력, 제약조건을 명확히 포함하세요.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 2: 버그 수정 요청</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">배열을 정렬하는 함수에서 빈 배열이 입력되면 에러가 발생합니다. 에러 메시지는 "Cannot read property 'length' of undefined"입니다. 이 버그를 수정해야 합니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">여기에 직접 디버깅 프롬프트를 작성해보세요. 에러 상황, 기대 동작, 관련 코드를 포함하세요.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">실습 과제 3: 코드 리팩토링</div>
          <div className="prompt-example-body">
            <div className="prompt-label">상황</div>
            <div className="prompt-text">300줄짜리 단일 함수를 유지보수가 쉬운 구조로 리팩토링해야 합니다. 현재 함수는 데이터 가져오기, 가공, 저장을 모두 처리하고 있습니다.</div>
            <div className="prompt-label">작성해보세요</div>
            <div className="prompt-text">여기에 직접 리팩토링 프롬프트를 작성해보세요. 개선 방향, 적용할 원칙, 제약조건을 포함하세요.</div>
          </div>
        </div>

        <h2>자가 점검</h2>
        <div className="exercise-box">
          <h3>체크리스트</h3>
          <ul>
            <li>코드 생성 프롬프트에 언어, 기능, 제약조건을 명확히 지정할 수 있는가?</li>
            <li>디버깅 프롬프트에 에러 메시지와 재현 조건을 포함할 수 있는가?</li>
            <li>리팩토링 프롬프트에 개선 목표와 유지해야 할 기능을 명시할 수 있는가?</li>
            <li>코드 리뷰 요청 시 검토 관점(성능, 보안, 가독성 등)을 지정할 수 있는가?</li>
            <li>기존 코드 컨텍스트를 프롬프트에 효과적으로 포함할 수 있는가?</li>
          </ul>
        </div>

        <div className="lesson-nav">
          <Link to="/workbook/writing" className="lesson-nav-btn prev">← 이전: 실전: 글쓰기</Link>
          <Link to="/workbook/analysis" className="lesson-nav-btn next">다음: 실전: 데이터 분석 →</Link>
        </div>
      </div></div></section>
    </>
  )
}
