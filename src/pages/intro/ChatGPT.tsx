import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function ChatGPT() {
  return (
    <>
      <SEOHead title="ChatGPT (OpenAI)" description="OpenAI의 ChatGPT 모델에 대해 깊이 있게 알아봅니다. GPT-4o, o1 등 최신 모델의 특징과 활용법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>ChatGPT (OpenAI)</h1><p>세계에서 가장 널리 사용되는 AI 챗봇, ChatGPT의 모든 것</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>OpenAI와 ChatGPT 소개</h2>
        <p><strong>OpenAI</strong>는 2015년 샘 알트만(Sam Altman), 일론 머스크(Elon Musk) 등이 공동 설립한 AI 연구 기업입니다. 2022년 11월 <strong>ChatGPT</strong>를 출시하며 생성형 AI 혁명을 이끌었고, 출시 5일 만에 100만 사용자를 달성하며 역사상 가장 빠르게 성장한 소비자 서비스가 되었습니다.</p>
        <p>ChatGPT는 <strong>GPT(Generative Pre-trained Transformer)</strong> 아키텍처를 기반으로 하며, 방대한 텍스트 데이터를 사전 학습한 후 RLHF(인간 피드백 기반 강화학습)를 통해 대화에 최적화되었습니다.</p>

        <div className="callout-box">
          <h3>ChatGPT 핵심 정보</h3>
          <ul>
            <li><strong>개발사</strong>: OpenAI (본사: 미국 샌프란시스코)</li>
            <li><strong>출시일</strong>: 2022년 11월 30일</li>
            <li><strong>월간 활성 사용자</strong>: 약 2억 명 이상 (2024년 기준)</li>
            <li><strong>주요 투자자</strong>: Microsoft (130억 달러 이상 투자)</li>
            <li><strong>접속 주소</strong>: chat.openai.com</li>
          </ul>
        </div>

        <h2>GPT 모델 변천사</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>모델</th><th>출시 시기</th><th>파라미터</th><th>주요 특징</th></tr></thead>
            <tbody>
              <tr><td><strong>GPT-1</strong></td><td>2018년 6월</td><td>1.17억</td><td>Transformer 기반 첫 언어 모델</td></tr>
              <tr><td><strong>GPT-2</strong></td><td>2019년 2월</td><td>15억</td><td>제로샷 학습 가능, 텍스트 생성 품질 향상</td></tr>
              <tr><td><strong>GPT-3</strong></td><td>2020년 6월</td><td>1,750억</td><td>Few-shot 학습 가능, API 공개</td></tr>
              <tr><td><strong>GPT-3.5</strong></td><td>2022년 11월</td><td>-</td><td>ChatGPT 탑재, RLHF 적용</td></tr>
              <tr><td><strong>GPT-4</strong></td><td>2023년 3월</td><td>-</td><td>멀티모달(이미지 입력), 추론 능력 대폭 향상</td></tr>
              <tr><td><strong>GPT-4 Turbo</strong></td><td>2023년 11월</td><td>-</td><td>128K 컨텍스트, 저렴한 가격, 최신 데이터</td></tr>
              <tr><td><strong>GPT-4o</strong></td><td>2024년 5월</td><td>-</td><td>옴니(Omni)모델, 텍스트·오디오·이미지 통합</td></tr>
              <tr><td><strong>o1</strong></td><td>2024년 12월</td><td>-</td><td>추론 특화, Chain-of-Thought 내장, 수학·과학에 강점</td></tr>
            </tbody>
          </table>
        </div>

        <h2>현재 사용 가능한 주요 모델</h2>

        <h3>GPT-4o ("옴니")</h3>
        <p>GPT-4o는 OpenAI의 플래그십 모델로, 텍스트·이미지·오디오를 하나의 모델에서 처리합니다.</p>
        <ul>
          <li><strong>컨텍스트 윈도우</strong>: 128K 토큰 (약 300페이지 분량)</li>
          <li><strong>속도</strong>: GPT-4 Turbo 대비 2배 빠른 응답</li>
          <li><strong>비용</strong>: GPT-4 Turbo 대비 50% 저렴</li>
          <li><strong>멀티모달</strong>: 이미지 입력/출력, 음성 대화 지원</li>
          <li><strong>다국어</strong>: 한국어 등 비영어권 성능 크게 향상</li>
        </ul>

        <h3>GPT-4o mini</h3>
        <p>GPT-4o의 경량 버전으로, 빠른 속도와 저렴한 비용이 강점입니다.</p>
        <ul>
          <li>무료 사용자에게 기본 제공</li>
          <li>일상적인 대화와 간단한 작업에 최적</li>
          <li>GPT-3.5 Turbo를 대체하는 포지션</li>
        </ul>

        <h3>o1 (추론 모델)</h3>
        <p>o1은 복잡한 추론 문제에 특화된 모델입니다. 답변 전에 내부적으로 "생각하는 시간"을 가지며, 수학·과학·코딩 등 논리적 사고가 필요한 문제에서 뛰어난 성능을 보입니다.</p>
        <ul>
          <li><strong>Chain-of-Thought 내장</strong>: 단계별 추론을 자동으로 수행</li>
          <li><strong>수학 경시대회</strong>: AIME 2024에서 83.3% 정답률 달성</li>
          <li><strong>코딩 대회</strong>: Codeforces 상위 89% 수준</li>
          <li><strong>특징</strong>: 응답 시간이 길지만 정확도가 높음</li>
        </ul>

        <h2>ChatGPT 요금제</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>요금제</th><th>월 가격</th><th>사용 가능 모델</th><th>주요 기능</th></tr></thead>
            <tbody>
              <tr><td><strong>Free</strong></td><td>무료</td><td>GPT-4o mini, 제한적 GPT-4o</td><td>기본 대화, 웹 검색</td></tr>
              <tr><td><strong>Plus</strong></td><td>$20</td><td>GPT-4o, o1-mini</td><td>DALL-E, 고급 데이터 분석, GPTs</td></tr>
              <tr><td><strong>Pro</strong></td><td>$200</td><td>모든 모델 (o1 pro 포함)</td><td>무제한 사용, 최고 성능 모델</td></tr>
              <tr><td><strong>Team</strong></td><td>$25/인</td><td>Plus 기능 + 팀 협업</td><td>공유 워크스페이스, 관리 콘솔</td></tr>
              <tr><td><strong>Enterprise</strong></td><td>별도 문의</td><td>모든 기능</td><td>보안 강화, SSO, 감사 로그</td></tr>
            </tbody>
          </table>
        </div>

        <h2>ChatGPT의 핵심 기능</h2>

        <h3>1. Custom Instructions (사용자 지정 지침)</h3>
        <p>매번 반복하는 설정을 미리 저장하여 모든 대화에 자동 적용할 수 있습니다.</p>
        <div className="code-block">
          <div className="code-header">Custom Instructions 예시</div>
          <pre><code>{`[나에 대해]
나는 한국의 프론트엔드 개발자입니다.
주로 React, TypeScript를 사용합니다.
경력 3년차이며 팀 리드를 맡고 있습니다.

[ChatGPT 응답 방식]
- 코드는 TypeScript로 작성
- 간결하고 실용적인 답변 선호
- 코드에 주석을 한국어로 추가
- 보안 모범 사례 항상 고려`}</code></pre>
        </div>

        <h3>2. GPTs (맞춤형 챗봇)</h3>
        <p>코딩 없이 특정 목적에 맞는 AI 챗봇을 직접 만들 수 있습니다.</p>
        <ul>
          <li>특정 분야 전문 상담사 (법률, 의학, 마케팅 등)</li>
          <li>회사 내부 문서 기반 Q&A 봇</li>
          <li>교육용 튜터, 언어 학습 파트너</li>
          <li>GPT Store에서 다른 사용자가 만든 GPTs 이용 가능</li>
        </ul>

        <h3>3. 고급 데이터 분석 (Advanced Data Analysis)</h3>
        <p>파일(CSV, Excel, PDF 등)을 업로드하고 AI가 분석·시각화를 수행합니다.</p>
        <ul>
          <li>Python 코드를 내부적으로 실행하여 데이터 분석</li>
          <li>차트, 그래프 자동 생성</li>
          <li>통계 분석, 트렌드 발견</li>
        </ul>

        <h3>4. DALL-E 이미지 생성</h3>
        <p>텍스트 프롬프트로 이미지를 생성할 수 있습니다. Plus 이상 요금제에서 사용 가능합니다.</p>

        <h3>5. 웹 브라우징</h3>
        <p>실시간으로 웹을 검색하여 최신 정보를 기반으로 답변합니다.</p>

        <h2>ChatGPT에 최적화된 프롬프트 기법</h2>

        <h3>시스템 프롬프트 활용</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">역할 + 제약조건 + 형식</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 10년 경력의 UX/UI 디자이너입니다.

다음 규칙을 따라주세요:
1. 답변은 항상 구체적인 예시와 함께 제공
2. 디자인 원칙을 근거로 설명
3. 실무에서 바로 적용 가능한 팁 포함

사용자의 앱 디자인 관련 질문에 답변해주세요.`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">명확한 역할과 규칙을 설정하면 ChatGPT가 일관된 전문가 페르소나를 유지합니다.</div>
          </div>
        </div>

        <h3>단계적 지시 (Step-by-step)</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">복잡한 작업 분해</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 단계를 순서대로 수행해주세요:

1단계: 아래 제품 설명을 읽고 핵심 기능 3가지를 추출하세요.
2단계: 각 기능에 대해 고객 관점의 혜택(benefit)을 작성하세요.
3단계: 20대 여성 타겟의 인스타그램 광고 문구를 3개 작성하세요.
4단계: 각 문구에 어울리는 해시태그 5개를 추천하세요.

제품 설명:
"에어핏 프로 - 12시간 연속 재생, 액티브 노이즈캔슬링,
IPX5 방수 등급의 무선 이어버드"`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">복잡한 작업을 단계로 나누면 각 단계의 품질이 높아지고 누락이 줄어듭니다.</div>
          </div>
        </div>

        <h3>출력 형식 지정</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">구조화된 결과 요청</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 정보를 JSON 형식으로 정리해주세요:

입력: "서울에 위치한 3년 된 카페. 주 메뉴는 스페셜티 커피와
수제 디저트. 월 평균 매출 3,000만원. 직원 5명."

출력 스키마:
{
  "business_name": "string",
  "location": "string",
  "years_in_business": number,
  "main_products": ["string"],
  "monthly_revenue": "string",
  "employee_count": number
}`}</div>
            <div className="prompt-label">효과</div>
            <div className="prompt-result">JSON, 표, 마크다운 등 명확한 형식을 지정하면 후처리가 쉬운 구조화된 출력을 얻을 수 있습니다.</div>
          </div>
        </div>

        <h2>ChatGPT의 장점과 한계</h2>

        <div className="comparison-grid">
          <div className="comparison-card good">
            <h4>장점</h4>
            <ul>
              <li>가장 큰 사용자 커뮤니티와 생태계</li>
              <li>GPTs, 플러그인 등 확장성</li>
              <li>멀티모달 지원 (이미지, 음성, 파일)</li>
              <li>빠른 응답 속도</li>
              <li>직관적인 인터페이스</li>
              <li>다양한 API 옵션</li>
            </ul>
          </div>
          <div className="comparison-card bad">
            <h4>한계</h4>
            <ul>
              <li>환각(Hallucination) 현상 - 그럴듯한 거짓 정보 생성</li>
              <li>학습 데이터 이후 정보 부족 (웹 검색으로 보완)</li>
              <li>복잡한 수학적 추론에서 실수 가능</li>
              <li>긴 대화에서 초반 맥락을 잊는 경향</li>
              <li>무료 사용자 기능 제한</li>
            </ul>
          </div>
        </div>

        <h2>ChatGPT API 활용</h2>
        <p>개발자는 OpenAI API를 통해 자체 서비스에 GPT 모델을 통합할 수 있습니다.</p>
        <div className="code-block">
          <div className="code-header">API 호출 예시 (Python)</div>
          <pre><code>{`from openai import OpenAI

client = OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "당신은 친절한 한국어 튜터입니다."},
        {"role": "user", "content": "프롬프트 엔지니어링이 뭔가요?"}
    ],
    temperature=0.7,
    max_tokens=1000
)

print(response.choices[0].message.content)`}</code></pre>
        </div>

        <div className="callout-box">
          <h3>API 주요 파라미터</h3>
          <ul>
            <li><strong>temperature</strong>: 0.0~2.0, 높을수록 창의적 (기본 1.0)</li>
            <li><strong>max_tokens</strong>: 최대 출력 토큰 수</li>
            <li><strong>top_p</strong>: 토큰 선택 범위 (0.0~1.0)</li>
            <li><strong>frequency_penalty</strong>: 반복 억제 (-2.0~2.0)</li>
            <li><strong>presence_penalty</strong>: 새로운 주제 유도 (-2.0~2.0)</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>실습: ChatGPT 마스터하기</h3>
          <p>다음 과제를 ChatGPT에서 직접 수행해보세요:</p>
          <ol>
            <li>Custom Instructions를 자신의 직업/관심사에 맞게 설정해보기</li>
            <li>같은 질문을 GPT-4o와 GPT-4o mini로 비교해보기</li>
            <li>CSV 파일을 업로드하고 데이터 분석 요청하기</li>
            <li>시스템 프롬프트를 활용하여 특정 분야 전문가 대화 진행하기</li>
          </ol>
        </div>

        <div className="callout-box">
          <h3>핵심 요약</h3>
          <ul>
            <li>ChatGPT는 가장 널리 사용되는 AI 챗봇으로, GPT-4o가 현재 플래그십 모델</li>
            <li>Custom Instructions와 GPTs로 개인화된 AI 경험 가능</li>
            <li>역할 부여, 단계적 지시, 형식 지정이 핵심 프롬프트 기법</li>
            <li>o1 모델은 복잡한 추론 문제에 특화된 별도 모델</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/ai-models" className="lesson-nav-btn prev">← AI 모델 이해하기</Link><Link to="/intro/claude" className="lesson-nav-btn next">다음: Claude (Anthropic) →</Link></div>
      </div></div></section>
    </>
  )
}
