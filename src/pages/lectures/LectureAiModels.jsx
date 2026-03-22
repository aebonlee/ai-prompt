import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureAiModels() {
  return (
    <>
      <SEOHead title="강의안: AI 모델 이해하기" description="ChatGPT, Claude, Gemini 등 주요 AI 모델의 특징을 비교하고 적합한 모델을 선택하는 방법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>강의안: AI 모델 이해하기</h1><p>주요 AI 모델의 특징을 비교하고 목적에 맞는 모델을 선택합니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>학습 목표</h3>
          <ul>
            <li>주요 AI 모델(ChatGPT, Claude, Gemini)의 특징을 비교할 수 있다</li>
            <li>모델별 강점과 약점을 파악하여 적합한 용도에 매칭할 수 있다</li>
            <li>작업 유형에 따라 최적의 모델을 선택할 수 있다</li>
          </ul>
        </div>

        <h2>핵심 개념: 대규모 언어 모델(LLM)</h2>
        <p>대규모 언어 모델(Large Language Model, LLM)은 방대한 텍스트 데이터를 학습하여 인간과 유사한 텍스트를 이해하고 생성하는 AI 모델입니다. 수십억~수조 개의 매개변수를 가지며, 질문 답변, 글쓰기, 번역, 코딩 등 다양한 작업을 수행합니다.</p>

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

        <h2>강의 내용: 모델 선택 기준</h2>
        <p>AI 모델을 선택할 때 고려해야 할 핵심 기준은 다음과 같습니다:</p>
        <ul>
          <li><strong>작업 유형</strong>: 텍스트 생성, 코드 작성, 이미지 분석 등 주요 작업의 성격</li>
          <li><strong>입력 길이</strong>: 처리해야 할 문서의 분량과 컨텍스트 윈도우 크기</li>
          <li><strong>정확성 요구</strong>: 환각(hallucination) 허용 범위와 사실 정확성 중요도</li>
          <li><strong>비용과 속도</strong>: API 사용 비용과 응답 속도 요구사항</li>
          <li><strong>최신 정보 필요성</strong>: 실시간 검색 연동 필요 여부</li>
        </ul>

        <h2>각 모델의 특화 분야</h2>

        <h3>ChatGPT - 범용성의 강자</h3>
        <p>가장 넓은 사용자 기반과 플러그인 생태계를 보유하고 있습니다. GPTs 커스텀 모델, DALL-E 이미지 생성, 코드 인터프리터 등 통합 도구가 강점입니다.</p>

        <h3>Claude - 분석과 안전성의 전문가</h3>
        <p>200K 토큰의 긴 컨텍스트 윈도우로 대용량 문서 분석에 탁월합니다. Anthropic의 안전성 중심 설계로 신뢰할 수 있는 답변을 제공하며, XML 태그를 활용한 구조화된 입력에 강합니다.</p>

        <h3>Gemini - 멀티모달의 선구자</h3>
        <p>이미지, 동영상, 오디오 등 다양한 입력을 처리할 수 있으며, Google 검색과 연동되어 최신 정보를 반영한 답변이 가능합니다.</p>

        <h2>목적별 추천 모델</h2>
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

        <div className="callout-box">
          <h3>강의 요약</h3>
          <ul>
            <li>ChatGPT, Claude, Gemini는 각각 고유한 강점과 특화 분야를 가지고 있다</li>
            <li>작업 유형, 입력 길이, 정확성 요구, 비용 등을 기준으로 모델을 선택해야 한다</li>
            <li>ChatGPT는 범용성, Claude는 문서 분석과 코딩, Gemini는 멀티모달에 강하다</li>
            <li>하나의 모델에 의존하지 말고 목적에 맞게 여러 모델을 활용하는 것이 효과적이다</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>복습 문제</h3>
          <ul>
            <li><strong>Q1.</strong> ChatGPT, Claude, Gemini의 컨텍스트 윈도우 크기를 각각 비교하세요.</li>
            <li><strong>Q2.</strong> 30페이지 분량의 계약서를 분석해야 할 때 어떤 모델이 적합한지, 그 이유와 함께 설명하세요.</li>
            <li><strong>Q3.</strong> 다음 프롬프트를 ChatGPT와 Claude에 각각 입력하고 결과를 비교해보세요: "인공지능의 미래에 대해 500자 내외로 설명해주세요."</li>
            <li><strong>Q4.</strong> 자신의 주요 업무에 가장 적합한 AI 모델은 무엇인지, 선택 기준과 함께 설명하세요.</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/lectures/what-is-prompt" className="lesson-nav-btn prev">← 이전: 프롬프트란?</Link><Link to="/lectures/structure" className="lesson-nav-btn next">다음: 프롬프트 구조와 패턴 →</Link></div>
      </div></div></section>
    </>
  )
}
