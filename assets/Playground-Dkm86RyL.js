import{r as p,j as n}from"./index-CAD6yzNr.js";import{S as h}from"./SEOHead-y4leSBj9.js";const d=[{label:"Few-shot 예시",prompt:`다음 예시를 참고하여 답변해주세요.

질문: 사과는 무슨 색인가요?
답변: 빨간색입니다.

질문: 바나나는 무슨 색인가요?
답변: 노란색입니다.

질문: 포도는 무슨 색인가요?
답변:`},{label:"Chain-of-Thought",prompt:`문제를 단계별로 풀어주세요.

문제: 한 상자에 사과가 12개 있습니다. 3명이 동일하게 나누어 먹고, 남은 사과의 반을 동생에게 주었습니다. 최종적으로 남은 사과는 몇 개인가요?

풀이 과정:`},{label:"역할 부여",prompt:`당신은 10년 경력의 시니어 프론트엔드 개발자입니다.
코드 리뷰를 할 때 다음 관점에서 피드백을 제공합니다:
1. 성능 최적화
2. 코드 가독성
3. 보안 취약점

다음 코드를 리뷰해주세요:
\`\`\`javascript
const data = fetch("/api/users").then(r => r.json())
\`\`\``},{label:"구조화된 출력",prompt:`다음 텍스트에서 정보를 추출하여 JSON 형식으로 정리해주세요.

텍스트: "삼성전자는 2024년 1분기 매출 71.9조원을 기록했으며, 영업이익은 6.6조원입니다. 반도체 부문이 실적 개선을 주도했습니다."

출력 형식:
{
  "company": "",
  "period": "",
  "revenue": "",
  "operating_profit": "",
  "key_driver": ""
}`},{label:"비교 분석",prompt:`다음 두 가지 기술을 아래 기준으로 비교 분석해주세요.

비교 대상: React vs Vue.js

비교 기준:
1. 학습 곡선
2. 생태계 크기
3. 성능
4. 취업 시장
5. 커뮤니티 활성도

표 형식으로 정리하고 결론을 제시해주세요.`}];function g(){const[t,l]=p.useState(""),[c,a]=p.useState([]),e=s=>{l(s.prompt)},o=()=>{if(!t.trim())return;const s=m(t);a(r=>[{prompt:t,analysis:s,timestamp:new Date().toLocaleTimeString("ko-KR")},...r])},i=()=>{l("")};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"프롬프트 실습",description:"직접 프롬프트를 작성하고 분석해보세요."}),n.jsx("div",{className:"page-header",children:n.jsxs("div",{className:"container",children:[n.jsx("h1",{children:"프롬프트 실습"}),n.jsx("p",{children:"프롬프트를 작성하고 구조를 분석해보세요"})]})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container playground-container",children:[n.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"16px"},children:"템플릿 선택"}),n.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"24px"},children:d.map((s,r)=>n.jsx("button",{className:"btn btn-secondary",style:{padding:"8px 16px",fontSize:"0.85rem"},onClick:()=>e(s),children:s.label},r))}),n.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"12px"},children:"프롬프트 입력"}),n.jsx("textarea",{className:"playground-input",placeholder:`여기에 프롬프트를 입력하세요...

예: '당신은 전문 번역가입니다. 다음 한국어 문장을 자연스러운 영어로 번역해주세요.'`,value:t,onChange:s=>l(s.target.value)}),n.jsxs("div",{className:"playground-actions",children:[n.jsx("button",{className:"btn btn-primary",onClick:o,style:{padding:"10px 24px"},children:"프롬프트 분석"}),n.jsx("button",{className:"btn btn-secondary",onClick:i,style:{padding:"10px 24px"},children:"초기화"}),n.jsx("button",{className:"btn btn-secondary",onClick:()=>{navigator.clipboard.writeText(t)},style:{padding:"10px 24px"},children:"복사"})]}),c.length>0&&n.jsxs("div",{style:{marginTop:"40px"},children:[n.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"16px"},children:"분석 결과"}),c.map((s,r)=>n.jsxs("div",{className:"playground-output",style:{marginBottom:"16px"},children:[n.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-light)",marginBottom:"12px"},children:s.timestamp}),n.jsx("div",{style:{whiteSpace:"pre-wrap"},children:s.analysis})]},r))]})]})})]})}function m(t){const l=t.split(`
`).filter(s=>s.trim()),c=t.split(/\s+/).filter(Boolean).length,a=t.length,e=[];/당신은|너는|역할|전문가|시니어|경력/.test(t)&&e.push("역할 부여 (Role Assignment)"),/예시|예:|답변:|질문:/.test(t)&&e.push("Few-shot Learning"),/단계별|step by step|과정|순서대로/.test(t)&&e.push("Chain-of-Thought"),/JSON|표|형식|포맷|markdown/.test(t)&&e.push("출력 형식 지정 (Output Formatting)"),/비교|분석|장단점|vs/.test(t)&&e.push("비교 분석 (Comparative Analysis)"),/제약|조건|규칙|반드시|하지 마/.test(t)&&e.push("제약 조건 설정 (Constraints)"),/컨텍스트|배경|상황|맥락/.test(t)&&e.push("컨텍스트 제공 (Context Setting)"),e.length===0&&e.push("기본 질의 (Basic Query)");let o="보통",i=50;return a>100&&(i+=10),a>300&&(i+=10),e.length>1&&(i+=15),e.length>3&&(i+=10),/\n/.test(t)&&(i+=5),/\d\.|\-\s/.test(t)&&(i+=5),i>=80?o="우수":i>=60&&(o="양호"),`[프롬프트 분석 결과]

글자 수: ${a}자 | 단어 수: ${c}개 | 줄 수: ${l.length}줄

사용된 기법:
${e.map(s=>`  - ${s}`).join(`
`)}

프롬프트 품질: ${o} (${Math.min(i,100)}점/100점)

개선 제안:
${a<50?`  - 프롬프트가 너무 짧습니다. 더 구체적인 지시사항을 추가해보세요.
`:""}${e.includes("역할 부여 (Role Assignment)")?"":`  - 역할 부여를 추가하면 더 전문적인 답변을 받을 수 있습니다.
`}${e.includes("출력 형식 지정 (Output Formatting)")?"":`  - 원하는 출력 형식을 지정하면 더 구조화된 답변을 받을 수 있습니다.
`}${e.length<=1?"  - 여러 기법을 조합하면 더 높은 품질의 결과를 얻을 수 있습니다.":"  - 좋은 프롬프트입니다! 다양한 기법이 잘 활용되고 있습니다."}`}export{g as default};
