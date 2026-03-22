import{j as s,L as e}from"./index-ClU2zS5N.js";import{S as l}from"./SEOHead-Cki5UrDu.js";function r(){return s.jsxs(s.Fragment,{children:[s.jsx(l,{title:"강의안: 실전 데이터 분석",description:"데이터 분석, 시각화, 인사이트 도출을 위한 효과적인 프롬프트 설계 기법을 학습합니다."}),s.jsx("section",{className:"page-header",children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{children:"강의안: 실전 데이터 분석"}),s.jsx("p",{children:"데이터 분석, 시각화, 인사이트 도출을 위한 프롬프트 엔지니어링"})]})}),s.jsx("section",{className:"section lesson-content",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"lesson-body",children:[s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"학습 목표"}),s.jsxs("ul",{children:[s.jsx("li",{children:"데이터 분석 요청을 위한 체계적인 프롬프트 설계 방법을 이해한다"}),s.jsx("li",{children:"시각화 결과물을 정확히 지시하는 프롬프트를 구성할 수 있다"}),s.jsx("li",{children:"데이터에서 의미 있는 인사이트를 도출하도록 유도하는 기법을 익힌다"}),s.jsx("li",{children:"분석 목적에 따라 적합한 프롬프트 전략을 선택할 수 있다"})]})]}),s.jsx("h2",{children:"데이터 분석 프롬프트 설계"}),s.jsxs("p",{children:["AI를 활용한 데이터 분석에서는 ",s.jsx("strong",{children:"데이터의 맥락, 분석 목적, 기대 결과 형식"}),'을 명확히 전달하는 것이 핵심입니다. 단순히 "이 데이터를 분석해 줘"라고 요청하면 피상적인 결과만 얻게 됩니다.']}),s.jsx("h3",{children:"1. 데이터 맥락 제공"}),s.jsx("p",{children:"데이터가 어디서 온 것인지, 각 컬럼이 무엇을 의미하는지, 수집 기간은 언제인지 등 배경 정보를 충분히 제공합니다. AI가 데이터의 의미를 정확히 파악해야 유의미한 분석이 가능합니다."}),s.jsx("h3",{children:"2. 분석 목적 명시"}),s.jsx("p",{children:'"추세 파악", "이상치 탐지", "상관관계 분석", "예측", "비교 분석" 등 분석의 목적을 구체적으로 밝힙니다. 목적에 따라 적용할 분석 기법과 결과 제시 방식이 달라집니다.'}),s.jsx("h3",{children:"3. 결과 형식 지정"}),s.jsx("p",{children:'분석 결과를 표, 그래프, 요약문, 대시보드 등 어떤 형식으로 받고 싶은지 지정합니다. "경영진 보고용 요약"과 "기술팀 상세 분석"은 전혀 다른 형식을 요구합니다.'}),s.jsx("h2",{children:"데이터 분석 프롬프트 실전"}),s.jsx("p",{children:"아래 예시는 매출 데이터를 분석하여 인사이트를 도출하는 프롬프트입니다. 데이터 설명, 분석 관점, 결과 형식을 모두 포함합니다."}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("h4",{children:"데이터 분석 요청 프롬프트 예시"}),s.jsx("pre",{children:`다음 월별 매출 데이터를 분석해 주세요.

[데이터]
월 | 매출(만원) | 주문수 | 신규고객 | 재구매율
1월 | 4,200 | 380 | 120 | 32%
2월 | 3,800 | 340 | 95  | 35%
3월 | 5,100 | 450 | 150 | 38%
4월 | 4,900 | 430 | 130 | 40%
5월 | 5,500 | 490 | 160 | 42%
6월 | 6,200 | 550 | 180 | 45%

[데이터 맥락]
- 온라인 쇼핑몰 매출 데이터 (2024년 상반기)
- 3월에 신규 마케팅 캠페인 시작
- 5월에 앱 리뉴얼 출시

[분석 요청]
1. 전체 추세 분석: 매출 성장률과 주요 동인 파악
2. 마케팅 캠페인 효과: 3월 전후 지표 변화 분석
3. 고객 행동 분석: 신규 고객 유입과 재구매율의 관계
4. 앱 리뉴얼 효과: 5월 전후 변화 분석

[결과 형식]
- 각 분석 항목별 핵심 발견사항 (bullet point)
- 주요 수치에는 전월 대비 변화율 포함
- 마지막에 "핵심 인사이트 3가지"와 "추천 액션 아이템" 정리`})]}),s.jsx("h2",{children:"시각화 지시 방법"}),s.jsxs("p",{children:["AI에게 데이터 시각화를 요청할 때는 ",s.jsx("strong",{children:"차트 유형, 축 설정, 강조 포인트, 스타일"}),"을 구체적으로 지정합니다. 시각화 도구(Python matplotlib, D3.js 등)도 함께 명시하면 좋습니다."]}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("h4",{children:"시각화 지시 프롬프트 예시"}),s.jsx("pre",{children:`위 매출 데이터를 Python matplotlib로 시각화해 주세요.

[차트 1] 이중 축 라인 차트
- X축: 월 (1월~6월)
- 좌측 Y축: 매출 (만원) - 파란색 실선
- 우측 Y축: 재구매율 (%) - 주황색 점선
- 3월과 5월에 수직 점선으로 이벤트 표시
- 범례와 제목 포함

[차트 2] 누적 막대 그래프
- 신규 고객 vs 재구매 고객 비율
- 월별 비교
- 색상: 신규(하늘색), 재구매(진한 파랑)

[스타일]
- 한글 폰트: Malgun Gothic
- 전체 figsize: (14, 6)
- 격자(grid) 표시
- 숫자 레이블 표시`})]}),s.jsx("h2",{children:"분석 유형별 프롬프트 핵심 요소"}),s.jsxs("table",{className:"lesson-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"분석 유형"}),s.jsx("th",{children:"필수 포함 요소"}),s.jsx("th",{children:"기대 결과물"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"추세 분석"}),s.jsx("td",{children:"시계열 데이터, 분석 기간"}),s.jsx("td",{children:"성장률, 패턴, 변곡점"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"비교 분석"}),s.jsx("td",{children:"비교 대상, 비교 기준"}),s.jsx("td",{children:"차이점, 순위, 우위 영역"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"상관관계 분석"}),s.jsx("td",{children:"변수들, 가설"}),s.jsx("td",{children:"상관계수, 인과 관계 해석"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"이상치 탐지"}),s.jsx("td",{children:"정상 범위 기준, 데이터"}),s.jsx("td",{children:"이상치 목록, 원인 추정"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"예측 분석"}),s.jsx("td",{children:"과거 데이터, 예측 기간"}),s.jsx("td",{children:"예측값, 신뢰 구간"})]})]})]}),s.jsx("h2",{children:"인사이트 도출 팁"}),s.jsx("p",{children:"단순한 수치 나열이 아닌 실행 가능한 인사이트를 얻으려면 프롬프트에 다음 요소를 추가하세요."}),s.jsxs("div",{className:"prompt-example",children:[s.jsx("h4",{children:"인사이트 도출 강화 프롬프트"}),s.jsx("pre",{children:`분석 결과를 다음 프레임워크로 정리해 주세요:

1. So What? - 이 데이터가 의미하는 것은 무엇인가?
2. Now What? - 이 인사이트를 바탕으로 어떤 행동을 취해야 하는가?
3. What If? - 현재 추세가 지속되면 어떤 결과가 예상되는가?

각 인사이트에 대해:
- 근거 데이터 수치를 명시하세요
- 비즈니스 임팩트를 금액 또는 %로 추정하세요
- 우선순위를 높음/중간/낮음으로 분류하세요`})]}),s.jsxs("div",{className:"callout-box",children:[s.jsx("h3",{children:"강의 요약"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["데이터 분석 프롬프트의 핵심은 ",s.jsx("strong",{children:"데이터 맥락, 분석 목적, 결과 형식"}),"을 명확히 전달하는 것이다"]}),s.jsx("li",{children:"데이터의 배경 정보(출처, 기간, 컬럼 의미)를 충분히 제공해야 정확한 분석이 가능하다"}),s.jsx("li",{children:"시각화 요청 시 차트 유형, 축 설정, 스타일을 구체적으로 지정한다"}),s.jsx("li",{children:'인사이트 도출에는 "So What - Now What - What If" 프레임워크가 효과적이다'}),s.jsx("li",{children:"분석 유형(추세, 비교, 상관관계 등)에 따라 프롬프트 구성 요소가 달라진다"})]})]}),s.jsxs("div",{className:"exercise-box",children:[s.jsx("h3",{children:"복습 문제"}),s.jsxs("ul",{children:[s.jsx("li",{children:"자신의 업무 데이터(또는 공개 데이터셋)를 활용하여 분석 요청 프롬프트를 작성해 보세요."}),s.jsx("li",{children:'같은 데이터에 대해 "추세 분석"과 "이상치 탐지" 관점으로 각각 프롬프트를 작성하고 결과를 비교해 보세요.'}),s.jsx("li",{children:"시각화 프롬프트에서 차트 유형만 바꾸어 요청하고(막대→라인→파이) 어떤 차트가 가장 적합한지 판단해 보세요."}),s.jsx("li",{children:'"So What - Now What - What If" 프레임워크를 적용한 프롬프트와 적용하지 않은 프롬프트의 결과를 비교해 보세요.'})]})]}),s.jsxs("div",{className:"lesson-nav",children:[s.jsx(e,{to:"/lectures/coding",className:"lesson-nav-btn prev",children:"← 이전: 실전: 코딩"}),s.jsx(e,{to:"/lectures/translation",className:"lesson-nav-btn next",children:"다음: 실전: 번역 →"})]})]})})})]})}export{r as default};
