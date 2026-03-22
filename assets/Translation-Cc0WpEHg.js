import{j as e,L as s}from"./index-DWsB1aEG.js";import{S as i}from"./SEOHead-uVkgrmSk.js";function n(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"실전: 번역",description:"자연스러운 번역과 현지화에 AI를 활용하는 방법을 배웁니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"실전 활용: 번역"}),e.jsx("p",{children:"자연스러운 번역과 로컬라이제이션에 AI를 활용합니다"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 직역 vs 의역"}),e.jsxs("div",{className:"comparison-grid",children:[e.jsxs("div",{className:"comparison-card bad",children:[e.jsx("h4",{children:"단순 번역 프롬프트"}),e.jsx("p",{children:`"It's raining cats and dogs를 한국어로 번역해줘"`}),e.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:'→ "고양이와 개가 비처럼 내린다" (직역, 부자연스러움)'})]}),e.jsxs("div",{className:"comparison-card good",children:[e.jsx("h4",{children:"맥락 있는 번역 프롬프트"}),e.jsx("p",{children:`"'It's raining cats and dogs'를 한국어로 자연스럽게 의역해줘. 이 관용어의 의미를 살려서 번역해."`}),e.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:'→ "비가 억수같이 쏟아진다" (의역, 자연스러움)'})]})]}),e.jsx("h2",{children:"2. 비즈니스 문서 번역"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"비즈니스 이메일 번역"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`다음 한국어 비즈니스 이메일을 영어로 번역해주세요.

번역 원칙:
- 한국식 높임말 → 영어 비즈니스 톤 (Professional but friendly)
- "수고하세요" 같은 한국 특유 표현은 적절한 영어 표현으로 변환
- 이메일 포맷 유지

원문:
"안녕하세요 김 매니저님,
지난 회의에서 논의된 프로젝트 진행 건으로 연락드립니다.
첨부한 자료를 검토해 주시면 감사하겠습니다.
이번 주 금요일까지 피드백을 부탁드립니다.
항상 수고 많으십니다."`}),e.jsx("div",{className:"prompt-label",children:"AI 응답"}),e.jsx("div",{className:"prompt-result",children:`Dear Manager Kim,

I'm reaching out regarding the project discussed in our last meeting.
I'd appreciate it if you could review the attached documents.
Could you please share your feedback by this Friday?

Thank you for your continued support.

Best regards,`})]})]}),e.jsx("h2",{children:"3. 기술 문서 번역"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"기술 번역 프롬프트"}),e.jsx("pre",{children:e.jsx("code",{children:`다음 기술 문서를 한국어로 번역해주세요.

번역 규칙:
- 기술 용어는 영어 병기: "컴포넌트(Component)"
- 코드는 번역하지 않음
- API, SDK, JWT 등 약어는 영어 유지
- 자연스러운 한국어 문장 구조

원문:
"The useEffect hook in React lets you synchronize a component
with an external system. It runs after every render by default,
but you can optimize it by passing a dependency array."`})})]}),e.jsx("h2",{children:"4. 톤/격식 조절 번역"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"톤 맞춤 번역"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`다음 영어 문장을 3가지 톤으로 한국어 번역해주세요.

원문: "We need to postpone the meeting to next week due to scheduling conflicts."

1. 격식체 (임원 보고용)
2. 일반 비즈니스 (동료 이메일)
3. 캐주얼 (팀 메신저)`}),e.jsx("div",{className:"prompt-label",children:"AI 응답"}),e.jsx("div",{className:"prompt-result",children:`1. 격식체: "일정 충돌로 인하여 회의를 차주로 연기하고자 합니다."

2. 일반 비즈니스: "일정이 겹쳐서 회의를 다음 주로 미루려고 합니다."

3. 캐주얼: "일정이 안 맞아서 회의 다음 주로 미뤄야 할 것 같아요~"`})]})]}),e.jsx("h2",{children:"5. 현지화(로컬라이제이션)"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"앱 UI 현지화 프롬프트"}),e.jsx("pre",{children:e.jsx("code",{children:`다음 영어 앱 UI 텍스트를 한국어로 현지화해주세요.

현지화 규칙:
- 버튼: 간결하게 (2~4글자)
- 안내 메시지: 존댓말
- 에러 메시지: 원인 + 해결 방법 포함
- 날짜 형식: YYYY년 MM월 DD일

원문:
- "Sign Up" →
- "Log In" →
- "Your session has expired. Please log in again." →
- "Item added to cart" →
- "Are you sure you want to delete?" → `})})]}),e.jsxs("div",{className:"callout-box",children:[e.jsx("h3",{children:"번역 프롬프트 핵심 팁"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"번역 원칙을 먼저 제시"}),": 직역/의역, 용어 처리 규칙을 명시"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"대상 독자 명시"}),": 전문가용인지 일반인용인지에 따라 번역 수준 결정"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"문화적 맥락 고려"}),": 관용어, 유머, 비유는 현지 표현으로 변환 요청"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"용어집(Glossary) 제공"}),": 일관된 번역을 위해 핵심 용어 목록 제공"]})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: 번역 프롬프트 실전"}),e.jsx("p",{children:"자주 접하는 영어 콘텐츠(기술 블로그, 뉴스레터 등)를 AI로 번역해보세요. 번역 규칙을 다르게 설정하며 결과를 비교해보세요."})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/practice/analysis",className:"lesson-nav-btn prev",children:"← 이전: 분석"}),e.jsx(s,{to:"/practice/business",className:"lesson-nav-btn next",children:"다음: 비즈니스 →"})]})]})})})]})}export{n as default};
