import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function LectureChainOfThought() {
  return (
    <>
      <SEOHead title="강의안: Chain-of-Thought" description="AI가 단계별로 사고하도록 유도하는 Chain-of-Thought 프롬프팅 기법을 학습합니다." />
      <section className="page-header"><div className="container"><h1>강의안: Chain-of-Thought</h1><p>AI의 추론 능력을 극대화하는 단계별 사고 유도 기법</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <div className="callout-box">
          <h3>학습 목표</h3>
          <ul>
            <li>Chain-of-Thought(CoT)의 개념과 원리를 이해한다</li>
            <li>단계별 추론을 유도하는 프롬프트 작성법을 익힌다</li>
            <li>Zero-shot CoT와 Few-shot CoT의 차이를 구분하고 적용할 수 있다</li>
          </ul>
        </div>

        <h2>핵심 개념: Chain-of-Thought(CoT)란?</h2>
        <p>Chain-of-Thought는 AI에게 최종 답만 요구하는 대신, <strong>풀이 과정을 단계별로 보여달라고 요청</strong>하는 기법입니다. 복잡한 추론, 수학 문제, 논리적 판단에서 정확도가 크게 향상됩니다.</p>
        <p>핵심 원리: AI가 중간 추론 과정을 명시적으로 생성하면, 각 단계에서 오류를 줄이고 최종 결론의 정확도를 높일 수 있습니다.</p>

        <h2>강의 내용: CoT 적용 전/후 비교</h2>

        <div className="prompt-example">
          <div className="prompt-example-header">CoT 적용 전 (일반 프롬프트)</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">가게에 사과 23개가 있었다. 8개를 팔고 12개를 새로 입고했다. 남은 사과는?</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">27개입니다.</div>
            <div className="prompt-label">문제점</div>
            <div className="prompt-result">AI가 바로 답만 제시하므로 계산 오류가 발생할 수 있고, 검증이 어렵습니다.</div>
          </div>
        </div>

        <div className="prompt-example">
          <div className="prompt-example-header">CoT 적용 후</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">가게에 사과 23개가 있었다. 8개를 팔고 12개를 새로 입고했다. 남은 사과는? 단계별로 풀어주세요.</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`단계별로 풀어보겠습니다.

1단계: 초기 수량 = 23개
2단계: 8개 판매 후 = 23 - 8 = 15개
3단계: 12개 입고 후 = 15 + 12 = 27개

답: 남은 사과는 27개입니다.`}</div>
            <div className="prompt-label">장점</div>
            <div className="prompt-result">각 단계를 추적할 수 있어 오류 검증이 쉽고, 복잡한 문제에서 정확도가 향상됩니다.</div>
          </div>
        </div>

        <h2>Zero-shot CoT: "단계별로 생각해보세요"</h2>
        <p>"<strong>단계별로 생각해보세요(Let's think step by step)</strong>"라는 한 문장만 추가해도 추론 정확도가 크게 올라갑니다. 이를 Zero-shot CoT라고 합니다.</p>

        <div className="code-block">
          <div className="code-header">Zero-shot CoT 적용</div>
          <pre><code>{`신규 서비스의 적정 가격을 산출해주세요.
- 원가: 3만원
- 목표 마진율: 40%
- 경쟁사 가격대: 5만원~7만원
- 타겟: 가격 민감한 20대

단계별로 분석해주세요.`}</code></pre>
        </div>

        <h2>Few-shot CoT: 풀이 과정을 예시로 제시</h2>
        <p>Few-shot CoT는 추론 과정이 포함된 예시를 제공하여 AI가 동일한 추론 패턴을 따르도록 유도합니다.</p>

        <div className="prompt-example">
          <div className="prompt-example-header">Few-shot CoT 예시</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`Q: 카페에 손님 15명이 있었습니다. 7명이 떠나고 10명이 새로 왔습니다. 현재 손님은?
A: 단계별로 풀어보겠습니다.
1) 초기: 15명
2) 7명 퇴장: 15 - 7 = 8명
3) 10명 입장: 8 + 10 = 18명
답: 18명

Q: 도서관에 책 120권이 있었습니다. 35권을 대출하고, 반납 15권, 신규 입고 20권이 있었습니다. 현재 책은?
A: 단계별로 풀어보겠습니다.
1) 초기: 120권
2) 35권 대출: 120 - 35 = 85권
3) 15권 반납: 85 + 15 = 100권
4) 20권 입고: 100 + 20 = 120권
답: 120권

Q: 식당에 처음에 손님 17명이 있었습니다. 점심시간에 12명이 더 왔고, 5명이 떠났습니다. 오후에 다시 8명이 왔습니다. 지금 손님은?`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`A: 단계별로 풀어보겠습니다.
1) 초기: 17명
2) 12명 입장: 17 + 12 = 29명
3) 5명 퇴장: 29 - 5 = 24명
4) 8명 입장: 24 + 8 = 32명
답: 32명`}</div>
          </div>
        </div>

        <h2>Zero-shot CoT vs Few-shot CoT</h2>
        <div style={{overflowX:'auto'}}>
          <table className="lesson-table">
            <thead><tr><th>구분</th><th>Zero-shot CoT</th><th>Few-shot CoT</th></tr></thead>
            <tbody>
              <tr><td><strong>예시 제공</strong></td><td>없음 ("단계별로" 한 마디만 추가)</td><td>추론 과정이 포함된 예시 2~5개 제공</td></tr>
              <tr><td><strong>설정 난이도</strong></td><td>매우 쉬움</td><td>예시 작성에 시간 필요</td></tr>
              <tr><td><strong>정확도</strong></td><td>기본 대비 크게 향상</td><td>Zero-shot CoT보다 더 높은 정확도</td></tr>
              <tr><td><strong>적합한 상황</strong></td><td>일반적인 추론, 빠른 적용</td><td>특정 형식의 추론, 높은 정확도 필요</td></tr>
              <tr><td><strong>토큰 사용</strong></td><td>적음</td><td>예시만큼 추가 토큰 소비</td></tr>
            </tbody>
          </table>
        </div>

        <h2>CoT가 효과적인 작업 유형</h2>
        <ul>
          <li><strong>다단계 수학 계산</strong>: 여러 연산이 순차적으로 필요한 문제</li>
          <li><strong>논리적 추론</strong>: 전제에서 결론을 도출하는 논리 문제</li>
          <li><strong>코드 디버깅</strong>: 코드를 한 줄씩 추적하며 버그를 찾는 작업</li>
          <li><strong>비즈니스 의사결정</strong>: 여러 요소를 분석하여 결론을 내리는 작업</li>
          <li><strong>복잡한 비교 분석</strong>: 다수의 기준으로 대상을 비교하는 작업</li>
        </ul>

        <div className="callout-box">
          <h3>강의 요약</h3>
          <ul>
            <li>CoT는 AI에게 풀이 과정을 단계별로 보여달라고 요청하는 기법이다</li>
            <li>"단계별로 생각해보세요" 한 마디만으로도 추론 정확도가 크게 향상된다 (Zero-shot CoT)</li>
            <li>추론 과정이 포함된 예시를 제공하면 더 높은 정확도를 얻을 수 있다 (Few-shot CoT)</li>
            <li>간단한 사실 질문에는 CoT가 불필요하며, 복잡한 추론/분석에서 효과적이다</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>복습 문제</h3>
          <ul>
            <li><strong>Q1.</strong> Chain-of-Thought 기법의 핵심 원리를 설명하세요.</li>
            <li><strong>Q2.</strong> Zero-shot CoT와 Few-shot CoT의 차이를 3가지 관점에서 비교하세요.</li>
            <li><strong>Q3.</strong> 다음 문제에 Zero-shot CoT를 적용한 프롬프트를 작성하세요: "마트에서 사과 3개(개당 1,500원), 우유 2개(개당 2,800원), 빵 1개(3,200원)를 사고 2만원을 냈다면 거스름돈은?"</li>
            <li><strong>Q4.</strong> CoT가 효과적이지 않은 상황의 예시를 2가지 들고 그 이유를 설명하세요.</li>
          </ul>
        </div>

        <div className="lesson-nav"><Link to="/lectures/few-shot" className="lesson-nav-btn prev">← 이전: Few-shot</Link><Link to="/lectures/role-system" className="lesson-nav-btn next">다음: 역할 부여 →</Link></div>
      </div></div></section>
    </>
  )
}
