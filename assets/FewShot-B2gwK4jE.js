import{j as s,L as e}from"./index-Ctnh_cTW.js";import{S as l}from"./SEOHead-D8ezAXh0.js";function c(){return s.jsxs(s.Fragment,{children:[s.jsx(l,{title:"Few-shot Learning 기법",description:"예시를 활용하여 AI의 응답 품질을 높이는 Few-shot 기법을 배웁니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"Few-shot Learning 기법"}),s.jsx("p",{children:"예시의 힘으로 AI의 응답 품질을 극대화하는 방법을 배웁니다"})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsx("h2",{children:"Zero-shot vs One-shot vs Few-shot"}),s.jsx("div",{style:{overflowX:"auto"},children:s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"기법"}),s.jsx("th",{children:"예시 수"}),s.jsx("th",{children:"설명"}),s.jsx("th",{children:"적합한 상황"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Zero-shot"})}),s.jsx("td",{children:"0개"}),s.jsx("td",{children:"예시 없이 지시만으로 수행"}),s.jsx("td",{children:"간단하고 명확한 작업"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"One-shot"})}),s.jsx("td",{children:"1개"}),s.jsx("td",{children:"하나의 예시를 제공"}),s.jsx("td",{children:"형식이나 스타일 전달"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:"Few-shot"})}),s.jsx("td",{children:"2~5개"}),s.jsx("td",{children:"여러 예시로 패턴 학습 유도"}),s.jsx("td",{children:"복잡한 분류, 특정 형식 요구"})]})]})]})}),s.jsx("h2",{children:"실전 예시 1: 감정 분석"}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("div",{className:"prompt-example-header",children:"Few-shot 감정 분석"}),s.jsxs("div",{className:"prompt-example-body",children:[s.jsx("div",{className:"prompt-label",children:"프롬프트"}),s.jsx("div",{className:"prompt-text",children:`다음 리뷰의 감정을 분류해주세요.

리뷰: "배송이 정말 빨라서 놀랐어요!" → 긍정
리뷰: "제품은 괜찮은데 가격이 너무 비싸요" → 중립
리뷰: "포장이 엉망이고 제품에 흠집이 있었어요" → 부정
리뷰: "색상이 사진과 완전 다르지만 품질은 좋아요" → 중립

리뷰: "이 가격에 이 품질이면 대만족입니다! 재구매 의사 100%"`}),s.jsx("div",{className:"prompt-label",children:"AI 응답"}),s.jsx("div",{className:"prompt-result",children:"→ 긍정"})]})]}),s.jsx("h2",{children:"실전 예시 2: 이메일 분류"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"Few-shot 이메일 분류"}),s.jsx("pre",{children:s.jsx("code",{children:`이메일을 카테고리로 분류해주세요.

이메일: "회의 시간을 오후 3시로 변경해주세요" → 일정
이메일: "프로젝트 진행 상황 보고드립니다" → 보고
이메일: "서버 장애가 발생했습니다. 즉시 확인 필요" → 긴급
이메일: "다음 주 팀 회식 장소 투표 부탁드립니다" → 일반

이메일: "클라이언트가 내일까지 수정안을 요청했습니다"
→ 긴급`})})]}),s.jsx("h2",{children:"실전 예시 3: 형식 변환"}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("div",{className:"prompt-example-header",children:"자연어 → SQL 변환"}),s.jsxs("div",{className:"prompt-example-body",children:[s.jsx("div",{className:"prompt-label",children:"프롬프트"}),s.jsx("div",{className:"prompt-text",children:`자연어를 SQL 쿼리로 변환해주세요.

"모든 사용자 조회" → SELECT * FROM users;
"서울에 사는 사용자" → SELECT * FROM users WHERE city = '서울';
"최근 가입한 10명" → SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

"나이가 30 이상이고 VIP인 사용자의 이름과 이메일"`}),s.jsx("div",{className:"prompt-label",children:"AI 응답"}),s.jsx("div",{className:"prompt-result",children:"SELECT name, email FROM users WHERE age >= 30 AND is_vip = true;"})]})]}),s.jsx("h2",{children:"실전 예시 4: 톤 변환"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"비격식체 → 격식체 변환"}),s.jsx("pre",{children:s.jsx("code",{children:`비격식 문장을 비즈니스 격식체로 변환해주세요.

"그거 내일까지 해주세요" → "해당 건은 내일까지 완료 부탁드립니다."
"이거 왜 안 돼요?" → "해당 기능이 정상 동작하지 않는 원인을 확인해주시겠습니까?"
"좀 급해요" → "우선순위가 높은 사안이오니 빠른 처리를 요청드립니다."

"그 자료 아직 안 받았는데 빨리 보내줘"
→ "요청드린 자료를 아직 수령하지 못하였습니다. 조속한 전달을 부탁드립니다."`})})]}),s.jsx("h2",{children:"실전 예시 5: 코드 패턴 학습"}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("div",{className:"prompt-example-header",children:"React 컴포넌트 패턴"}),s.jsxs("div",{className:"prompt-example-body",children:[s.jsx("div",{className:"prompt-label",children:"프롬프트"}),s.jsx("div",{className:"prompt-text",children:`다음 패턴을 따라 React 컴포넌트를 작성해주세요.

예시 1: Button
const Button = ({ label, onClick, variant = 'primary' }) => (
  <button className={\`btn btn-\${variant}\`} onClick={onClick}>{label}</button>
)

예시 2: Badge
const Badge = ({ text, color = 'blue' }) => (
  <span className={\`badge badge-\${color}\`}>{text}</span>
)

요청: Alert 컴포넌트 (message, type='info' props)`}),s.jsx("div",{className:"prompt-label",children:"AI 응답"}),s.jsx("div",{className:"prompt-result",children:"const Alert = ({ message, type = 'info' }) => (\n  <div className={`alert alert-${type}`}>{message}</div>\n)"})]})]}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"Few-shot 작성 팁"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"예시는 2~5개가 적정"}),": 너무 적으면 패턴 인식 부족, 너무 많으면 토큰 낭비"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"다양한 케이스 포함"}),": 경계 사례나 예외 상황도 예시에 포함"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"일관된 형식 유지"}),": 모든 예시가 동일한 입출력 형식을 따라야 함"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"대표적인 예시 선택"}),": 각 카테고리를 골고루 커버하는 예시 선정"]})]})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"연습: Few-shot 프롬프트 작성"}),s.jsx("p",{children:"다음 작업을 위한 Few-shot 프롬프트를 작성해보세요:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"작업:"})," 뉴스 기사 제목을 카테고리(정치/경제/스포츠/IT/문화)로 분류"]}),s.jsx("li",{children:"각 카테고리당 1개씩, 총 5개의 예시를 포함하세요"}),s.jsx("li",{children:"작성 후 실제 AI에 테스트해보세요"})]})]}),s.jsxs("div",{className:"lesson-nav",children:[s.jsx(e,{to:"/learn/structure",className:"lesson-nav-btn prev",children:"← 이전: 구조와 패턴"}),s.jsx(e,{to:"/learn/chain-of-thought",className:"lesson-nav-btn next",children:"다음: Chain-of-Thought →"})]})]})})})]})}export{c as default};
