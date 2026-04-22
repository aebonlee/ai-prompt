import{j as e,L as s}from"./index-DDuZ6qPV.js";import{S as l}from"./SEOHead-DvomD6WR.js";function d(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"실전: 데이터 분석",description:"데이터 분석, 시각화, 인사이트 도출에 AI를 활용하는 방법을 배웁니다."}),e.jsx("section",{className:"page-header",children:e.jsxs("div",{className:"container",children:[e.jsx("h1",{children:"실전 활용: 데이터 분석"}),e.jsx("p",{children:"데이터 해석, 시각화 제안, 인사이트 도출에 AI를 활용합니다"})]})}),e.jsx("section",{className:"section lesson-content",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"lesson-body",children:[e.jsx("h2",{children:"1. 데이터 해석"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"매출 데이터 분석"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`다음 분기별 매출 데이터를 분석해주세요.

2024년: Q1: 12억, Q2: 15억, Q3: 11억, Q4: 18억
2025년: Q1: 14억

분석 항목:
1. 전년 동기 대비 성장률
2. 분기별 추세 패턴
3. Q3 매출 하락 가능 원인 (가설)
4. 2025년 연간 매출 예측
5. 성장을 위한 액션 아이템 3가지`}),e.jsx("div",{className:"prompt-label",children:"AI 응답 (일부)"}),e.jsx("div",{className:"prompt-result",children:`1. 전년 동기 대비: Q1 2024(12억) → Q1 2025(14억) = 16.7% 성장

2. 추세 패턴: Q2와 Q4에 매출 상승 (시즌 효과 추정), Q3 하락이 반복 패턴인지 확인 필요

3. Q3 하락 가설:
   - 여름 비수기 영향
   - 신규 경쟁사 진입...`})]})]}),e.jsx("h2",{children:"2. 설문 결과 분석"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"설문 분석 프롬프트"}),e.jsx("pre",{children:e.jsx("code",{children:`다음 고객 만족도 설문 결과를 분석해주세요.

응답 수: 500명
전체 만족도: 4.2/5.0
항목별 점수:
- 제품 품질: 4.5
- 가격 적정성: 3.2
- 고객 서비스: 4.0
- 배송 속도: 4.8
- 앱 사용성: 3.5

주관식 키워드 빈도:
"비싸다" 45회, "품질 좋다" 78회, "느리다" 12회, "편리하다" 56회

분석 + 개선 우선순위 + 액션 플랜을 제안해주세요.`})})]}),e.jsx("h2",{children:"3. 시각화 제안"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"차트 추천"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`다음 데이터를 시각화하려고 합니다.
데이터 특성에 맞는 최적의 차트 유형을 추천하고 이유를 설명해주세요.

데이터:
- 5개 지역별 매출 비중 (합계 100%)
- 각 지역의 3년간 매출 추이
- 고객 연령대별 구매 빈도

각각에 대해 차트 유형, 축 설정, 색상 팁을 제안해주세요.`}),e.jsx("div",{className:"prompt-label",children:"AI 응답 (일부)"}),e.jsx("div",{className:"prompt-result",children:`1. 지역별 매출 비중 → 파이 차트 또는 도넛 차트
   - 5개 이하 카테고리라 파이 차트가 효과적
   - 가장 큰 비중부터 시계 방향 정렬

2. 3년간 매출 추이 → 라인 차트
   - X축: 연도, Y축: 매출액
   - 지역별 색상 구분, 범례 포함...`})]})]}),e.jsx("h2",{children:"4. 엑셀 수식 생성"}),e.jsxs("div",{className:"code-block",children:[e.jsx("div",{className:"code-header",children:"엑셀 수식 프롬프트"}),e.jsx("pre",{children:e.jsx("code",{children:`다음 조건에 맞는 엑셀 수식을 작성해주세요.

데이터: A열(부서명), B열(매출), C열(목표), D열(달성률 계산)

요구사항:
1. D열: 달성률 = 매출/목표 (백분율 표시)
2. 달성률 100% 이상이면 "초과달성", 80%~99%면 "양호", 80% 미만이면 "미달"을 E열에 표시
3. 부서별 매출 합계
4. 달성률 상위 3개 부서 추출`})})]}),e.jsx("h2",{children:"5. 인사이트 도출"}),e.jsxs("div",{className:"prompt-example",children:[e.jsx("div",{className:"prompt-example-header",children:"웹 분석 인사이트"}),e.jsxs("div",{className:"prompt-example-body",children:[e.jsx("div",{className:"prompt-label",children:"프롬프트"}),e.jsx("div",{className:"prompt-text",children:`웹사이트 GA 데이터입니다. 인사이트를 도출해주세요.

- 월 방문자: 50,000명 (전월 대비 +30%)
- 이탈률: 65% (전월 55%)
- 평균 체류: 1분 30초 (전월 2분 45초)
- 모바일 비율: 78%
- 전환율: 1.2% (전월 2.1%)
- 주요 유입: SNS 광고 70%, 검색 20%, 직접 10%

Why-So What-Now What 프레임워크로 분석해주세요.`})]})]}),e.jsxs("div",{className:"exercise-box",children:[e.jsx("h3",{children:"연습: 실제 데이터 분석하기"}),e.jsx("p",{children:"자신의 업무 데이터(또는 가상 데이터)를 활용하여 AI에게 분석을 요청해보세요. 분석 프레임워크를 지정하면 더 체계적인 결과를 얻을 수 있습니다."})]}),e.jsxs("div",{className:"lesson-nav",children:[e.jsx(s,{to:"/practice/coding",className:"lesson-nav-btn prev",children:"← 이전: 코딩"}),e.jsx(s,{to:"/practice/translation",className:"lesson-nav-btn next",children:"다음: 번역 →"})]})]})})})]})}export{d as default};
