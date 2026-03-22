import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function WorkbookRoleSystem() {
  return (
    <>
      <SEOHead title="워크북: 역할 부여와 시스템 프롬프트" description="역할 설정과 시스템 프롬프트 작성을 실습하는 워크북" />

      <section className="page-header">
        <div className="container">
          <h1>워크북: 역할 부여와 시스템 프롬프트</h1>
        </div>
      </section>

      <section className="section lesson-content">
        <div className="container">

          <div className="callout-box">
            <h3>실습 목표</h3>
            <ul>
              <li>역할 설정 연습</li>
              <li>시스템 프롬프트 작성</li>
            </ul>
          </div>

          <div className="exercise-box">
            <h3>빈칸 채우기 - 다양한 역할 설정</h3>
            <p>각 상황에 적합한 역할을 설정해보세요.</p>
            <ol>
              <li>코드 리뷰를 요청할 때: "당신은 ______ 입니다."</li>
              <li>건강 상담을 요청할 때: "당신은 ______ 입니다."</li>
              <li>법률 자문을 요청할 때: "당신은 ______ 입니다."</li>
              <li>마케팅 전략을 요청할 때: "당신은 ______ 입니다."</li>
            </ol>
          </div>

          <div className="prompt-example">
            <h3>프롬프트 작성 연습</h3>
            <p>시스템 프롬프트와 사용자 프롬프트를 조합하여 완성된 프롬프트를 작성해보세요.</p>
            <p><strong>과제:</strong> "경력 10년의 시니어 데이터 분석가" 역할을 부여하고, 매출 데이터 분석을 요청하는 프롬프트를 작성하세요.</p>
            <div className="prompt-block">
              <p><strong>시스템 프롬프트 예시:</strong></p>
              <code>당신은 경력 10년의 시니어 데이터 분석가입니다. 데이터를 기반으로 객관적이고 실행 가능한 인사이트를 제공합니다.</code>
            </div>
            <p><strong>사용자 프롬프트를 작성해보세요:</strong></p>
            <textarea className="exercise-textarea" rows="6" placeholder="시스템 프롬프트와 조합할 사용자 프롬프트를 작성해보세요..." />
            <p style={{ marginTop: '1rem' }}><strong>추가 도전:</strong> 위의 시스템 프롬프트를 다른 역할로 변경하여 새로운 조합을 만들어보세요.</p>
            <textarea className="exercise-textarea" rows="6" placeholder="새로운 시스템 프롬프트 + 사용자 프롬프트 조합을 작성해보세요..." />
          </div>

          <div className="exercise-box">
            <h3>자가 점검</h3>
            <ul>
              <li>역할 부여가 AI 응답에 미치는 영향을 설명할 수 있는가?</li>
              <li>시스템 프롬프트와 사용자 프롬프트의 차이를 이해하고 있는가?</li>
              <li>상황에 맞는 적절한 역할을 설정할 수 있는가?</li>
            </ul>
          </div>

          <div className="lesson-nav">
            <Link to="/workbook/chain-of-thought" className="btn btn-prev">&larr; 이전: Chain-of-Thought</Link>
            <Link to="/workbook/writing" className="btn btn-next">다음: 실전: 글쓰기 &rarr;</Link>
          </div>

        </div>
      </section>
    </>
  )
}
