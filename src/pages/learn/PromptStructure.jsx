import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function PromptStructure() {
  return (
    <>
      <SEOHead title="프롬프트 구조와 패턴" description="효과적인 프롬프트의 구조와 핵심 패턴을 학습합니다." />
      <section className="page-header"><div className="container"><h1>효과적인 프롬프트 구조와 패턴</h1><p>체계적인 프롬프트 설계를 위한 프레임워크를 배웁니다</p></div></section>

      <section className="lesson-content"><div className="container"><div className="lesson-body">
        <h2 data-aos="fade-up">RTF 패턴: Role - Task - Format</h2>
        <p>가장 기본적이고 효과적인 프롬프트 구조입니다. 역할(Role), 작업(Task), 형식(Format) 세 가지 요소로 구성됩니다.</p>

        <div className="code-block" data-aos="fade-up">
          <div className="code-header">RTF 패턴 예시</div>
          <pre><code>{`[Role] 당신은 10년 경력의 UX 디자이너입니다.
[Task] 모바일 쇼핑 앱의 결제 플로우를 개선해주세요.
[Format] 현재 문제점 3가지와 각각의 개선안을 표로 정리해주세요.`}</code></pre>
        </div>

        <h2 data-aos="fade-up">CRISPE 프레임워크</h2>
        <p>보다 정교한 프롬프트 설계를 위한 5요소 프레임워크입니다.</p>
        <div style={{overflowX:'auto'}} data-aos="fade-up">
          <table className="lesson-table">
            <thead><tr><th>요소</th><th>설명</th><th>예시</th></tr></thead>
            <tbody>
              <tr><td><strong>C</strong>apacity</td><td>AI의 역할/전문성</td><td>"당신은 데이터 사이언티스트입니다"</td></tr>
              <tr><td><strong>R</strong>equest</td><td>수행할 작업</td><td>"매출 데이터를 분석해주세요"</td></tr>
              <tr><td><strong>I</strong>nsight</td><td>배경 정보/맥락</td><td>"최근 3개월간 매출이 20% 감소했습니다"</td></tr>
              <tr><td><strong>S</strong>tyle</td><td>응답 스타일/톤</td><td>"경영진 보고서 형식으로"</td></tr>
              <tr><td><strong>P</strong>ersonality</td><td>응답 성격</td><td>"객관적이고 데이터 기반의 어조로"</td></tr>
              <tr><td><strong>E</strong>xperiment</td><td>추가 조건</td><td>"가설 3가지를 제시하고 검증 방법도 포함"</td></tr>
            </tbody>
          </table>
        </div>

        <div className="prompt-example" data-aos="fade-up">
          <div className="prompt-example-header">CRISPE 적용 예시</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`[Capacity] 당신은 SaaS 스타트업 전문 마케팅 컨설턴트입니다.
[Request] B2B SaaS 제품의 랜딩 페이지 카피를 작성해주세요.
[Insight] 우리 제품은 AI 기반 고객 서비스 챗봇이며, 응답 시간을 80% 단축시킵니다. 타겟은 중소기업 CS 팀장입니다.
[Style] 신뢰감을 주되 기술적이지 않은 언어로 작성해주세요.
[Personality] 전문적이면서도 친근한 톤을 유지하세요.
[Experiment] 헤드라인 3가지, 서브헤드라인, CTA 버튼 텍스트 2가지를 제안해주세요.`}</div>
            <div className="prompt-label">AI 응답 (예시)</div>
            <div className="prompt-result">{`헤드라인 옵션:
1. "고객 응답, 80% 더 빠르게. AI가 도와드립니다."
2. "CS팀의 야근을 줄여주는 AI 챗봇"
3. "고객 만족도를 높이는 가장 스마트한 방법"

서브헤드라인:
"복잡한 설정 없이 10분 만에 시작하세요. 이미 500개 이상의 중소기업이 선택했습니다."

CTA 버튼:
1. "무료로 시작하기"
2. "데모 체험하기"`}</div>
          </div>
        </div>

        <h2 data-aos="fade-up">핵심 패턴 모음</h2>

        <h3>1. 단계별 지시 패턴</h3>
        <div className="comparison-grid" data-aos="fade-up">
          <div className="comparison-card bad"><h4>나쁜 예</h4><p>"이 글을 개선해줘"</p></div>
          <div className="comparison-card good"><h4>좋은 예</h4><p>"이 글을 다음 단계로 개선해줘: 1) 문법 오류 수정 2) 문장 간결하게 3) 핵심 메시지 강화 4) 결론 추가"</p></div>
        </div>

        <h3>2. 구분자 패턴</h3>
        <div className="code-block" data-aos="fade-up">
          <div className="code-header">구분자로 데이터 분리</div>
          <pre><code>{`다음 두 텍스트를 비교 분석해주세요.

---텍스트 A---
[첫 번째 텍스트]

---텍스트 B---
[두 번째 텍스트]

분석 기준: 톤, 설득력, 구체성`}</code></pre>
        </div>

        <h3>3. 네거티브 프롬프트 패턴</h3>
        <div className="prompt-example" data-aos="fade-up">
          <div className="prompt-example-header">하지 말아야 할 것을 명시</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`파이썬 초보자를 위한 변수 설명을 작성해주세요.

하지 마세요:
- 메모리 주소나 포인터 개념 언급
- 다른 프로그래밍 언어와 비교
- 전문 용어를 설명 없이 사용

해주세요:
- 실생활 비유 활용
- 간단한 코드 예제 포함
- 연습 문제 2개 추가`}</div>
          </div>
        </div>

        <h3>4. 출력 형식 제어 패턴</h3>
        <div className="code-block" data-aos="fade-up">
          <div className="code-header">JSON 출력 지정</div>
          <pre><code>{`다음 텍스트에서 정보를 추출하여 JSON으로 반환해주세요.

텍스트: "김철수 부장 (마케팅팀) - 02-1234-5678, cs.kim@company.com"

출력 형식:
{
  "name": "",
  "position": "",
  "department": "",
  "phone": "",
  "email": ""
}`}</code></pre>
        </div>

        <div className="exercise-box" data-aos="fade-up">
          <h3>연습: CRISPE로 프롬프트 설계하기</h3>
          <p>CRISPE 프레임워크를 사용하여 다음 상황에 맞는 프롬프트를 작성해보세요:</p>
          <ul>
            <li><strong>상황:</strong> 신규 모바일 앱의 사용자 온보딩 시나리오를 설계해야 합니다</li>
            <li>C, R, I, S, P, E 각 요소를 모두 포함하세요</li>
          </ul>
        </div>

        <div className="callout-box" data-aos="fade-up">
          <h3>핵심 요약</h3>
          <ul>
            <li>RTF (Role-Task-Format)는 가장 기본적이고 효과적인 구조</li>
            <li>CRISPE는 복잡한 작업에 적합한 6요소 프레임워크</li>
            <li>단계별 지시, 구분자, 네거티브 프롬프트, 출력 형식 제어는 핵심 패턴</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/intro/ai-models" className="lesson-nav-btn prev">← 이전: AI 모델</Link><Link to="/learn/few-shot" className="lesson-nav-btn next">다음: Few-shot 기법 →</Link></div>
      </div></div></section>
    </>
  )
}
