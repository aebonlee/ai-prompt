import{r as p,j as n}from"./index-CfxAZY4Y.js";import{S as m}from"./SEOHead-BfnTgV7r.js";const u=[{label:"Few-shot 예시",prompt:`다음 예시를 참고하여 답변해주세요.

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

표 형식으로 정리하고 결론을 제시해주세요.`}];function y(){const[e,r]=p.useState(""),[h,a]=p.useState([]),t=p.useRef(null),l=p.useCallback(()=>{const s=t.current;s&&(s.style.height="auto",s.style.height=Math.max(200,s.scrollHeight)+"px")},[]),i=s=>{r(s.prompt),requestAnimationFrame(l)},o=()=>{if(!e.trim())return;const s=x(e);a(c=>[{prompt:e,analysis:s,timestamp:new Date().toLocaleTimeString("ko-KR")},...c])},d=()=>{r(""),t.current&&(t.current.style.height="200px")};return n.jsxs(n.Fragment,{children:[n.jsx(m,{title:"프롬프트 실습",description:"직접 프롬프트를 작성하고 분석해보세요."}),n.jsx("div",{className:"page-header",children:n.jsxs("div",{className:"container",children:[n.jsx("h1",{children:"프롬프트 실습"}),n.jsx("p",{children:"프롬프트를 작성하고 구조를 분석해보세요"})]})}),n.jsx("section",{className:"section",children:n.jsxs("div",{className:"container playground-container",children:[n.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"16px"},children:"템플릿 선택"}),n.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"24px"},children:u.map((s,c)=>n.jsx("button",{className:"btn btn-secondary",style:{padding:"8px 16px",fontSize:"0.85rem"},onClick:()=>i(s),children:s.label},c))}),n.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"12px"},children:"프롬프트 입력"}),n.jsx("textarea",{ref:t,className:"playground-input",placeholder:`여기에 프롬프트를 입력하세요...

예: '당신은 전문 번역가입니다. 다음 한국어 문장을 자연스러운 영어로 번역해주세요.'`,value:e,onChange:s=>{r(s.target.value),l()}}),n.jsxs("div",{className:"playground-actions",children:[n.jsx("button",{className:"btn btn-primary",onClick:o,style:{padding:"10px 24px"},children:"프롬프트 분석"}),n.jsx("button",{className:"btn btn-secondary",onClick:d,style:{padding:"10px 24px"},children:"초기화"}),n.jsx("button",{className:"btn btn-secondary",onClick:()=>{navigator.clipboard.writeText(e)},style:{padding:"10px 24px"},children:"복사"})]}),h.length>0&&n.jsxs("div",{style:{marginTop:"40px"},children:[n.jsx("h2",{style:{fontSize:"1.2rem",fontWeight:700,marginBottom:"16px"},children:"분석 결과"}),h.map((s,c)=>n.jsxs("div",{className:"playground-output",style:{marginBottom:"16px"},children:[n.jsx("div",{style:{fontSize:"0.8rem",color:"var(--text-light)",marginBottom:"12px"},children:s.timestamp}),n.jsx("div",{style:{whiteSpace:"pre-wrap"},children:s.analysis})]},c))]})]})})]})}function x(e){const r=e.split(`
`).filter(o=>o.trim()),h=e.split(/\s+/).filter(Boolean).length,a=e.length,t=[];/당신은|너는|역할|전문가|시니어|경력/.test(e)&&t.push("역할 부여 (Role Assignment)"),/예시|예:|답변:|질문:/.test(e)&&t.push("Few-shot Learning"),/단계별|step by step|과정|순서대로/.test(e)&&t.push("Chain-of-Thought"),/JSON|표|형식|포맷|markdown/.test(e)&&t.push("출력 형식 지정 (Output Formatting)"),/비교|분석|장단점|vs/.test(e)&&t.push("비교 분석 (Comparative Analysis)"),/제약|조건|규칙|반드시|하지 마/.test(e)&&t.push("제약 조건 설정 (Constraints)"),/컨텍스트|배경|상황|맥락/.test(e)&&t.push("컨텍스트 제공 (Context Setting)"),t.length===0&&t.push("기본 질의 (Basic Query)");let l="보통",i=50;return a>100&&(i+=10),a>300&&(i+=10),t.length>1&&(i+=15),t.length>3&&(i+=10),/\n/.test(e)&&(i+=5),/\d\.|\-\s/.test(e)&&(i+=5),i>=80?l="우수":i>=60&&(l="양호"),`[프롬프트 분석 결과]

글자 수: ${a}자 | 단어 수: ${h}개 | 줄 수: ${r.length}줄

사용된 기법:
${t.map(o=>`  - ${o}`).join(`
`)}

프롬프트 품질: ${l} (${Math.min(i,100)}점/100점)

개선 제안:
${a<50?`  - 프롬프트가 너무 짧습니다. 더 구체적인 지시사항을 추가해보세요.
`:""}${t.includes("역할 부여 (Role Assignment)")?"":`  - 역할 부여를 추가하면 더 전문적인 답변을 받을 수 있습니다.
`}${t.includes("출력 형식 지정 (Output Formatting)")?"":`  - 원하는 출력 형식을 지정하면 더 구조화된 답변을 받을 수 있습니다.
`}${t.length<=1?"  - 여러 기법을 조합하면 더 높은 품질의 결과를 얻을 수 있습니다.":"  - 좋은 프롬프트입니다! 다양한 기법이 잘 활용되고 있습니다."}`}export{y as default};
