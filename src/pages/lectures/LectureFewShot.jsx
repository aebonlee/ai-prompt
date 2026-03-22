import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureFewShot() {
  return (
    <>
      <SEOHead title="강의안: Few-shot 기법" description="Zero-shot과 Few-shot의 차이를 이해하고 예시를 활용한 프롬프트 품질 향상 기법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>강의안: Few-shot 기법</h1><p>예시의 힘으로 AI의 응답 품질을 극대화하는 방법을 배웁니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>학습 목표</h3>
          <ul>
            <li>Zero-shot, One-shot, Few-shot의 차이를 이해한다</li>
            <li>효과적인 예시를 선택하고 구성하는 전략을 익힌다</li>
            <li>실전 상황에서 Few-shot 기법을 적용할 수 있다</li>
          </ul>
        </div>

        <h2>핵심 개념: Zero-shot vs One-shot vs Few-shot</h2>
        <p>프롬프트에 포함하는 예시의 수에 따라 기법이 구분됩니다. 예시가 많을수록 AI가 패턴을 학습하여 더 정확한 결과를 생성합니다.</p>

        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>기법</th><th>예시 수</th><th>설명</th><th>적합한 상황</th></tr></thead>
            <tbody>
              <tr><td><strong>Zero-shot</strong></td><td>0개</td><td>예시 없이 지시만으로 수행</td><td>간단하고 명확한 작업</td></tr>
              <tr><td><strong>One-shot</strong></td><td>1개</td><td>하나의 예시를 제공</td><td>형식이나 스타일 전달</td></tr>
              <tr><td><strong>Few-shot</strong></td><td>2~5개</td><td>여러 예시로 패턴 학습 유도</td><td>복잡한 분류, 특정 형식 요구</td></tr>
            </tbody>
          </table>
        </div>

        <h2>강의 내용: Zero-shot과 Few-shot 비교</h2>

        <h3>Zero-shot 접근</h3>
        <div className="code-block">
          <div className="code-header">Zero-shot 예시</div>
          <pre><code>{`다음 리뷰의 감정을 긍정/중립/부정으로 분류해주세요.

리뷰: "이 가격에 이 품질이면 대만족입니다! 재구매 의사 100%"`}</code></pre>
        </div>
        <p>Zero-shot은 간단한 작업에는 효과적이지만, AI가 분류 기준을 자의적으로 해석할 수 있습니다.</p>

        <h3>Few-shot 접근</h3>
        <div className="prompt-example">
          <div className="prompt-example-header">Few-shot 감정 분석</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 리뷰의 감정을 분류해주세요.

리뷰: "배송이 정말 빨라서 놀랐어요!" → 긍정
리뷰: "제품은 괜찮은데 가격이 너무 비싸요" → 중립
리뷰: "포장이 엉망이고 제품에 흠집이 있었어요" → 부정
리뷰: "색상이 사진과 완전 다르지만 품질은 좋아요" → 중립

리뷰: "이 가격에 이 품질이면 대만족입니다! 재구매 의사 100%"`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">→ 긍정</div>
          </div>
        </div>
        <p>예시를 통해 AI는 분류 기준과 출력 형식을 명확히 학습합니다. 특히 "중립"의 기준(장단점이 섞인 리뷰)이 예시를 통해 전달됩니다.</p>

        <h2>Few-shot 적용 예시: 형식 변환</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">자연어 → SQL 변환</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`자연어를 SQL 쿼리로 변환해주세요.

"모든 사용자 조회" → SELECT * FROM users;
"서울에 사는 사용자" → SELECT * FROM users WHERE city = '서울';
"최근 가입한 10명" → SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

"나이가 30 이상이고 VIP인 사용자의 이름과 이메일"`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`SELECT name, email FROM users WHERE age >= 30 AND is_vip = true;`}</div>
          </div>
        </div>

        <h2>효과적인 예시 작성 가이드</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>원칙</th><th>설명</th><th>좋은 예</th><th>나쁜 예</th></tr></thead>
            <tbody>
              <tr><td><strong>적정 수량</strong></td><td>2~5개가 적정</td><td>3개의 대표 예시</td><td>10개 이상 (토큰 낭비)</td></tr>
              <tr><td><strong>다양성</strong></td><td>다양한 케이스 커버</td><td>긍정/중립/부정 골고루</td><td>긍정 예시만 3개</td></tr>
              <tr><td><strong>일관성</strong></td><td>동일한 입출력 형식</td><td>모두 "입력 → 출력" 형식</td><td>형식이 제각각</td></tr>
              <tr><td><strong>대표성</strong></td><td>실제 데이터와 유사</td><td>실제 리뷰 기반 예시</td><td>비현실적인 예시</td></tr>
              <tr><td><strong>경계 사례</strong></td><td>애매한 케이스 포함</td><td>장단점 혼재 리뷰</td><td>명확한 케이스만</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Few-shot 적용 예시: 톤 변환</h2>
        <div className="code-block">
          <div className="code-header">비격식체 → 격식체 변환</div>
          <pre><code>{`비격식 문장을 비즈니스 격식체로 변환해주세요.

"그거 내일까지 해주세요" → "해당 건은 내일까지 완료 부탁드립니다."
"이거 왜 안 돼요?" → "해당 기능이 정상 동작하지 않는 원인을 확인해주시겠습니까?"
"좀 급해요" → "우선순위가 높은 사안이오니 빠른 처리를 요청드립니다."

"그 자료 아직 안 받았는데 빨리 보내줘"`}</code></pre>
        </div>

        <div className="callout-box">
          <h3>강의 요약</h3>
          <ul>
            <li>Zero-shot은 예시 없이, One-shot은 1개, Few-shot은 2~5개의 예시를 사용한다</li>
            <li>Few-shot은 복잡한 분류, 형식 변환, 특정 패턴 학습에 특히 효과적이다</li>
            <li>예시는 다양하고 대표적이며, 일관된 형식으로 작성해야 한다</li>
            <li>경계 사례(애매한 케이스)를 예시에 포함하면 분류 정확도가 향상된다</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>복습 문제</h3>
          <ul>
            <li><strong>Q1.</strong> Zero-shot과 Few-shot의 차이를 설명하고, 각각이 적합한 상황을 예시와 함께 제시하세요.</li>
            <li><strong>Q2.</strong> 뉴스 기사 제목을 카테고리(정치/경제/스포츠/IT/문화)로 분류하는 Few-shot 프롬프트를 작성해보세요. 각 카테고리당 1개씩 총 5개의 예시를 포함하세요.</li>
            <li><strong>Q3.</strong> 효과적인 Few-shot 예시 작성의 5가지 원칙을 설명하세요.</li>
            <li><strong>Q4.</strong> 자신의 업무에 Few-shot 기법을 적용할 수 있는 상황을 2가지 제시하고, 실제 프롬프트를 작성해보세요.</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/lectures/structure" className="lesson-nav-btn prev">← 이전: 구조와 패턴</Link><Link to="/lectures/chain-of-thought" className="lesson-nav-btn next">다음: Chain-of-Thought →</Link></div>
      </div></div></section>
    </>
  )
}
