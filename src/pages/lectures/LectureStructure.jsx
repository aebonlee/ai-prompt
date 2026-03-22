import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureStructure() {
  return (
    <>
      <SEOHead title="강의안: 프롬프트 구조와 패턴" description="RTF 패턴, CRISPE 프레임워크 등 효과적인 프롬프트 구조와 핵심 패턴을 학습합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 프롬프트 구조와 패턴</h1><p>체계적인 프롬프트 설계를 위한 프레임워크와 핵심 패턴을 배웁니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>학습 목표</h3>
          <ul>
            <li>RTF(Role-Task-Format) 패턴을 이해하고 적용할 수 있다</li>
            <li>CRISPE 프레임워크의 6가지 요소를 활용할 수 있다</li>
            <li>단계별 지시, 구분자, 네거티브 프롬프트 등 핵심 패턴을 구사할 수 있다</li>
          </ul>
        </div>

        <h2>핵심 개념: RTF 패턴</h2>
        <p>가장 기본적이고 효과적인 프롬프트 구조입니다. <strong>역할(Role)</strong>, <strong>작업(Task)</strong>, <strong>형식(Format)</strong> 세 가지 요소로 구성됩니다.</p>

        <div className="code-block">
          <div className="code-header">RTF 패턴 예시</div>
          <pre><code>{`[Role] 당신은 10년 경력의 UX 디자이너입니다.
[Task] 모바일 쇼핑 앱의 결제 플로우를 개선해주세요.
[Format] 현재 문제점 3가지와 각각의 개선안을 표로 정리해주세요.`}</code></pre>
        </div>

        <p>RTF 패턴의 각 요소가 하는 역할:</p>
        <ul>
          <li><strong>Role</strong>: AI의 전문성과 관점을 설정하여 답변의 깊이를 높임</li>
          <li><strong>Task</strong>: 수행할 작업을 구체적으로 명시하여 방향성 제공</li>
          <li><strong>Format</strong>: 출력 형식을 지정하여 일관되고 활용 가능한 결과물 확보</li>
        </ul>

        <h2>강의 내용: CRISPE 프레임워크</h2>
        <p>보다 정교한 프롬프트 설계를 위한 6요소 프레임워크입니다. 복잡한 작업에 특히 효과적입니다.</p>

        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>요소</th><th>설명</th><th>예시</th></tr></thead>
            <tbody>
              <tr><td><strong>C</strong>apacity</td><td>AI의 역할/전문성 정의</td><td>"당신은 데이터 사이언티스트입니다"</td></tr>
              <tr><td><strong>R</strong>equest</td><td>수행할 작업 명시</td><td>"매출 데이터를 분석해주세요"</td></tr>
              <tr><td><strong>I</strong>nsight</td><td>배경 정보/맥락 제공</td><td>"최근 3개월간 매출이 20% 감소했습니다"</td></tr>
              <tr><td><strong>S</strong>tyle</td><td>응답 스타일/톤 지정</td><td>"경영진 보고서 형식으로"</td></tr>
              <tr><td><strong>P</strong>ersonality</td><td>응답 성격 설정</td><td>"객관적이고 데이터 기반의 어조로"</td></tr>
              <tr><td><strong>E</strong>xperiment</td><td>추가 조건/실험 요소</td><td>"가설 3가지를 제시하고 검증 방법도 포함"</td></tr>
            </tbody>
          </table>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">CRISPE 적용 예시</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`[Capacity] 당신은 SaaS 스타트업 전문 마케팅 컨설턴트입니다.
[Request] B2B SaaS 제품의 랜딩 페이지 카피를 작성해주세요.
[Insight] 우리 제품은 AI 기반 고객 서비스 챗봇이며, 응답 시간을 80% 단축시킵니다. 타겟은 중소기업 CS 팀장입니다.
[Style] 신뢰감을 주되 기술적이지 않은 언어로 작성해주세요.
[Personality] 전문적이면서도 친근한 톤을 유지하세요.
[Experiment] 헤드라인 3가지, 서브헤드라인, CTA 버튼 텍스트 2가지를 제안해주세요.`}</div>
          </div>
        </div>

        <h2>핵심 패턴 모음</h2>

        <h3>1. 단계별 지시 패턴</h3>
        <p>복잡한 작업을 여러 단계로 분해하여 지시합니다. AI가 순차적으로 처리하므로 누락 없이 정확한 결과를 얻을 수 있습니다.</p>
        <div className="code-block">
          <div className="code-header">단계별 지시 예시</div>
          <pre><code>{`이 기사를 다음 단계로 분석해주세요:
1단계: 핵심 주장 3가지를 추출하세요
2단계: 각 주장의 근거를 정리하세요
3단계: 논리적 허점이 있다면 지적하세요
4단계: 종합 평가를 200자 이내로 작성하세요`}</code></pre>
        </div>

        <h3>2. 구분자 패턴</h3>
        <p>여러 데이터를 입력할 때 구분자(---, ###, XML 태그 등)를 사용하여 명확히 분리합니다.</p>
        <div className="code-block">
          <div className="code-header">구분자 활용 예시</div>
          <pre><code>{`다음 두 텍스트를 비교 분석해주세요.

---텍스트 A---
[첫 번째 텍스트]

---텍스트 B---
[두 번째 텍스트]

분석 기준: 톤, 설득력, 구체성`}</code></pre>
        </div>

        <h3>3. 네거티브 프롬프트 패턴</h3>
        <p>원하지 않는 내용을 명시적으로 제외하여 결과의 정확도를 높입니다.</p>
        <div className="code-block">
          <div className="code-header">네거티브 프롬프트 예시</div>
          <pre><code>{`파이썬 초보자를 위한 변수 설명을 작성해주세요.

하지 마세요:
- 메모리 주소나 포인터 개념 언급
- 다른 프로그래밍 언어와 비교
- 전문 용어를 설명 없이 사용

해주세요:
- 실생활 비유 활용
- 간단한 코드 예제 포함
- 연습 문제 2개 추가`}</code></pre>
        </div>

        <div className="callout-box">
          <h3>강의 요약</h3>
          <ul>
            <li>RTF(Role-Task-Format)는 가장 기본적이고 범용적인 프롬프트 구조이다</li>
            <li>CRISPE는 Capacity, Request, Insight, Style, Personality, Experiment의 6요소 프레임워크이다</li>
            <li>단계별 지시 패턴은 복잡한 작업을 순서대로 분해하여 정확도를 높인다</li>
            <li>구분자 패턴은 여러 데이터를 명확히 분리하여 혼동을 방지한다</li>
            <li>네거티브 프롬프트는 원하지 않는 내용을 제외하여 결과 품질을 향상시킨다</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>복습 문제</h3>
          <ul>
            <li><strong>Q1.</strong> RTF 패턴의 세 가지 요소를 설명하고, 자신의 업무에 맞는 RTF 프롬프트를 작성해보세요.</li>
            <li><strong>Q2.</strong> CRISPE 프레임워크의 6가지 요소를 모두 포함하는 프롬프트를 설계해보세요.</li>
            <li><strong>Q3.</strong> "이 보고서를 개선해줘"라는 프롬프트를 단계별 지시 패턴으로 개선해보세요.</li>
            <li><strong>Q4.</strong> 네거티브 프롬프트가 효과적인 상황의 예시를 2가지 들어보세요.</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/lectures/ai-models" className="lesson-nav-btn prev">← 이전: AI 모델</Link><Link to="/lectures/few-shot" className="lesson-nav-btn next">다음: Few-shot 기법 →</Link></div>
      </div></div></section>
    </>
  )
}
