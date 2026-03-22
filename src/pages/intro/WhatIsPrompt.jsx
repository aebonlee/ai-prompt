import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WhatIsPrompt() {
  return (
    <>
      <SEOHead title="프롬프트 엔지니어링이란?" description="프롬프트의 개념과 AI 모델과의 대화 원리를 이해합니다." />
      <section className="page-header"><div className="container"><h1>프롬프트 엔지니어링이란?</h1><p>AI에게 원하는 결과를 이끌어내는 질문의 기술을 배워봅시다</p></div></section>

      <section className="lesson-content"><div className="container"><div className="lesson-body">
        <h2>프롬프트(Prompt)란 무엇인가?</h2>
        <p><strong>프롬프트(Prompt)</strong>란 AI 모델에게 전달하는 입력 텍스트를 의미합니다. 여러분이 ChatGPT나 Claude에게 "오늘 날씨 어때?"라고 질문하면, 이 질문 자체가 바로 프롬프트입니다.</p>
        <p><strong>프롬프트 엔지니어링(Prompt Engineering)</strong>은 AI 모델로부터 원하는 결과를 정확하고 효율적으로 얻기 위해 프롬프트를 체계적으로 설계하고 최적화하는 기술입니다.</p>

        <div className="callout-box">
          <h3>핵심 개념</h3>
          <ul>
            <li><strong>프롬프트</strong>: AI 모델에 입력하는 텍스트 (질문, 지시, 맥락 등)</li>
            <li><strong>프롬프트 엔지니어링</strong>: 원하는 결과를 위해 프롬프트를 설계하는 기술</li>
            <li><strong>LLM</strong>: Large Language Model, 대규모 언어 모델</li>
          </ul>
        </div>

        <h2>왜 프롬프트 엔지니어링이 중요한가?</h2>
        <p>같은 AI 모델을 사용하더라도 프롬프트를 어떻게 작성하느냐에 따라 결과의 품질이 극적으로 달라집니다.</p>

        <div className="comparison-grid">
          <div className="comparison-card bad">
            <h4>모호한 프롬프트</h4>
            <p>"마케팅 좀 도와줘"</p>
            <p style={{marginTop:'8px',fontSize:'0.85rem'}}>AI는 무엇을 도와야 할지 모릅니다. 마케팅 전략? 광고 문구? SNS 콘텐츠?</p>
          </div>
          <div className="comparison-card good">
            <h4>명확한 프롬프트</h4>
            <p>"20대 여성을 타겟으로 한 친환경 화장품 브랜드의 인스타그램 게시물 5개를 작성해줘. 캐주얼한 톤으로, 해시태그 5개씩 포함."</p>
            <p style={{marginTop:'8px',fontSize:'0.85rem'}}>타겟, 제품, 채널, 수량, 톤이 모두 명확합니다.</p>
          </div>
        </div>

        <h2>LLM은 프롬프트를 어떻게 처리하는가?</h2>

        <h3>1단계: 토큰화 (Tokenization)</h3>
        <p>AI 모델은 텍스트를 <strong>토큰(Token)</strong>이라는 작은 단위로 분할합니다. 한국어는 영어보다 같은 의미를 전달하는 데 더 많은 토큰을 소비합니다.</p>

        <div className="code-block">
          <div className="code-header">토큰화 예시</div>
          <pre><code>{`입력: "프롬프트 엔지니어링을 배웁니다"
토큰화 결과 (예시): ["프롬", "프트", " 엔지", "니어", "링을", " 배", "웁니다"]
토큰 수: 약 7개`}</code></pre>
        </div>

        <h3>2단계: 어텐션 메커니즘 (Attention)</h3>
        <p>어텐션은 "문장에서 어떤 부분이 어떤 부분과 관련이 깊은가?"를 계산합니다. 핵심 지시사항을 프롬프트의 시작과 끝에 배치하면 더 강한 어텐션을 받습니다.</p>

        <h3>3단계: 텍스트 생성 (Generation)</h3>
        <p>LLM은 <strong>다음에 올 가장 가능성 높은 토큰</strong>을 하나씩 예측하여 응답을 생성합니다. temperature가 높으면 더 창의적이지만 예측하기 어려운 답변이 나옵니다.</p>

        <h2>프롬프트 vs 전통적 프로그래밍</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>구분</th><th>전통적 프로그래밍</th><th>프롬프트 엔지니어링</th></tr></thead>
            <tbody>
              <tr><td><strong>입력 방식</strong></td><td>프로그래밍 언어</td><td>자연어</td></tr>
              <tr><td><strong>실행 방식</strong></td><td>코드를 정확히 실행</td><td>문맥 이해 후 확률적 응답</td></tr>
              <tr><td><strong>결과 예측</strong></td><td>동일 입력 = 동일 결과</td><td>동일 입력이라도 결과 변동 가능</td></tr>
              <tr><td><strong>학습 곡선</strong></td><td>프로그래밍 문법 학습 필요</td><td>자연어로 진입 장벽 낮음</td></tr>
              <tr><td><strong>적합한 작업</strong></td><td>정확한 계산, 시스템 제어</td><td>텍스트 생성, 분석, 요약, 번역</td></tr>
            </tbody>
          </table>
        </div>

        <h2>좋은 프롬프트의 5가지 원칙</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">핵심 원칙</div>
          <div className="prompt-example-body">
            <div className="prompt-label">1. 구체성 (Specificity)</div>
            <div className="prompt-text">"좋은 글" 대신 "300자 이내의 제품 소개 문구"처럼 구체적으로 작성합니다.</div>
            <div className="prompt-label">2. 맥락 제공 (Context)</div>
            <div className="prompt-text">배경 정보, 대상 독자, 사용 목적 등을 함께 전달합니다.</div>
            <div className="prompt-label">3. 형식 지정 (Format)</div>
            <div className="prompt-text">"표로 정리해줘", "JSON 형식으로" 등 출력 구조를 지정합니다.</div>
            <div className="prompt-label">4. 제약 조건 (Constraints)</div>
            <div className="prompt-text">분량, 톤, 포함/제외할 내용 등 제약 조건을 설정합니다.</div>
            <div className="prompt-label">5. 예시 제공 (Examples)</div>
            <div className="prompt-text">원하는 결과의 예시를 보여주면 AI의 이해도가 크게 향상됩니다.</div>
          </div>
        </div>

        <h2>실전 프롬프트 예시</h2>
        <div className="code-block">
          <div className="code-header">제품 리뷰 분석 프롬프트</div>
          <pre><code>{`당신은 전자제품 리뷰 분석 전문가입니다.

아래 고객 리뷰 10개를 분석하여 정리해주세요:

1. 전체 만족도 요약 (2~3문장)
2. 주요 장점 Top 3 (언급 횟수 포함)
3. 주요 단점 Top 3 (언급 횟수 포함)
4. 구매 추천 대상
5. 종합 평점 (10점 만점)

제약 조건:
- 객관적인 톤을 유지하세요
- 리뷰에 없는 내용을 추가하지 마세요`}</code></pre>
        </div>

        <div className="exercise-box">
          <h3>연습 1: 나쁜 프롬프트 개선하기</h3>
          <p>"여행 계획 세워줘"를 5가지 원칙을 적용하여 개선해보세요.</p>
          <ul>
            <li>여행지, 기간, 예산, 인원 추가</li>
            <li>선호 스타일 (관광/맛집/휴양) 명시</li>
            <li>출력 형식 (일자별 일정표) 지정</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>연습 2: 직접 비교해보기</h3>
          <p>작성한 프롬프트를 ChatGPT나 Claude에 입력하고 "여행 계획 세워줘"의 결과와 비교해보세요. 프롬프트 엔지니어링의 효과를 체감할 수 있습니다.</p>
        </div>

        <div className="callout-box">
          <h3>이번 챕터 핵심 요약</h3>
          <ul>
            <li>프롬프트는 AI에게 전달하는 입력 텍스트, 프롬프트 엔지니어링은 이를 설계하는 기술</li>
            <li>LLM은 토큰화 → 어텐션 → 생성 과정을 거쳐 응답 생성</li>
            <li>좋은 프롬프트의 5원칙: 구체성, 맥락, 형식, 제약, 예시</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/" className="lesson-nav-btn prev">← 홈으로</Link><Link to="/intro/ai-models" className="lesson-nav-btn next">다음: AI 모델 이해하기 →</Link></div>
      </div></div></section>
    </>
  )
}
