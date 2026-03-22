import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureRoleSystem() {
  return (
    <>
      <SEOHead title="강의안: 역할 부여와 시스템 프롬프트" description="AI에게 역할을 부여하고 시스템 프롬프트를 설계하는 방법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>강의안: 역할 부여와 시스템 프롬프트</h1><p>AI의 전문성을 극대화하는 페르소나 설계 기법</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>학습 목표</h3>
          <ul>
            <li>역할 부여가 AI 응답 품질에 미치는 효과를 이해한다</li>
            <li>시스템 프롬프트와 사용자 프롬프트의 차이를 구분한다</li>
            <li>목적에 맞는 시스템 프롬프트를 설계할 수 있다</li>
          </ul>
        </div>

        <h2>핵심 개념: 역할 부여 기법</h2>
        <p>AI에게 특정 역할을 부여하면 해당 분야의 <strong>전문 지식, 어휘, 사고방식</strong>으로 응답합니다. 단순한 지시보다 역할을 명시하면 결과물의 깊이와 전문성이 크게 향상됩니다.</p>

        <h3>역할 부여가 효과적인 이유</h3>
        <ul>
          <li><strong>전문성 활성화</strong>: 학습된 해당 분야 지식이 우선적으로 활용됨</li>
          <li><strong>톤과 스타일 일관성</strong>: 역할에 맞는 어조와 표현 방식 유지</li>
          <li><strong>관점 고정</strong>: 특정 시각에서 일관된 분석과 판단 수행</li>
          <li><strong>깊이 있는 답변</strong>: 표면적 답변 대신 전문가 수준의 인사이트 제공</li>
        </ul>

        <h2>강의 내용: 역할 부여 전/후 비교</h2>

        <div className="prompt-example">
          <div className="prompt-example-header">역할 부여 전</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">이 코드를 리뷰해주세요.</div>
            <div className="prompt-label">AI 응답 특성</div>
            <div className="prompt-result">일반적인 문법 확인과 기본적인 개선 제안. 성능, 보안, 아키텍처 관점의 심층 분석은 부족합니다.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">역할 부여 후</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 대규모 트래픽을 처리한 경험이 있는 시니어 백엔드 개발자입니다.

다음 코드를 리뷰해주세요:
- 성능 이슈 식별
- 보안 취약점 확인
- 개선된 코드 제안

리뷰 형식:
1. [심각도: 상/중/하] 이슈 설명
2. 현재 코드의 문제점
3. 개선된 코드 예시`}</div>
            <div className="prompt-label">AI 응답 특성</div>
            <div className="prompt-result">시니어 개발자의 관점에서 성능 병목, 보안 취약점, 아키텍처 개선 사항을 체계적으로 분석합니다. 심각도 분류와 개선 코드까지 포함된 전문적 리뷰를 제공합니다.</div>
          </div>
        </div>

        <h2>다양한 역할 부여 예시</h2>

        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>역할</th><th>프롬프트 시작</th><th>기대 효과</th></tr></thead>
            <tbody>
              <tr><td><strong>교육자</strong></td><td>"당신은 15년 경력의 물리 선생님입니다"</td><td>쉬운 비유, 단계적 설명</td></tr>
              <tr><td><strong>번역가</strong></td><td>"당신은 한영 IT 전문 번역가입니다"</td><td>기술 용어 정확성, 자연스러운 번역</td></tr>
              <tr><td><strong>분석가</strong></td><td>"당신은 마케팅 데이터 분석 전문가입니다"</td><td>데이터 기반 인사이트, 체계적 분석</td></tr>
              <tr><td><strong>카피라이터</strong></td><td>"당신은 수상 경력의 광고 카피라이터입니다"</td><td>임팩트 있는 문구, 감성적 어필</td></tr>
              <tr><td><strong>컨설턴트</strong></td><td>"당신은 경영 전략 컨설턴트입니다"</td><td>전략적 사고, 프레임워크 활용</td></tr>
            </tbody>
          </table>
        </div>

        <h2>시스템 프롬프트 vs 사용자 프롬프트</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>구분</th><th>시스템 프롬프트</th><th>사용자 프롬프트</th></tr></thead>
            <tbody>
              <tr><td><strong>역할</strong></td><td>AI의 기본 행동 방식, 역할, 규칙 설정</td><td>실제 작업 지시</td></tr>
              <tr><td><strong>API 위치</strong></td><td>system 필드</td><td>user 필드</td></tr>
              <tr><td><strong>적용 범위</strong></td><td>대화 전체에 적용</td><td>개별 요청에 적용</td></tr>
              <tr><td><strong>변경 빈도</strong></td><td>대화 시작 시 1회 설정</td><td>매 요청마다 변경</td></tr>
              <tr><td><strong>해당 기능</strong></td><td>ChatGPT Custom Instructions</td><td>일반 대화 입력</td></tr>
            </tbody>
          </table>
        </div>

        <h2>시스템 프롬프트 설계 템플릿</h2>
        <div className="code-block">
          <div className="code-header">시스템 프롬프트 설계 템플릿</div>
          <pre><code>{`## 역할 정의
당신은 [역할/직업]입니다.
[경력/전문 분야] 전문가로서 활동합니다.

## 핵심 능력
- [능력 1]
- [능력 2]
- [능력 3]

## 행동 규칙
1. [규칙 1: 항상 ~한다]
2. [규칙 2: ~하지 않는다]
3. [규칙 3: ~할 때는 ~한다]

## 응답 형식
- 형식: [표/목록/JSON/자유 형식]
- 길이: [간결/보통/상세]
- 톤: [전문적/친근/격식]

## 제약 조건
- [제약 1]
- [제약 2]`}</code></pre>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">시스템 프롬프트 적용 예시</div>
          <div className="prompt-example-body">
            <div className="prompt-label">시스템 프롬프트</div>
            <div className="prompt-text">{`## 역할 정의
당신은 한영 IT 전문 번역가입니다. 10년간 기술 문서 번역 경력이 있습니다.

## 번역 원칙
- 기술 용어는 영어 그대로 유지 (예: API, JWT, React)
- 자연스러운 한국어 문장 구조 우선
- 직역이 아닌 의역 우선

## 응답 형식
- 번역문만 제공 (부가 설명 없이)
- 원문의 단락 구조 유지`}</div>
            <div className="prompt-label">사용자 프롬프트</div>
            <div className="prompt-text">The server-side rendering approach significantly improves the initial page load performance, especially for content-heavy applications.</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">서버 사이드 렌더링 방식은 초기 페이지 로딩 성능을 크게 향상시키며, 특히 콘텐츠가 많은 애플리케이션에서 효과적입니다.</div>
          </div>
        </div>

        <div className="callout-box">
          <h3>강의 요약</h3>
          <ul>
            <li>역할 부여는 AI의 전문성, 톤, 관점을 설정하여 응답 품질을 높이는 기법이다</li>
            <li>역할을 구체적으로(경력, 전문 분야, 특기) 설정할수록 더 전문적인 답변을 얻는다</li>
            <li>시스템 프롬프트는 AI의 기본 행동을 설정하고, 사용자 프롬프트는 개별 작업을 지시한다</li>
            <li>시스템 프롬프트 설계 시 역할, 능력, 규칙, 형식, 제약 조건을 체계적으로 구성한다</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>복습 문제</h3>
          <ul>
            <li><strong>Q1.</strong> 역할 부여가 AI 응답 품질을 향상시키는 이유를 3가지 설명하세요.</li>
            <li><strong>Q2.</strong> 시스템 프롬프트와 사용자 프롬프트의 차이를 적용 범위, 변경 빈도 관점에서 비교하세요.</li>
            <li><strong>Q3.</strong> 자신의 업무에 맞는 AI 어시스턴트를 위한 시스템 프롬프트를 설계해보세요. (역할, 능력, 규칙, 형식, 제약 조건 포함)</li>
            <li><strong>Q4.</strong> 같은 질문을 역할 부여 없이, 그리고 구체적인 역할을 부여하고 각각 AI에 입력하여 결과를 비교해보세요.</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/lectures/chain-of-thought" className="lesson-nav-btn prev">← 이전: CoT</Link><Link to="/lectures/writing" className="lesson-nav-btn next">다음: 실전 글쓰기 →</Link></div>
      </div></div></section>
    </>
  )
}
