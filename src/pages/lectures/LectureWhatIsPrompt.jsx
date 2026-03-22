import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureWhatIsPrompt() {
  return (
    <>
      <SEOHead title="강의안: 프롬프트 엔지니어링이란?" description="프롬프트의 정의와 AI 대화 원리, 프롬프트 엔지니어링의 중요성을 학습합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 프롬프트 엔지니어링이란?</h1><p>프롬프트의 개념과 AI 모델과의 대화 원리를 이해합니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>학습 목표</h3>
          <ul>
            <li>프롬프트의 정의와 구성 요소를 이해한다</li>
            <li>AI와 대화하는 원리(토큰화, 어텐션, 생성)를 파악한다</li>
            <li>프롬프트 엔지니어링의 중요성과 필요성을 인식한다</li>
          </ul>
        </div>

        <h2>핵심 개념: 프롬프트란 무엇인가</h2>
        <p><strong>프롬프트(Prompt)</strong>란 AI 모델에게 전달하는 입력 텍스트를 의미합니다. 단순한 질문뿐만 아니라, 지시사항, 맥락 정보, 예시 등을 포함하는 포괄적인 입력입니다.</p>
        <p>프롬프트는 다음 요소들로 구성될 수 있습니다:</p>
        <ul>
          <li><strong>질문(Question)</strong>: AI에게 묻고자 하는 내용</li>
          <li><strong>지시(Instruction)</strong>: AI가 수행해야 할 작업</li>
          <li><strong>맥락(Context)</strong>: 배경 정보, 조건, 제약사항</li>
          <li><strong>예시(Example)</strong>: 원하는 출력의 샘플</li>
        </ul>

        <h2>왜 프롬프트 엔지니어링이 중요한가</h2>
        <p>같은 AI 모델이라도 프롬프트를 어떻게 작성하느냐에 따라 결과의 품질이 극적으로 달라집니다. 체계적인 프롬프트 설계는 AI 활용의 핵심 역량입니다.</p>

        <div className="prompt-example">
          <div className="prompt-example-header">나쁜 프롬프트 vs 좋은 프롬프트</div>
          <div className="prompt-example-body">
            <div className="prompt-label">나쁜 프롬프트</div>
            <div className="prompt-text">마케팅 전략 알려줘</div>
            <div className="prompt-label">문제점</div>
            <div className="prompt-result">대상, 제품, 목적, 예산, 기간 등 핵심 정보가 전혀 없어 AI가 일반적이고 모호한 답변만 제공합니다.</div>
            <div className="prompt-label">좋은 프롬프트</div>
            <div className="prompt-text">{`20대 직장인을 타겟으로 한 월 구독형 건강식 도시락 서비스의
인스타그램 마케팅 전략을 수립해주세요.

조건:
- 월 마케팅 예산: 500만원
- 런칭 후 3개월 이내
- KPI: 팔로워 1만명, 전환율 3%
- 경쟁사: A사, B사

출력 형식: 월별 실행 계획표`}</div>
            <div className="prompt-label">개선 포인트</div>
            <div className="prompt-result">타겟, 제품, 채널, 예산, 기간, KPI, 경쟁사, 출력 형식이 모두 명시되어 구체적이고 실행 가능한 전략이 도출됩니다.</div>
          </div>
        </div>

        <h2>강의 내용: AI는 프롬프트를 어떻게 처리하는가</h2>
        <p>대규모 언어 모델(LLM)은 프롬프트를 다음 세 단계로 처리합니다:</p>

        <h3>1단계: 토큰화 (Tokenization)</h3>
        <p>입력 텍스트를 <strong>토큰(Token)</strong>이라는 작은 단위로 분할합니다. 한국어는 영어보다 같은 의미를 전달하는 데 더 많은 토큰을 소비하므로 효율적인 프롬프트 작성이 중요합니다.</p>

        <h3>2단계: 어텐션 메커니즘 (Attention)</h3>
        <p>문장의 각 부분이 서로 어떤 관련성을 갖는지 계산합니다. 핵심 지시사항을 프롬프트의 <strong>시작과 끝</strong>에 배치하면 더 강한 어텐션을 받습니다.</p>

        <h3>3단계: 텍스트 생성 (Generation)</h3>
        <p>다음에 올 가장 가능성 높은 토큰을 하나씩 예측하여 응답을 생성합니다. temperature 값이 높으면 더 창의적이지만 예측하기 어려운 답변이 나옵니다.</p>

        <h2>좋은 프롬프트의 5가지 원칙</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>원칙</th><th>설명</th><th>예시</th></tr></thead>
            <tbody>
              <tr><td><strong>구체성</strong></td><td>모호한 표현 대신 구체적으로 작성</td><td>"좋은 글" → "300자 이내의 제품 소개 문구"</td></tr>
              <tr><td><strong>맥락 제공</strong></td><td>배경 정보, 대상, 목적 전달</td><td>대상 독자, 사용 목적, 산업 분야 명시</td></tr>
              <tr><td><strong>형식 지정</strong></td><td>출력 구조를 명시적으로 지정</td><td>"표로 정리", "JSON 형식으로"</td></tr>
              <tr><td><strong>제약 조건</strong></td><td>분량, 톤, 포함/제외 내용 설정</td><td>"500자 이내", "전문적인 톤"</td></tr>
              <tr><td><strong>예시 제공</strong></td><td>원하는 결과의 샘플 제시</td><td>입력-출력 쌍으로 기대 결과 시연</td></tr>
            </tbody>
          </table>
        </div>

        <div className="callout-box">
          <h3>강의 요약</h3>
          <ul>
            <li>프롬프트는 AI에게 전달하는 입력 텍스트로, 질문/지시/맥락/예시를 포함한다</li>
            <li>같은 AI도 프롬프트에 따라 결과가 극적으로 달라지므로 체계적 설계가 필요하다</li>
            <li>LLM은 토큰화 → 어텐션 → 생성 과정을 거쳐 응답을 만든다</li>
            <li>좋은 프롬프트의 5원칙: 구체성, 맥락, 형식, 제약, 예시</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>복습 문제</h3>
          <ul>
            <li><strong>Q1.</strong> 프롬프트의 4가지 구성 요소(질문, 지시, 맥락, 예시)를 각각 설명하세요.</li>
            <li><strong>Q2.</strong> "블로그 글 써줘"라는 프롬프트를 5가지 원칙을 적용하여 개선해보세요.</li>
            <li><strong>Q3.</strong> 어텐션 메커니즘의 특성을 고려할 때, 핵심 지시사항을 프롬프트의 어디에 배치하는 것이 효과적인가요?</li>
            <li><strong>Q4.</strong> 나쁜 프롬프트와 좋은 프롬프트의 차이를 자신의 업무 예시로 작성해보세요.</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/lectures" className="lesson-nav-btn prev">← 강의안 목록</Link><Link to="/lectures/ai-models" className="lesson-nav-btn next">다음: AI 모델 이해하기 →</Link></div>
      </div></div></section>
    </>
  )
}
