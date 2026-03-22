import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Writing() {
  return (
    <>
      <SEOHead title="실전: 글쓰기" description="블로그, 이메일, 보고서 등 글쓰기에 프롬프트를 활용하는 방법을 배웁니다." />
      <section className="page-header"><div className="container"><h1>실전 활용: 글쓰기</h1><p>블로그, 이메일, 보고서 등 다양한 글쓰기에 AI를 활용합니다</p></div></section>

      <section className="lesson-content"><div className="container"><div className="lesson-body">
        <h2 data-aos="fade-up">1. 블로그 글 작성</h2>
        <div className="prompt-example" data-aos="fade-up">
          <div className="prompt-example-header">블로그 포스트 프롬프트</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`당신은 IT 블로거입니다. "2025년 주목할 AI 트렌드 5가지" 블로그 글을 작성해주세요.

조건:
- 2000자 내외
- 각 트렌드에 구체적 사례 포함
- SEO를 고려한 소제목 구성
- 대상: IT에 관심 있는 일반 독자
- 톤: 전문적이면서 읽기 쉬운`}</div>
            <div className="prompt-label">AI 응답 (일부)</div>
            <div className="prompt-result">{`# 2025년 주목할 AI 트렌드 5가지

## 1. AI 에이전트의 부상
단순 대화를 넘어 스스로 작업을 수행하는 AI 에이전트가 주목받고 있습니다. 예를 들어, 이메일 확인부터 일정 관리, 보고서 초안 작성까지 자동으로 처리하는...`}</div>
          </div>
        </div>

        <h2 data-aos="fade-up">2. 비즈니스 이메일</h2>
        <div className="prompt-example" data-aos="fade-up">
          <div className="prompt-example-header">이메일 작성 프롬프트</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 상황에 맞는 비즈니스 이메일을 작성해주세요.

상황: 프로젝트 납기일이 1주일 연장됨을 클라이언트에게 알려야 함
원인: 예상치 못한 기술적 이슈
톤: 정중하지만 솔직하게
포함 내용: 사과, 원인 설명, 새 일정, 보완 조치
길이: 200자 내외`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`안녕하세요, [클라이언트명]님.

프로젝트 진행 중 예상치 못한 기술적 이슈가 발생하여 납기일이 1주일 연장됨을 알려드립니다. 현재 이슈는 해결 단계에 있으며, 수정된 납기일은 4월 7일입니다.

품질에 대한 약속은 변함없으며, 진행 상황을 매일 공유드리겠습니다. 불편을 드려 죄송합니다.`}</div>
          </div>
        </div>

        <h2 data-aos="fade-up">3. 보고서 작성</h2>
        <div className="code-block" data-aos="fade-up">
          <div className="code-header">주간 보고서 프롬프트</div>
          <pre><code>{`다음 정보를 바탕으로 주간 업무 보고서를 작성해주세요.

이번 주 완료:
- 결제 시스템 API 연동 완료
- 사용자 테스트 5건 진행
- 버그 12건 수정

다음 주 계획:
- 성능 최적화
- 베타 테스트 준비

이슈:
- 결제 게이트웨이 응답 지연 (평균 3초)

형식: 표 + 간결한 요약 문단`}</code></pre>
        </div>

        <h2 data-aos="fade-up">4. 광고 카피</h2>
        <div className="prompt-example" data-aos="fade-up">
          <div className="prompt-example-header">SNS 광고 카피</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 제품의 인스타그램 광고 카피를 3가지 버전으로 작성해주세요.

제품: AI 영어 회화 앱
타겟: 영어 공부에 좌절한 20~30대 직장인
USP: 24시간 AI 튜터, 실시간 발음 교정, 맞춤 커리큘럼
톤: 공감적, 동기부여
각 카피에 CTA와 해시태그 포함`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`버전 1:
"영어 학원 3번 등록하고 3번 포기한 당신, 이번엔 다릅니다."
24시간 AI 튜터가 당신의 발음을 실시간으로 교정해드립니다.
👉 지금 무료 체험 시작하기
#영어회화 #AI영어 #직장인영어 #영어공부

버전 2:
"출퇴근 30분이면 영어가 됩니다"
AI가 당신의 레벨에 맞춰 대화를 이끌어갑니다. 부담 제로.
👉 7일 무료 체험
#영어앱 #AI튜터 #영어스피킹 #자기계발`}</div>
          </div>
        </div>

        <h2 data-aos="fade-up">5. 자기소개서</h2>
        <div className="code-block" data-aos="fade-up">
          <div className="code-header">자기소개서 초안 프롬프트</div>
          <pre><code>{`다음 정보를 바탕으로 IT 기업 지원용 자기소개서 초안을 작성해주세요.

지원 회사: 네이버 (프론트엔드 개발자)
경력: 3년 (스타트업 2곳)
기술 스택: React, TypeScript, Next.js
성과: 페이지 로딩 속도 40% 개선, 사용자 전환율 25% 향상
강점: 사용자 경험 중심 개발

형식: 4개 문단 (지원 동기, 경험, 성과, 포부)
톤: 자신감 있되 겸손하게
분량: 800자 내외`}</code></pre>
        </div>

        <h2 data-aos="fade-up">6. 콘텐츠 리라이팅</h2>
        <div className="prompt-example" data-aos="fade-up">
          <div className="prompt-example-header">톤 변경 리라이팅</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 딱딱한 공지문을 친근하고 따뜻한 톤으로 리라이팅해주세요.

원문: "시스템 점검으로 인하여 2025년 4월 1일 02:00~06:00 서비스 이용이 불가합니다. 불편을 드려 죄송합니다."

조건: 이모지 적절히 사용, 핵심 정보 유지, 대안 제시`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`안녕하세요! 더 나은 서비스를 위해 잠깐 정비 시간을 갖습니다 🛠️

📅 4월 1일(화) 새벽 2시~6시
이 시간 동안 서비스 이용이 어려워요.

새벽 시간이라 대부분 영향이 없으시겠지만, 혹시 필요하시다면 미리 작업을 마무리해 주세요! 더 빠르고 안정적인 서비스로 돌아올게요 💪`}</div>
          </div>
        </div>

        <div className="exercise-box" data-aos="fade-up">
          <h3>연습: 글쓰기 프롬프트 실전</h3>
          <p>다음 중 하나를 선택하여 프롬프트를 작성하고 AI에게 요청해보세요:</p>
          <ul>
            <li>자신의 업무와 관련된 주간 보고서</li>
            <li>관심 주제에 대한 블로그 포스트</li>
            <li>비즈니스 이메일 (요청/거절/감사)</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/learn/role-system" className="lesson-nav-btn prev">← 이전: 역할 부여</Link><Link to="/practice/coding" className="lesson-nav-btn next">다음: 실전 코딩 →</Link></div>
      </div></div></section>
    </>
  )
}
