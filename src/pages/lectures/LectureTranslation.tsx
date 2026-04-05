import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureTranslation() {
  return (
    <>
      <SEOHead
        title="강의안: 실전 번역"
        description="자연스러운 번역, 로컬라이제이션, 다국어 콘텐츠 제작을 위한 프롬프트 기법을 학습합니다."
      />

      <section className="page-header">
        <div className="container">
          <h1>강의안: 실전 번역</h1>
          <p>자연스러운 번역과 로컬라이제이션을 위한 프롬프트 엔지니어링</p>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">
          <div className="lesson-body">

            <div className="callout-box">
              <h3>학습 목표</h3>
              <ul>
                <li>자연스러운 번역 결과를 얻기 위한 프롬프트 설계 방법을 이해한다</li>
                <li>문화적 맥락을 고려한 로컬라이제이션 프롬프트를 구성할 수 있다</li>
                <li>다국어 콘텐츠 제작 시 일관성을 유지하는 프롬프트 기법을 익힌다</li>
                <li>단순 번역과 맥락 번역의 차이를 이해하고 적절한 전략을 선택할 수 있다</li>
              </ul>
            </div>

            <h2>번역 프롬프트 설계 원칙</h2>

            <p>
              AI 번역에서 가장 흔한 실수는 단순히 "번역해 줘"라고 요청하는 것입니다.
              자연스럽고 정확한 번역을 위해서는 <strong>맥락, 대상 독자, 톤, 전문 용어 처리 방침</strong>을
              프롬프트에 명시해야 합니다.
            </p>

            <h3>1. 번역 맥락 제공</h3>
            <p>
              원문이 사용되는 맥락(마케팅 자료, 기술 문서, 일상 대화 등)을 알려주면
              AI가 적절한 어조와 어휘를 선택합니다. 같은 단어라도 맥락에 따라 번역이 달라집니다.
            </p>

            <h3>2. 대상 독자 명시</h3>
            <p>
              번역된 글을 읽을 사람이 누구인지 지정합니다.
              전문가 대상과 일반 대중 대상은 용어 수준과 설명 방식이 다릅니다.
            </p>

            <h3>3. 용어 일관성</h3>
            <p>
              브랜드명, 고유명사, 전문 용어의 번역 규칙을 미리 제시합니다.
              용어집(glossary)을 함께 제공하면 일관된 번역 결과를 얻을 수 있습니다.
            </p>

            <h2>단순 번역 vs 맥락 번역</h2>

            <p>
              아래 두 예시를 비교하면, 맥락 정보를 포함한 프롬프트가 얼마나 다른 결과를 만드는지
              확인할 수 있습니다.
            </p>

            <div className="prompt-example">
              <h4>단순 번역 프롬프트 (비추천)</h4>
              <pre>{`다음 영어 문장을 한국어로 번역해 주세요:

"We need to address the elephant in the room
before we can move forward with the project."`}</pre>
            </div>

            <p>
              단순 번역 결과: "우리는 방 안의 코끼리를 다루어야 프로젝트를 진행할 수 있습니다."
              -- 관용 표현이 직역되어 어색한 문장이 됩니다.
            </p>

            <div className="prompt-example">
              <h4>맥락 번역 프롬프트 (추천)</h4>
              <pre>{`다음 영어 문장을 한국어로 번역해 주세요.

[원문]
"We need to address the elephant in the room
before we can move forward with the project."

[맥락]
- 프로젝트 회의에서 팀 리더가 팀원들에게 하는 발언
- "elephant in the room"은 "모두가 알지만 꺼려하는 문제"를 의미하는 관용 표현
- 비즈니스 미팅 맥락

[번역 지침]
- 관용 표현은 한국어에서 자연스러운 동등한 표현으로 의역
- 비즈니스 상황에 맞는 격식체 사용
- 원문의 어조(직접적이지만 협력적인)를 유지`}</pre>
            </div>

            <p>
              맥락 번역 결과: "프로젝트를 진행하기 전에, 우리 모두 알고 있지만 아직 논의하지 않은 핵심 문제를 먼저 짚고 넘어가야 합니다."
              -- 자연스럽고 맥락에 맞는 번역이 됩니다.
            </p>

            <h2>로컬라이제이션 프롬프트</h2>

            <p>
              로컬라이제이션은 단순 번역을 넘어 <strong>문화적 적합성</strong>까지 고려하는 작업입니다.
              날짜 형식, 화폐 단위, 문화적 레퍼런스 등을 현지 독자에게 맞게 변환해야 합니다.
            </p>

            <div className="prompt-example">
              <h4>로컬라이제이션 프롬프트 예시</h4>
              <pre>{`다음 영어 마케팅 카피를 한국 시장용으로 로컬라이제이션해 주세요.

[원문]
"Save up to $50 on your Thanksgiving dinner!
Order by November 20th for free delivery.
Our family-sized turkey package serves 8-10 people."

[로컬라이제이션 지침]
1. 문화 적응
   - Thanksgiving → 한국의 유사 명절(추석)로 변경
   - turkey → 한국 명절에 적합한 음식으로 변경
   - 가격 단위: USD → KRW (1달러 = 1,300원 기준)

2. 형식 변환
   - 날짜 형식: November 20th → OO월 OO일
   - 인원 단위: 한국식 표현으로

3. 톤
   - 한국 소비자에게 친근하고 시즌 감성을 살리는 톤
   - 원문의 긴박감(기한 강조)은 유지

4. 브랜드 용어
   - "free delivery" → "무료 배송"으로 통일`}</pre>
            </div>

            <h2>다국어 프롬프트 팁</h2>

            <p>
              여러 언어로 동시에 번역할 때는 일관성을 유지하기 위한 추가 지침이 필요합니다.
            </p>

            <table className="lesson-table">
              <thead>
                <tr>
                  <th>상황</th>
                  <th>프롬프트 팁</th>
                  <th>예시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>용어 통일</td>
                  <td>용어집을 프롬프트에 포함</td>
                  <td>"cloud"는 항상 "클라우드"로 번역</td>
                </tr>
                <tr>
                  <td>톤 유지</td>
                  <td>언어별 톤 가이드 제공</td>
                  <td>한국어: 존댓말, 일본어: 丁寧語</td>
                </tr>
                <tr>
                  <td>길이 제한</td>
                  <td>UI 공간 제약 명시</td>
                  <td>"버튼 텍스트는 6자 이내"</td>
                </tr>
                <tr>
                  <td>고유명사</td>
                  <td>음역/의역 규칙 명시</td>
                  <td>인명은 음역, 기능명은 의역</td>
                </tr>
                <tr>
                  <td>포맷팅</td>
                  <td>언어별 포맷 규칙 지정</td>
                  <td>날짜: 한국 YYYY.MM.DD, 미국 MM/DD/YYYY</td>
                </tr>
              </tbody>
            </table>

            <div className="callout-box">
              <h3>강의 요약</h3>
              <ul>
                <li>번역 프롬프트의 핵심은 <strong>맥락, 대상 독자, 톤, 용어 처리 방침</strong>을 명확히 전달하는 것이다</li>
                <li>단순 번역은 직역 위험이 있으며, 맥락 번역 프롬프트가 훨씬 자연스러운 결과를 만든다</li>
                <li>관용 표현, 비유, 문화적 레퍼런스는 반드시 맥락 정보와 함께 번역을 요청한다</li>
                <li>로컬라이제이션은 언어뿐 아니라 문화, 단위, 형식까지 현지화하는 작업이다</li>
                <li>다국어 번역 시 용어집과 톤 가이드를 프롬프트에 포함하면 일관성을 유지할 수 있다</li>
              </ul>
            </div>

            <div className="exercise-box">
              <h3>복습 문제</h3>
              <ul>
                <li>영어 뉴스 기사 한 단락을 "단순 번역"과 "맥락 번역" 프롬프트로 각각 번역하고 결과를 비교해 보세요.</li>
                <li>관용 표현이 포함된 문장 3개를 찾아 로컬라이제이션 프롬프트를 작성해 보세요.</li>
                <li>같은 앱 UI 텍스트를 한국어, 일본어, 중국어로 동시 번역하는 프롬프트를 작성해 보세요.</li>
                <li>용어집을 포함한 프롬프트와 포함하지 않은 프롬프트의 번역 일관성을 비교해 보세요.</li>
              </ul>
            </div>

            <div className="lesson-nav">
              <Link to="/lectures/analysis" className="lesson-nav-btn prev">
                ← 이전: 실전: 데이터 분석
              </Link>
              <Link to="/lectures/business" className="lesson-nav-btn next">
                다음: 실전: 비즈니스 →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
