import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function RoleSystem() {
  return (
    <>
      <SEOHead title="역할 부여와 시스템 프롬프트" description="AI에게 역할을 부여하고 시스템 프롬프트를 설계하는 방법을 배웁니다." />
      <section className="page-header"><div className="container"><h1>역할 부여와 시스템 프롬프트 설계</h1><p>AI의 전문성을 극대화하는 페르소나 설계 기법</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>왜 역할 부여가 효과적인가?</h2>
        <p>AI에게 특정 역할을 부여하면 해당 분야의 전문 지식, 어휘, 사고방식으로 응답합니다. "번역해줘"보다 "당신은 10년 경력의 전문 번역가입니다"가 훨씬 정확한 번역을 이끌어냅니다.</p>

        <h2>역할별 프롬프트 예시</h2>

        <h3>1. 교육자 역할</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">교육자 페르소나</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 15년 경력의 고등학교 물리 선생님입니다.
학생들이 어려워하는 개념을 일상생활 비유로 쉽게 설명하는 것이 특기입니다.

다음 개념을 중학생도 이해할 수 있게 설명해주세요: "상대성 이론"

조건:
- 수식 사용 금지
- 일상생활 비유 2개 이상 포함
- 300자 이내`}</div>
          </div>
        </div>

        <h3>2. 개발자 역할</h3>
        <div className="code-block">
          <div className="code-header">시니어 개발자 역할</div>
          <pre><code>{`당신은 대규모 트래픽을 처리한 경험이 있는 시니어 백엔드 개발자입니다.

다음 코드를 리뷰해주세요:
- 성능 이슈 식별
- 보안 취약점 확인
- 개선된 코드 제안

리뷰 형식:
1. [심각도: 상/중/하] 이슈 설명
2. 현재 코드의 문제점
3. 개선된 코드 예시`}</code></pre>
        </div>

        <h3>3. 번역가 역할</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">전문 번역가</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 한영 전문 번역가입니다. IT 분야 기술 문서 번역 전문입니다.

번역 원칙:
- 기술 용어는 영어 그대로 유지 (예: API, JWT, React)
- 자연스러운 한국어 문장 구조
- 직역이 아닌 의역 우선

번역 대상:
"The server-side rendering approach significantly improves the initial page load performance, especially for content-heavy applications."`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">서버 사이드 렌더링 방식은 초기 페이지 로딩 성능을 크게 향상시키며, 특히 콘텐츠가 많은 애플리케이션에서 효과적입니다.</div>
          </div>
        </div>

        <h3>4. 데이터 분석가 역할</h3>
        <div className="code-block">
          <div className="code-header">분석가 페르소나</div>
          <pre><code>{`당신은 마케팅 데이터 분석 전문가입니다.

데이터를 분석할 때 다음 프레임워크를 따릅니다:
1. 현상 파악 (What): 데이터에서 무엇이 보이는가
2. 원인 분석 (Why): 왜 이런 결과가 나왔는가
3. 액션 제안 (So What): 어떤 조치를 취해야 하는가

분석 대상:
- 지난달 웹사이트 방문자 30% 증가
- 하지만 회원가입 전환율 2.1% → 1.5% 감소
- 모바일 트래픽 비율 65% → 78% 증가`}</code></pre>
        </div>

        <h3>5. 크리에이티브 라이터 역할</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">카피라이터</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 수상 경력이 있는 광고 카피라이터입니다.
특징: 짧고 임팩트 있는 문구, 감성적 어필, 행동 유도

브랜드: 친환경 텀블러
타겟: 20~30대 환경 의식 높은 직장인
목적: SNS 광고 카피

슬로건 3개와 각각의 부제목을 작성해주세요.`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`1. "한 모금의 변화가 지구를 바꿉니다"
   부제: 매일 쓰는 텀블러, 매일 줄이는 플라스틱

2. "커피는 뜨겁게, 지구는 시원하게"
   부제: 나의 작은 선택이 만드는 큰 차이

3. "일회용은 끊고, 스타일은 올리고"
   부제: 지속 가능한 라이프스타일의 시작`}</div>
          </div>
        </div>

        <h2>시스템 프롬프트 설계 템플릿</h2>
        <div className="code-block">
          <div className="code-header">시스템 프롬프트 템플릿</div>
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

        <div className="callout-box">
          <h3>시스템 프롬프트 vs 사용자 프롬프트</h3>
          <ul>
            <li><strong>시스템 프롬프트</strong>: AI의 기본 행동 방식, 역할, 규칙을 설정 (API의 system 필드)</li>
            <li><strong>사용자 프롬프트</strong>: 실제 작업 지시 (API의 user 필드)</li>
            <li>시스템 프롬프트는 대화 전체에 적용되며, 사용자 프롬프트는 개별 요청에 해당</li>
            <li>ChatGPT의 Custom Instructions가 시스템 프롬프트에 해당</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>연습: 나만의 AI 어시스턴트 설계</h3>
          <p>자신의 업무에 맞는 AI 어시스턴트를 위한 시스템 프롬프트를 설계해보세요:</p>
          <ul>
            <li>역할과 전문 분야를 구체적으로 정의</li>
            <li>행동 규칙 3가지 이상 설정</li>
            <li>응답 형식과 톤을 지정</li>
            <li>제약 조건을 명시</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/learn/chain-of-thought" className="lesson-nav-btn prev">← 이전: CoT</Link><Link to="/practice/writing" className="lesson-nav-btn next">다음: 실전 글쓰기 →</Link></div>
      </div></div></section>
    </>
  )
}
