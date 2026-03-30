import{j as e,L as s}from"./index-Dc9JEGD6.js";import{S as r}from"./SEOHead-DoeY3X_2.js";function i(){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"실전: 코딩",description:"코드 생성, 디버깅, 리팩토링에 프롬프트를 활용하는 방법을 배웁니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"실전 활용: 코딩"}),e.jsx("p",{children:"코드 생성, 디버깅, 리팩토링에 AI를 활용합니다"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 코드 생성"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"함수 생성 프롬프트"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`Python으로 비밀번호 유효성 검사 함수를 작성해주세요.

요구사항:
- 최소 8자 이상
- 대문자 1개 이상 포함
- 소문자 1개 이상 포함
- 숫자 1개 이상 포함
- 특수문자 (!@#$%^&*) 1개 이상 포함
- 유효하지 않은 경우 구체적 이유를 반환

타입 힌트와 docstring을 포함해주세요.`}),e.jsx("div",{className:"prompt-label",children:"AI 응답"}),e.jsx("div",{className:"prompt-result",children:`import re

def validate_password(password: str) -> tuple[bool, list[str]]:
    """비밀번호 유효성을 검사합니다.

    Returns:
        (is_valid, errors): 유효 여부와 오류 메시지 목록
    """
    errors = []

    if len(password) < 8:
        errors.append("비밀번호는 8자 이상이어야 합니다")
    if not re.search(r'[A-Z]', password):
        errors.append("대문자를 1개 이상 포함해야 합니다")
    if not re.search(r'[a-z]', password):
        errors.append("소문자를 1개 이상 포함해야 합니다")
    if not re.search(r'[0-9]', password):
        errors.append("숫자를 1개 이상 포함해야 합니다")
    if not re.search(r'[!@#$%^&*]', password):
        errors.append("특수문자를 1개 이상 포함해야 합니다")

    return (len(errors) == 0, errors)`})]})]}),e.jsx("h2",{children:"2. 디버깅"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"디버깅 프롬프트"}),e.jsx("pre",{children:e.jsx("code",{children:`다음 JavaScript 코드가 예상대로 동작하지 않습니다.
버그를 찾고 수정해주세요. 단계별로 분석하세요.

// 배열에서 중복을 제거하는 함수
function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

// 테스트
console.log(removeDuplicates([1, 2, 2, 2, 3]));
// 예상: [1, 2, 3]
// 실제: [1, 2, 2, 3]`})})]}),e.jsx("h2",{children:"3. 리팩토링"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"코드 리팩토링"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`다음 코드를 클린 코드 원칙에 따라 리팩토링해주세요.
변경 사항을 주석으로 설명해주세요.

function calc(t, d, q) {
  var r = 0;
  if (t == 'A') { r = d * q * 0.9; }
  else if (t == 'B') { r = d * q * 0.8; }
  else if (t == 'C') { r = d * q * 0.95; }
  else { r = d * q; }
  if (r > 10000) { r = r - 500; }
  return r;
}`}),e.jsx("div",{className:"prompt-label",children:"AI 응답"}),e.jsx("div",{className:"prompt-result",children:`// 의미 있는 이름, 상수 분리, 전략 패턴 적용
const DISCOUNT_RATES = {
  A: 0.9,   // VIP 10% 할인
  B: 0.8,   // 직원 20% 할인
  C: 0.95,  // 시즌 5% 할인
};

const BULK_DISCOUNT_THRESHOLD = 10000;
const BULK_DISCOUNT_AMOUNT = 500;

function calculateOrderTotal(customerType, unitPrice, quantity) {
  const discountRate = DISCOUNT_RATES[customerType] ?? 1.0;
  let total = unitPrice * quantity * discountRate;

  if (total > BULK_DISCOUNT_THRESHOLD) {
    total -= BULK_DISCOUNT_AMOUNT;
  }

  return total;
}`})]})]}),e.jsx("h2",{children:"4. 테스트 코드 작성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"테스트 생성 프롬프트"}),e.jsx("pre",{children:e.jsx("code",{children:`위의 calculateOrderTotal 함수에 대한 Jest 테스트 코드를 작성해주세요.

포함할 테스트 케이스:
- 각 고객 타입별 할인 적용
- 대량 주문 할인 경계값 테스트
- 알 수 없는 고객 타입 (할인 없음)
- 엣지 케이스 (0, 음수)`})})]}),e.jsx("h2",{children:"5. API 설계"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"REST API 설계"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`할 일 관리(Todo) REST API를 설계해주세요.

기능: CRUD + 완료 처리 + 우선순위 변경
형식: 각 엔드포인트별 메서드, URL, 요청/응답 예시를 표로 정리
조건: RESTful 원칙 준수, 에러 응답 코드 포함`})]})]}),e.jsx("h2",{children:"6. 코드 설명"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"코드 해석 프롬프트"}),e.jsx("pre",{children:e.jsx("code",{children:`다음 정규식이 무엇을 검증하는지 한국어로 상세히 설명해주세요.
각 부분을 분리하여 역할을 설명하세요.

/^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$!%*?&]{8,}$/`})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"코딩 프롬프트 팁"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"기술 스택 명시"}),": 언어, 프레임워크, 버전을 구체적으로"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"입출력 예시 제공"}),": 기대하는 동작을 예시로 보여주기"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"제약 조건 명시"}),": 성능, 메모리, 호환성 요구사항"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"에러 처리 요청"}),": 예외 상황 처리를 명시적으로 요청"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: 자신의 코드에 AI 활용하기"}),e.jsx("p",{children:"최근 작성한 코드를 AI에게 리뷰 또는 리팩토링 요청해보세요. 개선 전후를 비교하고 어떤 점이 나아졌는지 분석해보세요."})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/practice/writing",className:"lesson-nav-btn prev",children:"← 이전: 글쓰기"}),e.jsx(s,{to:"/practice/analysis",className:"lesson-nav-btn next",children:"다음: 데이터 분석 →"})]})]})})})]})}export{i as default};
