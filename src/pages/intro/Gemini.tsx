import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Gemini() {
  return (
    <>
      <SEOHead title="Gemini (Google)" description="Google의 Gemini 모델에 대해 깊이 있게 알아봅니다. 멀티모달 AI의 특징, Google 생태계 통합, 활용법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>Gemini (Google)</h1><p>Google의 차세대 멀티모달 AI, 검색과 생태계의 강력한 통합</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>Google과 Gemini 소개</h2>
        <p><strong>Google DeepMind</strong>는 2023년 Google Brain과 DeepMind가 합병하여 탄생한 AI 연구 조직입니다. 알파고(AlphaGo)로 유명한 DeepMind의 연구 역량과 Google의 대규모 인프라가 결합되어, <strong>Gemini</strong>라는 차세대 AI 모델을 개발했습니다.</p>
        <p>Gemini는 "쌍둥이자리(Gemini)"라는 이름처럼 <strong>텍스트, 이미지, 오디오, 비디오, 코드</strong>를 하나의 모델에서 네이티브하게 처리하도록 설계된 <strong>멀티모달 AI</strong>입니다. Google의 방대한 데이터와 인프라, 그리고 검색·지도·YouTube 등 서비스와의 통합이 가장 큰 차별점입니다.</p>

        <div className="callout-box">
          <h3>Gemini 핵심 정보</h3>
          <ul>
            <li><strong>개발사</strong>: Google DeepMind</li>
            <li><strong>첫 출시</strong>: 2023년 12월 (Gemini 1.0)</li>
            <li><strong>전신</strong>: Bard (2023년 2월 출시, 2024년 Gemini로 리브랜딩)</li>
            <li><strong>핵심 강점</strong>: 멀티모달, Google 생태계 통합, 대규모 컨텍스트</li>
            <li><strong>접속 주소</strong>: gemini.google.com</li>
          </ul>
        </div>

        <h2>Gemini 모델 변천사</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>모델</th><th>출시 시기</th><th>주요 특징</th></tr></thead>
            <tbody>
              <tr><td><strong>Bard (LaMDA)</strong></td><td>2023년 2월</td><td>Google의 첫 대화형 AI, LaMDA 기반</td></tr>
              <tr><td><strong>Bard (PaLM 2)</strong></td><td>2023년 5월</td><td>PaLM 2로 업그레이드, 성능 대폭 향상</td></tr>
              <tr><td><strong>Gemini 1.0</strong></td><td>2023년 12월</td><td>멀티모달 네이티브 모델, Ultra/Pro/Nano</td></tr>
              <tr><td><strong>Gemini 1.5 Pro</strong></td><td>2024년 2월</td><td>1M 토큰 컨텍스트, MoE 아키텍처</td></tr>
              <tr><td><strong>Gemini 1.5 Flash</strong></td><td>2024년 5월</td><td>경량 고속 모델, 무료 사용 가능</td></tr>
              <tr><td><strong>Gemini 2.0 Flash</strong></td><td>2024년 12월</td><td>에이전트 시대를 위한 차세대 모델</td></tr>
              <tr><td><strong>Gemini 2.5 Pro</strong></td><td>2025년 3월</td><td>최신 추론 강화 모델, 사고 과정 내장</td></tr>
            </tbody>
          </table>
        </div>

        <h2>현재 사용 가능한 주요 모델</h2>

        <h3>Gemini 2.5 Pro (최신)</h3>
        <p>Google의 가장 강력한 사고 모델로, 복잡한 추론 작업에서 최고 성능을 제공합니다.</p>
        <ul>
          <li><strong>컨텍스트 윈도우</strong>: 1M 토큰 (약 2,500페이지 분량)</li>
          <li><strong>사고 과정</strong>: 내부 추론 과정을 거쳐 더 정확한 답변</li>
          <li><strong>코딩</strong>: 복잡한 코드 생성 및 디버깅에 강점</li>
          <li><strong>멀티모달</strong>: 이미지, 비디오, 오디오 네이티브 처리</li>
        </ul>

        <h3>Gemini 2.0 Flash</h3>
        <p>빠른 속도와 에이전트 기능을 갖춘 차세대 모델입니다.</p>
        <ul>
          <li><strong>에이전트 기능</strong>: 도구 사용, 웹 검색, 코드 실행을 자율적으로 수행</li>
          <li><strong>실시간 스트리밍</strong>: 오디오/비디오 실시간 처리</li>
          <li><strong>네이티브 이미지 생성</strong>: 텍스트에서 이미지 직접 생성</li>
          <li>무료 사용자에게 기본 제공</li>
        </ul>

        <h3>Gemini 1.5 Pro</h3>
        <p>안정적인 성능의 범용 모델로, 1M 토큰의 초대형 컨텍스트가 특징입니다.</p>
        <ul>
          <li><strong>MoE 아키텍처</strong>: Mixture of Experts로 효율적 처리</li>
          <li>전체 코드 저장소, 긴 동영상, 대규모 문서 분석에 적합</li>
          <li>API에서 2M 토큰까지 확장 가능</li>
        </ul>

        <h2>Gemini 요금제</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>요금제</th><th>월 가격</th><th>사용 가능 모델</th><th>주요 기능</th></tr></thead>
            <tbody>
              <tr><td><strong>Free</strong></td><td>무료</td><td>Gemini 2.0 Flash</td><td>기본 대화, 이미지 분석, Google 연동</td></tr>
              <tr><td><strong>Advanced</strong></td><td>$19.99</td><td>Gemini 2.5 Pro, 모든 모델</td><td>1M 컨텍스트, Deep Research, Gems, 2TB 저장공간</td></tr>
              <tr><td><strong>Business</strong></td><td>Google Workspace 포함</td><td>모든 모델</td><td>기업 보안, 데이터 보호, 관리 콘솔</td></tr>
              <tr><td><strong>Enterprise</strong></td><td>별도 문의</td><td>모든 기능</td><td>맞춤 보안, SLA, 전용 지원</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Gemini의 핵심 기능</h2>

        <h3>1. 멀티모달 네이티브 처리</h3>
        <p>Gemini는 처음부터 텍스트, 이미지, 오디오, 비디오를 하나의 모델에서 처리하도록 설계되었습니다.</p>
        <ul>
          <li><strong>이미지</strong>: 사진 분석, OCR, 차트 해석, 이미지 생성</li>
          <li><strong>비디오</strong>: YouTube 영상 분석, 장면 설명, 요약</li>
          <li><strong>오디오</strong>: 음성 인식, 팟캐스트 요약, 음악 분석</li>
          <li><strong>코드</strong>: 코드 생성, 리뷰, 디버깅</li>
        </ul>

        <h3>2. Google 생태계 통합</h3>
        <p>Gemini의 가장 큰 차별점은 Google 서비스와의 깊은 통합입니다.</p>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>서비스</th><th>Gemini 통합 기능</th></tr></thead>
            <tbody>
              <tr><td><strong>Google 검색</strong></td><td>실시간 웹 검색으로 최신 정보 기반 답변</td></tr>
              <tr><td><strong>Gmail</strong></td><td>이메일 요약, 답장 초안 작성, 분류</td></tr>
              <tr><td><strong>Google Docs</strong></td><td>문서 작성 보조, 요약, 편집 제안</td></tr>
              <tr><td><strong>Google Sheets</strong></td><td>데이터 분석, 수식 생성, 차트 추천</td></tr>
              <tr><td><strong>Google Slides</strong></td><td>프레젠테이션 생성, 이미지 삽입</td></tr>
              <tr><td><strong>Google Maps</strong></td><td>장소 추천, 경로 안내, 여행 계획</td></tr>
              <tr><td><strong>YouTube</strong></td><td>영상 내용 분석 및 요약</td></tr>
              <tr><td><strong>Google Drive</strong></td><td>파일 검색, 문서 기반 질의응답</td></tr>
            </tbody>
          </table>
        </div>

        <h3>3. 1M+ 토큰 컨텍스트</h3>
        <p>Gemini는 업계 최대인 100만 토큰 이상의 컨텍스트 윈도우를 제공합니다.</p>
        <ul>
          <li>1시간 분량의 비디오 전체 분석</li>
          <li>수천 페이지 문서 한 번에 처리</li>
          <li>대규모 코드베이스 전체 이해</li>
          <li>11시간 분량의 오디오 처리</li>
        </ul>

        <h3>4. Deep Research</h3>
        <p>복잡한 주제에 대해 자동으로 수십 개의 웹 소스를 조사하고 종합 보고서를 작성합니다.</p>
        <ul>
          <li>다단계 검색과 분석을 자율적으로 수행</li>
          <li>출처를 명시한 구조화된 보고서 생성</li>
          <li>학술 연구, 시장 조사, 기술 분석에 유용</li>
        </ul>

        <h3>5. Gems (맞춤형 AI)</h3>
        <p>특정 목적에 맞는 Gemini 버전을 만들 수 있습니다 (ChatGPT의 GPTs와 유사).</p>

        <h3>6. Google AI Studio / Vertex AI</h3>
        <p>개발자를 위한 API 플랫폼으로, 무료 API 사용량이 관대합니다.</p>

        <h2>Gemini에 최적화된 프롬프트 기법</h2>

        <h3>멀티모달 프롬프트</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">이미지 + 텍스트 분석</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`[이미지: 레스토랑 메뉴판 사진 첨부]

이 메뉴판을 분석하여 다음을 수행해주세요:

1. 모든 메뉴 항목을 카테고리별로 정리 (표 형식)
2. 가격대 분석 (평균, 최저, 최고)
3. 2인 기준 추천 코스 3가지 (각각 예산별)
   - 가성비 코스: 5만원 이하
   - 표준 코스: 5~10만원
   - 프리미엄 코스: 10만원 이상
4. 특이하거나 추천할 만한 메뉴가 있다면 알려주세요`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">Gemini의 멀티모달 능력을 활용하면 이미지 속 텍스트를 정확히 인식하고, 구조화된 분석까지 한 번에 수행할 수 있습니다.</div>
          </div>
        </div>

        <h3>실시간 정보 활용</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">Google 검색 연동 프롬프트</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`최신 정보를 기반으로 다음 분석을 수행해주세요:

1. 2025년 현재 한국의 AI 산업 현황
   - 주요 기업과 서비스
   - 정부 정책 및 투자 동향
   - 시장 규모와 성장률

2. 글로벌 AI 트렌드와 비교
   - 한국의 강점과 약점
   - 주요 경쟁국 (미국, 중국, 일본) 대비 포지션

3. 향후 1~3년 전망과 추천 대응 전략

각 항목에 출처를 함께 표시해주세요.`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">Gemini는 Google 검색을 실시간으로 활용하여 최신 데이터를 기반으로 분석합니다. 출처 표시를 요청하면 신뢰성 있는 정보를 확인할 수 있습니다.</div>
          </div>
        </div>

        <h3>영상 분석 프롬프트</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">YouTube 영상 분석</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`이 YouTube 영상을 시청하고 다음을 정리해주세요:

[YouTube URL 또는 영상 업로드]

1. 전체 요약 (3~5문장)
2. 주요 포인트 타임스탬프별 정리
3. 발표자의 핵심 주장 3가지
4. 동의/반박할 수 있는 관점
5. 관련 추가 학습 자료 추천`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">Gemini는 영상의 비주얼과 오디오를 동시에 분석하여 텍스트 전사(transcript)만으로는 놓칠 수 있는 시각적 정보까지 포착합니다.</div>
          </div>
        </div>

        <h3>Google Workspace 활용</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">Gmail 연동 업무 자동화</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트 (Gemini in Gmail)</div>
            <div className="prompt-text">{`@Gemini 지난 일주일간 받은 이메일 중:
1. 답장이 필요한 이메일을 우선순위별로 정리해줘
2. 각 이메일에 대한 답장 초안을 작성해줘
3. 회의 관련 이메일에서 일정을 추출하여 캘린더에 추가할 수 있게 정리해줘`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">Google Workspace와 통합된 Gemini는 이메일, 문서, 캘린더를 넘나들며 업무를 자동화합니다.</div>
          </div>
        </div>

        <h2>Gemini의 장점과 한계</h2>

        <div className="comparison-grid">
          <div className="comparison-card good">
            <h4>장점</h4>
            <ul>
              <li>업계 최대 1M+ 토큰 컨텍스트</li>
              <li>네이티브 멀티모달 (이미지, 비디오, 오디오)</li>
              <li>실시간 Google 검색 통합</li>
              <li>Google Workspace 생태계 연동</li>
              <li>관대한 무료 사용량</li>
              <li>Google AI Studio 무료 API</li>
              <li>Deep Research 기능</li>
            </ul>
          </div>
          <div className="comparison-card bad">
            <h4>한계</h4>
            <ul>
              <li>복잡한 논리적 추론에서 간혹 부정확</li>
              <li>코딩 능력이 Claude/ChatGPT보다 약간 뒤처짐</li>
              <li>환각(Hallucination) 발생 가능</li>
              <li>Google 생태계 의존도 높음</li>
              <li>맞춤형 AI(Gems) 생태계가 GPTs보다 작음</li>
            </ul>
          </div>
        </div>

        <h2>Gemini API 활용</h2>
        <div className="code-block">
          <div className="code-header">API 호출 예시 (Python)</div>
          <pre><code>{`import google.generativeai as genai

genai.configure(api_key="your-api-key")

model = genai.GenerativeModel("gemini-2.0-flash")

# 텍스트 질의
response = model.generate_content(
    "프롬프트 엔지니어링의 핵심 원칙을 설명해주세요."
)
print(response.text)

# 이미지 + 텍스트 (멀티모달)
import PIL.Image
image = PIL.Image.open("menu.jpg")

response = model.generate_content([
    "이 메뉴판의 모든 항목을 표로 정리해주세요.",
    image
])
print(response.text)`}</code></pre>
        </div>

        <div className="callout-box">
          <h3>Google AI Studio 특징</h3>
          <ul>
            <li><strong>무료 API</strong>: Gemini Flash 모델 무료 사용 (분당 제한 있음)</li>
            <li><strong>프롬프트 갤러리</strong>: 다양한 프롬프트 템플릿 제공</li>
            <li><strong>파인튜닝</strong>: 사용자 데이터로 모델 맞춤 학습</li>
            <li><strong>임베딩</strong>: 텍스트 임베딩 API로 검색/추천 시스템 구축</li>
            <li><strong>Grounding</strong>: Google 검색 결과를 실시간 반영</li>
          </ul>
        </div>

        <h2>세 모델 비교: 어떤 상황에서 Gemini를 선택할까?</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>작업</th><th>ChatGPT</th><th>Claude</th><th>Gemini</th></tr></thead>
            <tbody>
              <tr><td>이미지/비디오 분석</td><td>좋음</td><td>좋음</td><td><strong>최고</strong></td></tr>
              <tr><td>최신 정보 검색</td><td>좋음</td><td>미지원</td><td><strong>최고</strong></td></tr>
              <tr><td>긴 문서 분석</td><td>좋음</td><td><strong>최고</strong></td><td>매우 좋음</td></tr>
              <tr><td>코딩</td><td>매우 좋음</td><td><strong>최고</strong></td><td>좋음</td></tr>
              <tr><td>업무 자동화</td><td>좋음</td><td>좋음</td><td><strong>최고 (Workspace)</strong></td></tr>
              <tr><td>안전성/정직성</td><td>좋음</td><td><strong>최고</strong></td><td>좋음</td></tr>
              <tr><td>무료 사용량</td><td>보통</td><td>보통</td><td><strong>관대함</strong></td></tr>
            </tbody>
          </table>
        </div>

        <div className="exercise-box">
          <h3>실습: Gemini 활용하기</h3>
          <ol>
            <li>사진을 찍어 Gemini에게 분석 요청하기 (예: 영수증, 메뉴, 건물)</li>
            <li>YouTube 영상 URL을 공유하고 요약 받기</li>
            <li>Google 검색 연동으로 최신 뉴스 분석 요청하기</li>
            <li>Deep Research로 관심 주제에 대한 심층 보고서 생성하기</li>
            <li>동일한 이미지를 ChatGPT, Claude, Gemini에 입력하고 분석 결과 비교하기</li>
          </ol>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>Gemini는 Google이 개발한 멀티모달 네이티브 AI 모델</li>
            <li>업계 최대 1M+ 토큰 컨텍스트로 대규모 데이터 처리에 강점</li>
            <li>Google 검색, Gmail, Docs 등 생태계와 긴밀히 통합</li>
            <li>이미지, 비디오, 오디오를 네이티브로 처리하는 진정한 멀티모달</li>
            <li>무료 사용량이 관대하여 시작하기 쉬움</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/claude" className="lesson-nav-btn prev">← Claude (Anthropic)</Link><Link to="/learn/structure" className="lesson-nav-btn next">다음: 프롬프트 구조와 패턴 →</Link></div>
      </div></div></section>
    </>
  )
}
