import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Claude() {
  return (
    <>
      <SEOHead title="Claude (Anthropic)" description="Anthropic의 Claude 모델에 대해 깊이 있게 알아봅니다. Claude 4.5 Sonnet의 특징, 안전성 설계, 활용법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>Claude (Anthropic)</h1><p>안전성과 정직함을 최우선으로 설계된 AI 어시스턴트</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>Anthropic과 Claude 소개</h2>
        <p><strong>Anthropic</strong>은 OpenAI 출신의 다리오 아모데이(Dario Amodei)와 다니엘라 아모데이(Daniela Amodei) 남매가 2021년에 설립한 AI 안전 연구 기업입니다. "AI 안전을 최우선으로"라는 철학 하에, 유해하거나 부정확한 응답을 최소화하는 것에 중점을 둡니다.</p>
        <p><strong>Claude</strong>는 Anthropic이 개발한 AI 어시스턴트로, <strong>Constitutional AI(헌법적 AI)</strong>라는 독자적인 학습 방법으로 훈련되었습니다. 이 방법은 AI 스스로가 윤리 원칙에 따라 자신의 응답을 평가하고 개선하도록 합니다.</p>

        <div className="callout-box">
          <h3>Claude 핵심 정보</h3>
          <ul>
            <li><strong>개발사</strong>: Anthropic (본사: 미국 샌프란시스코)</li>
            <li><strong>첫 출시</strong>: 2023년 3월 (Claude 1.0)</li>
            <li><strong>핵심 가치</strong>: 유용함(Helpful), 정직함(Honest), 무해함(Harmless)</li>
            <li><strong>주요 투자자</strong>: Google, Amazon, Spark Capital</li>
            <li><strong>접속 주소</strong>: claude.ai</li>
          </ul>
        </div>

        <h2>Claude 모델 변천사</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>모델</th><th>출시 시기</th><th>주요 특징</th></tr></thead>
            <tbody>
              <tr><td><strong>Claude 1.0</strong></td><td>2023년 3월</td><td>첫 공개 모델, 기본적인 대화 및 분석</td></tr>
              <tr><td><strong>Claude 2</strong></td><td>2023년 7월</td><td>100K 토큰 컨텍스트, 코딩 능력 향상</td></tr>
              <tr><td><strong>Claude 3 Haiku</strong></td><td>2024년 3월</td><td>경량 모델, 빠른 속도, 저비용</td></tr>
              <tr><td><strong>Claude 3 Sonnet</strong></td><td>2024년 3월</td><td>균형형 모델, 성능과 비용의 최적 조합</td></tr>
              <tr><td><strong>Claude 3 Opus</strong></td><td>2024년 3월</td><td>최고 성능, 복잡한 추론과 분석에 강점</td></tr>
              <tr><td><strong>Claude 3.5 Sonnet</strong></td><td>2024년 6월</td><td>Opus 수준 성능을 Sonnet 속도로, 코딩 강화</td></tr>
              <tr><td><strong>Claude 3.5 Haiku</strong></td><td>2024년 10월</td><td>Claude 3 Sonnet과 동등한 성능, Haiku 속도</td></tr>
              <tr><td><strong>Claude 4.5 Sonnet</strong></td><td>2025년 2월</td><td>최신 모델, 코딩·추론·창의성 전면 강화</td></tr>
            </tbody>
          </table>
        </div>

        <h2>현재 사용 가능한 주요 모델</h2>

        <h3>Claude 4.5 Sonnet (최신)</h3>
        <p>Claude의 최신 플래그십 모델로, 코딩, 추론, 창의적 글쓰기 등 전 영역에서 크게 향상되었습니다.</p>
        <ul>
          <li><strong>컨텍스트 윈도우</strong>: 200K 토큰 (약 500페이지 분량)</li>
          <li><strong>코딩</strong>: SWE-bench에서 업계 최고 수준</li>
          <li><strong>추론</strong>: 복잡한 다단계 추론에서 탁월</li>
          <li><strong>정직성</strong>: 모르는 것은 모른다고 답변, 환각 최소화</li>
        </ul>

        <h3>Claude 3.5 Haiku</h3>
        <p>빠른 응답이 필요한 작업에 최적화된 경량 모델입니다.</p>
        <ul>
          <li>이전 세대 Sonnet 급 성능을 빠른 속도로 제공</li>
          <li>실시간 채팅, 자동 완성, 대량 처리에 적합</li>
          <li>API 비용이 가장 저렴</li>
        </ul>

        <h3>Claude 3 Opus</h3>
        <p>가장 깊이 있는 추론이 필요한 작업에 사용됩니다.</p>
        <ul>
          <li>복잡한 분석, 연구, 전략 수립</li>
          <li>긴 문서의 심층 이해와 분석</li>
          <li>속도보다 품질이 중요한 작업에 적합</li>
        </ul>

        <h2>Claude 요금제</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>요금제</th><th>월 가격</th><th>사용 가능 모델</th><th>주요 기능</th></tr></thead>
            <tbody>
              <tr><td><strong>Free</strong></td><td>무료</td><td>Claude 3.5 Sonnet (제한적)</td><td>기본 대화, 파일 업로드</td></tr>
              <tr><td><strong>Pro</strong></td><td>$20</td><td>모든 모델</td><td>5배 사용량, Projects, 우선 접근</td></tr>
              <tr><td><strong>Team</strong></td><td>$25/인</td><td>모든 모델 + 팀 기능</td><td>공유 Projects, 관리 도구</td></tr>
              <tr><td><strong>Enterprise</strong></td><td>별도 문의</td><td>모든 기능</td><td>SSO, 감사 로그, 전용 지원</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Claude의 핵심 기능</h2>

        <h3>1. Projects (프로젝트)</h3>
        <p>관련 대화와 문서를 하나의 프로젝트로 묶어 관리할 수 있습니다.</p>
        <ul>
          <li>프로젝트별 커스텀 지침 설정</li>
          <li>참고 문서를 업로드하여 지식 베이스 구축</li>
          <li>팀원과 프로젝트 공유 가능 (Team 이상)</li>
        </ul>

        <h3>2. Artifacts (아티팩트)</h3>
        <p>Claude가 생성한 코드, 문서, 차트 등을 별도 패널에서 실시간 미리보기할 수 있습니다.</p>
        <ul>
          <li>HTML/CSS/JavaScript 코드를 즉시 렌더링</li>
          <li>SVG 차트, 다이어그램 시각화</li>
          <li>마크다운 문서 미리보기</li>
          <li>React 컴포넌트 실시간 프리뷰</li>
        </ul>

        <h3>3. 200K 컨텍스트 윈도우</h3>
        <p>Claude는 업계 최대급인 200K 토큰(약 500페이지)의 컨텍스트를 처리할 수 있습니다.</p>
        <ul>
          <li>전체 코드베이스를 한 번에 분석</li>
          <li>수백 페이지 계약서/논문 전문 분석</li>
          <li>긴 대화에서도 초반 맥락을 정확히 기억</li>
        </ul>

        <h3>4. Claude Code (개발자 도구)</h3>
        <p>터미널 기반 AI 코딩 어시스턴트로, 코드베이스를 직접 탐색하고 수정합니다.</p>
        <ul>
          <li>파일 읽기/쓰기, Git 작업 자동화</li>
          <li>버그 수정, 리팩토링, 테스트 작성</li>
          <li>프로젝트 전체를 이해한 맥락적 코딩</li>
        </ul>

        <h3>5. Vision (이미지 분석)</h3>
        <p>이미지를 입력으로 받아 분석, 설명, 텍스트 추출(OCR) 등을 수행합니다.</p>

        <h2>Claude에 최적화된 프롬프트 기법</h2>

        <h3>XML 태그 활용</h3>
        <p>Claude는 XML 태그를 사용하여 입력 데이터를 구조적으로 구분하는 것에 특히 잘 반응합니다.</p>
        <div className="prompt-example">
          <div className="prompt-example-header">XML 태그로 데이터 구조화</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 두 문서를 비교 분석해주세요.

<document1>
[첫 번째 계약서 전문]
</document1>

<document2>
[두 번째 계약서 전문]
</document2>

<instructions>
1. 두 문서의 핵심 차이점 5가지를 정리해주세요.
2. 각 차이점이 계약 당사자에게 미치는 영향을 설명하세요.
3. 수정을 권고하는 조항이 있다면 구체적인 대안을 제시하세요.
</instructions>

<output_format>
마크다운 표와 불릿 포인트를 활용하여 정리해주세요.
</output_format>`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">XML 태그로 데이터, 지시사항, 출력 형식을 명확히 분리하면 Claude가 각 부분을 정확히 구분하여 처리합니다.</div>
          </div>
        </div>

        <h3>체계적 분석 요청</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">긴 문서 분석</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 학술 논문 리뷰어입니다.

다음 논문을 읽고 아래 관점에서 평가해주세요:

<paper>
[논문 전문 - 수백 페이지도 가능]
</paper>

평가 항목:
1. 연구 목적의 명확성 (10점)
2. 방법론의 적절성 (10점)
3. 데이터 분석의 엄밀성 (10점)
4. 결론의 타당성 (10점)
5. 기여도와 참신성 (10점)

각 항목에 대해:
- 점수와 근거를 제시하세요
- 논문의 해당 부분을 직접 인용하세요
- 개선 제안이 있다면 구체적으로 작성하세요`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">Claude의 200K 컨텍스트를 활용하면 전체 논문을 한 번에 투입하고 체계적 분석을 받을 수 있습니다.</div>
          </div>
        </div>

        <h3>"생각하기" 유도 (Extended Thinking)</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">깊은 추론 유도</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`이 문제를 풀기 전에 먼저 다양한 접근 방식을 고려해주세요.
각 접근 방식의 장단점을 분석한 후, 가장 적절한 방법을 선택하고
그 이유를 설명해주세요.

문제: 직원 1,000명 규모 IT 기업의 원격근무 정책을
      어떻게 설계해야 할까요?

고려해야 할 측면:
- 생산성과 협업
- 직원 만족도와 복지
- 보안과 인프라
- 법적/세무적 이슈
- 기업 문화 유지`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">Claude에게 "먼저 생각해보라"고 지시하면 더 깊이 있고 다각적인 분석을 제공합니다. Claude 3.5 이상에서는 Extended Thinking 기능이 이를 자동으로 수행합니다.</div>
          </div>
        </div>

        <h2>Constitutional AI와 안전성</h2>
        <p>Claude의 가장 큰 차별점은 <strong>Constitutional AI(헌법적 AI)</strong> 접근법입니다.</p>

        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>원칙</th><th>설명</th><th>실제 동작</th></tr></thead>
            <tbody>
              <tr><td><strong>유용함 (Helpful)</strong></td><td>사용자의 요청에 최대한 도움이 되는 답변</td><td>구체적이고 실용적인 정보 제공</td></tr>
              <tr><td><strong>정직함 (Honest)</strong></td><td>모르는 것은 모른다고 인정</td><td>불확실한 정보에 대해 명시적으로 표시</td></tr>
              <tr><td><strong>무해함 (Harmless)</strong></td><td>유해하거나 위험한 콘텐츠 생성 거부</td><td>위험한 요청에 대해 거절하면서 대안 제시</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Claude의 장점과 한계</h2>

        <div className="comparison-grid">
          <div className="comparison-card good">
            <h4>장점</h4>
            <ul>
              <li>업계 최대급 200K 토큰 컨텍스트</li>
              <li>정직하고 안전한 응답 (환각 최소화)</li>
              <li>코딩 능력 업계 최고 수준</li>
              <li>XML 태그 기반 구조적 프롬프팅</li>
              <li>Artifacts로 코드 실시간 미리보기</li>
              <li>긴 문서 분석 정확도 높음</li>
            </ul>
          </div>
          <div className="comparison-card bad">
            <h4>한계</h4>
            <ul>
              <li>실시간 웹 검색 미지원 (최신 정보 제한)</li>
              <li>이미지 생성 기능 없음</li>
              <li>ChatGPT 대비 생태계(플러그인) 작음</li>
              <li>일부 국가에서 접근 제한</li>
              <li>지나치게 신중한 응답을 할 때가 있음</li>
            </ul>
          </div>
        </div>

        <h2>Claude API 활용</h2>
        <div className="code-block">
          <div className="code-header">API 호출 예시 (Python)</div>
          <pre><code>{`import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": "프롬프트 엔지니어링의 핵심 원칙을 설명해주세요."
        }
    ],
    system="당신은 AI 교육 전문가입니다. 쉽고 친절하게 설명합니다."
)

print(message.content[0].text)`}</code></pre>
        </div>

        <div className="callout-box">
          <h3>Claude API 특징</h3>
          <ul>
            <li><strong>Messages API</strong>: 대화형 인터페이스로 system, user, assistant 역할 구분</li>
            <li><strong>Streaming</strong>: 실시간 토큰 스트리밍으로 빠른 체감 응답</li>
            <li><strong>Tool Use</strong>: 외부 도구/함수를 정의하여 Claude가 호출하도록 설정</li>
            <li><strong>Batch API</strong>: 대량 요청을 50% 할인된 가격으로 비동기 처리</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>실습: Claude 활용하기</h3>
          <ol>
            <li>긴 문서(논문, 보고서 등)를 Claude에 업로드하고 요약 요청하기</li>
            <li>XML 태그를 사용하여 구조화된 프롬프트 작성하기</li>
            <li>Artifacts 기능으로 HTML/CSS 코드를 실시간 미리보기하기</li>
            <li>같은 질문을 Claude와 ChatGPT에 입력하고 응답 스타일 비교하기</li>
          </ol>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>Claude는 안전성과 정직함을 최우선으로 설계된 AI 어시스턴트</li>
            <li>200K 토큰 컨텍스트로 긴 문서 분석에 강점</li>
            <li>XML 태그 활용한 구조적 프롬프팅이 핵심 기법</li>
            <li>Constitutional AI로 환각과 유해 콘텐츠 최소화</li>
            <li>코딩, 분석, 학술 작업에서 업계 최고 수준의 성능</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/chatgpt" className="lesson-nav-btn prev">← ChatGPT (OpenAI)</Link><Link to="/intro/gemini" className="lesson-nav-btn next">다음: Gemini (Google) →</Link></div>
      </div></div></section>
    </>
  )
}
