import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function AiModels() {
  return (
    <>
      <SEOHead title="AI 모델 이해하기" description="ChatGPT, Claude, Gemini 등 주요 AI 모델의 특징과 차이점을 비교합니다." />
      <section className="page-header"><div className="container"><h1>AI 모델 이해하기</h1><p>주요 AI 모델의 특징을 비교하고 적합한 모델을 선택하는 방법을 배웁니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>대규모 언어 모델(LLM)이란?</h2>
        <p>대규모 언어 모델(Large Language Model, LLM)은 방대한 텍스트 데이터를 학습하여 인간과 유사한 텍스트를 이해하고 생성할 수 있는 AI 모델입니다. 수십억~수조 개의 매개변수(파라미터)를 가지며, 질문 답변, 글쓰기, 번역, 코딩 등 다양한 작업을 수행합니다.</p>

        <h2>주요 AI 모델 비교</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>항목</th><th>ChatGPT (OpenAI)</th><th>Claude (Anthropic)</th><th>Gemini (Google)</th></tr></thead>
            <tbody>
              <tr><td><strong>최신 모델</strong></td><td>GPT-4o, o1</td><td>Claude 4.5 Sonnet</td><td>Gemini 2.0</td></tr>
              <tr><td><strong>컨텍스트 윈도우</strong></td><td>128K 토큰</td><td>200K 토큰</td><td>1M+ 토큰</td></tr>
              <tr><td><strong>강점</strong></td><td>범용성, 플러그인 생태계</td><td>긴 문서 분석, 안전성, 코딩</td><td>멀티모달, 실시간 검색</td></tr>
              <tr><td><strong>약점</strong></td><td>환각(hallucination) 가능</td><td>실시간 정보 부족</td><td>복잡한 추론에서 약간 부족</td></tr>
              <tr><td><strong>무료 사용</strong></td><td>GPT-4o mini 무료</td><td>Claude 3.5 Sonnet 무료</td><td>Gemini 1.5 Flash 무료</td></tr>
              <tr><td><strong>적합한 작업</strong></td><td>일반 질문, 코딩, 창작</td><td>문서 분석, 코딩, 안전한 대화</td><td>이미지 분석, 검색 통합</td></tr>
            </tbody>
          </table>
        </div>

        <h2>모델별 프롬프트 팁</h2>

        <h3>ChatGPT 팁</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">ChatGPT에 최적화된 프롬프트</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 시니어 백엔드 개발자입니다.
다음 요구사항에 맞는 REST API를 설계해주세요.

요구사항: 사용자 관리 시스템
- CRUD 엔드포인트 설계
- JWT 인증 포함
- 에러 처리 표준화

출력 형식: 각 엔드포인트별 메서드, URL, 요청/응답 예시를 표로 정리`}</div>
            <div className="prompt-label">ChatGPT 특성</div>
            <div className="prompt-result">ChatGPT는 역할 부여와 구조화된 출력 요청에 잘 반응합니다. Custom Instructions를 활용하면 매번 역할을 지정할 필요가 없습니다.</div>
          </div>
        </div>

        <h3>Claude 팁</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">Claude에 최적화된 프롬프트</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 30페이지 분량의 계약서를 분석해주세요.

분석 항목:
1. 핵심 조항 요약 (5개 이내)
2. 잠재적 위험 조항 식별
3. 누락된 보호 조항
4. 수정 권고사항

<document>
[계약서 전문]
</document>

각 항목에 대해 해당 조항 번호를 인용하며 설명해주세요.`}</div>
            <div className="prompt-label">Claude 특성</div>
            <div className="prompt-result">Claude는 200K 토큰의 긴 컨텍스트 윈도우로 대용량 문서 분석에 강합니다. XML 태그(&lt;document&gt;)를 사용하면 입력 데이터를 명확히 구분할 수 있습니다.</div>
          </div>
        </div>

        <h3>Gemini 팁</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">Gemini에 최적화된 프롬프트</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`이 제품 이미지를 분석하고 다음 정보를 추출해주세요:
1. 제품 카테고리
2. 주요 특징 3가지
3. 예상 타겟 고객층
4. 경쟁 제품 비교

[이미지 첨부]

최신 시장 트렌드를 반영하여 분석해주세요.`}</div>
            <div className="prompt-label">Gemini 특성</div>
            <div className="prompt-result">Gemini는 이미지, 동영상, 오디오 등 멀티모달 입력을 지원하며, Google 검색과 연동되어 최신 정보를 반영한 답변이 가능합니다.</div>
          </div>
        </div>

        <h2>목적에 맞는 모델 선택 가이드</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>작업 유형</th><th>추천 모델</th><th>이유</th></tr></thead>
            <tbody>
              <tr><td>긴 문서 분석/요약</td><td>Claude</td><td>200K 컨텍스트, 정확한 인용</td></tr>
              <tr><td>코드 생성/디버깅</td><td>Claude / ChatGPT</td><td>모두 우수, Claude가 최근 강세</td></tr>
              <tr><td>이미지 분석</td><td>Gemini / ChatGPT</td><td>멀티모달 지원</td></tr>
              <tr><td>최신 정보 필요</td><td>Gemini / ChatGPT</td><td>실시간 웹 검색 연동</td></tr>
              <tr><td>창의적 글쓰기</td><td>ChatGPT / Claude</td><td>자연스러운 텍스트 생성</td></tr>
              <tr><td>안전한 콘텐츠</td><td>Claude</td><td>Anthropic의 안전성 중심 설계</td></tr>
            </tbody>
          </table>
        </div>

        <div className="exercise-box">
          <h3>연습: 같은 프롬프트로 모델 비교하기</h3>
          <p>다음 프롬프트를 ChatGPT, Claude, Gemini에 각각 입력하고 결과를 비교해보세요:</p>
          <div className="code-block" style={{margin:'12px 0'}}>
            <div className="code-header">비교 프롬프트</div>
            <pre><code>{`"인공지능의 미래에 대해 500자 내외로 설명해주세요.
낙관적 시각과 우려되는 점을 균형 있게 다뤄주세요.
일반인이 이해할 수 있는 쉬운 언어로 작성해주세요."`}</code></pre>
          </div>
          <p>비교 관점: 톤, 구체성, 균형성, 예시 활용, 가독성</p>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>각 AI 모델은 고유한 강점이 있으므로 목적에 맞게 선택해야 합니다</li>
            <li>ChatGPT는 범용성, Claude는 문서 분석과 코딩, Gemini는 멀티모달에 강합니다</li>
            <li>모델별 특성을 이해하면 프롬프트를 최적화할 수 있습니다</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/what-is-prompt" className="lesson-nav-btn prev">← 이전: 프롬프트란?</Link><Link to="/intro/chatgpt" className="lesson-nav-btn next">다음: ChatGPT (OpenAI) →</Link></div>
      </div></div></section>
    </>
  )
}
