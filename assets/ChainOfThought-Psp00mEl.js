import{j as s,L as e}from"./index-B9suqNsz.js";import{S as l}from"./SEOHead-BVV8uykz.js";function c(){return s.jsxs(s.Fragment,{children:[s.jsx(l,{title:"Chain-of-Thought 기법",description:"AI가 단계별로 사고하도록 유도하는 Chain-of-Thought 프롬프팅을 배웁니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"Chain-of-Thought 프롬프팅"}),s.jsx("p",{children:"AI의 추론 능력을 극대화하는 단계별 사고 유도 기법"})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsx("h2",{children:"Chain-of-Thought(CoT)란?"}),s.jsxs("p",{children:["Chain-of-Thought는 AI에게 최종 답만 요구하는 대신, ",s.jsx("strong",{children:"풀이 과정을 단계별로 보여달라고 요청"}),"하는 기법입니다. 복잡한 추론, 수학 문제, 논리적 판단에서 정확도가 크게 향상됩니다."]}),s.jsxs("div",{className:"comparison-grid",children:[s.jsxs("div",{className:"comparison-card bad",children:[s.jsx("h4",{children:"일반 프롬프트"}),s.jsx("p",{children:'"가게에 사과 23개가 있었다. 8개를 팔고 12개를 새로 입고했다. 남은 사과는?"'}),s.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:"AI가 바로 답만 제시 → 오류 가능성 높음"})]}),s.jsxs("div",{className:"comparison-card good",children:[s.jsx("h4",{children:"CoT 프롬프트"}),s.jsx("p",{children:'"가게에 사과 23개가 있었다. 8개를 팔고 12개를 새로 입고했다. 남은 사과는? 단계별로 풀어주세요."'}),s.jsx("p",{style:{marginTop:"8px",fontSize:"0.85rem"},children:"단계별 추론 → 정확도 향상"})]})]}),s.jsx("h2",{children:"Zero-shot CoT: 마법의 한 마디"}),s.jsxs("p",{children:['"',s.jsx("strong",{children:"단계별로 생각해보세요(Let's think step by step)"}),'"라는 한 문장만 추가해도 추론 정확도가 크게 올라갑니다.']}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("div",{className:"prompt-example-header",children:"Zero-shot CoT 예시: 수학 문제"}),s.jsxs("div",{className:"prompt-example-body",children:[s.jsx("div",{className:"prompt-label",children:"프롬프트"}),s.jsx("div",{className:"prompt-text",children:`식당에 처음에 손님 17명이 있었습니다. 점심시간에 12명이 더 왔고, 5명이 떠났습니다. 오후에 다시 8명이 왔습니다. 지금 식당에 있는 손님은 몇 명인가요?

단계별로 풀어주세요.`}),s.jsx("div",{className:"prompt-label",children:"AI 응답"}),s.jsx("div",{className:"prompt-result",children:`단계별로 풀어보겠습니다.

1단계: 초기 인원 = 17명
2단계: 점심시간 추가 = 17 + 12 = 29명
3단계: 5명 퇴장 = 29 - 5 = 24명
4단계: 오후 추가 = 24 + 8 = 32명

답: 현재 식당에 있는 손님은 32명입니다.`})]})]}),s.jsx("h2",{children:"CoT 실전 예시: 논리 문제"}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("div",{className:"prompt-example-header",children:"논리적 추론"}),s.jsxs("div",{className:"prompt-example-body",children:[s.jsx("div",{className:"prompt-label",children:"프롬프트"}),s.jsx("div",{className:"prompt-text",children:`다음 조건을 분석하여 결론을 도출해주세요. 단계별로 추론하세요.

조건:
- 모든 프로그래머는 논리적 사고를 한다
- 민수는 프로그래머이다
- 논리적 사고를 하는 사람은 수학을 잘한다

질문: 민수에 대해 알 수 있는 것은?`}),s.jsx("div",{className:"prompt-label",children:"AI 응답"}),s.jsx("div",{className:"prompt-result",children:`단계별 추론:

1단계: "민수는 프로그래머이다" (주어진 조건)
2단계: "모든 프로그래머는 논리적 사고를 한다" → 민수는 논리적 사고를 한다
3단계: "논리적 사고를 하는 사람은 수학을 잘한다" → 민수는 수학을 잘한다

결론: 민수는 프로그래머이며, 논리적 사고를 하고, 수학을 잘합니다.`})]})]}),s.jsx("h2",{children:"CoT 실전 예시: 코드 디버깅"}),s.jsxs("div",{className:"code-block",children:[s.jsx("div",{className:"code-header",children:"디버깅에 CoT 적용"}),s.jsx("pre",{children:s.jsx("code",{children:`다음 코드의 버그를 찾아주세요. 단계별로 코드를 실행하며 분석하세요.

function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// 테스트: calculateAverage([10, 20, 30]) → 예상: 20, 실제: NaN`})})]}),s.jsx("h2",{children:"CoT 실전 예시: 비즈니스 의사결정"}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("div",{className:"prompt-example-header",children:"비즈니스 분석"}),s.jsxs("div",{className:"prompt-example-body",children:[s.jsx("div",{className:"prompt-label",children:"프롬프트"}),s.jsx("div",{className:"prompt-text",children:`우리 회사는 새 제품 출시를 고려하고 있습니다. 다음 정보를 바탕으로 출시 여부를 판단해주세요. 각 요소를 단계별로 분석한 후 최종 결론을 내려주세요.

- 시장 규모: 연 500억원, 연 15% 성장
- 개발 비용: 10억원, 기간 6개월
- 경쟁사: 3개 (시장 점유율 합계 60%)
- 우리 강점: 특허 기술, 기존 고객 기반 50만명
- 위험 요소: 규제 변경 가능성`}),s.jsx("div",{className:"prompt-label",children:"AI 응답 (단계별 분석)"}),s.jsx("div",{className:"prompt-result",children:`1단계: 시장 분석 - 500억 시장, 15% 성장 → 고성장 시장으로 매력적

2단계: 경쟁 분석 - 경쟁사 3곳이 60% 점유 → 40% 기회 존재, 진입 가능

3단계: 내부 역량 - 특허 기술로 차별화 가능, 50만 기존 고객 활용 → 강점

4단계: 비용 대비 수익 - 10억 투자, 1% 시장 점유 시 연 5억 매출 → 2년 내 회수 가능

5단계: 리스크 - 규제 변경 리스크 존재 → 단계적 출시로 리스크 완화

최종 결론: 출시를 추천합니다. 단, 규제 리스크를 고려하여 MVP로 소규모 출시 후 시장 반응을 확인하는 전략을 권장합니다.`})]})]}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"CoT 활용 팁"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"간단한 질문에는 불필요"}),': "수도는?" 같은 간단한 질문에는 CoT가 오히려 비효율적']}),s.jsxs("li",{children:[s.jsx("strong",{children:"복잡한 추론에 효과적"}),": 다단계 계산, 논리 문제, 의사결정에 큰 효과"]}),s.jsxs("li",{children:[s.jsx("strong",{children:'"단계별로"만 추가'}),": Zero-shot CoT는 한 문장 추가만으로 효과 발휘"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Self-Consistency"}),": 같은 CoT를 여러 번 수행하여 다수결로 최종 답 결정"]})]})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"연습: CoT 적용하기"}),s.jsx("p",{children:"다음 문제에 CoT를 적용한 프롬프트를 작성해보세요:"}),s.jsxs("p",{children:[s.jsx("strong",{children:"문제:"}),' "신규 서비스의 가격을 책정해야 합니다. 원가 3만원, 목표 마진율 40%, 경쟁사 가격 5만원~7만원, 타겟 고객은 가격 민감한 20대입니다."']})]}),s.jsxs("div",{className:"lesson-nav",children:[s.jsx(e,{to:"/learn/few-shot",className:"lesson-nav-btn prev",children:"← 이전: Few-shot"}),s.jsx(e,{to:"/learn/role-system",className:"lesson-nav-btn next",children:"다음: 역할 부여 →"})]})]})})})]})}export{c as default};
