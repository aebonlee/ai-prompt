import { Link } from 'react-router-dom'
import SEOHead from '../../components/SEOHead'

export default function Business() {
  return (
    <>
      <SEOHead title="실전: 비즈니스" description="회의록, 제안서, 전략 분석 등 비즈니스에 AI를 활용하는 방법을 배웁니다." />
      <section className="page-header"><div className="container"><h1>실전 활용: 비즈니스</h1><p>회의록, 제안서, 시장 분석 등 비즈니스 업무에 AI를 활용합니다</p></div></section>

      <section className="section lesson-content"><div className="container"><div className="lesson-body">
        <h2>1. 회의록 정리</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">회의록 작성</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 회의 내용을 정리해주세요.

형식:
- 회의 개요 (일시, 참석자, 안건)
- 주요 논의 사항 (번호 목록)
- 결정 사항
- 액션 아이템 (담당자 + 기한)

회의 내용:
"오늘 마케팅팀 주간회의에서 김 팀장이 Q2 캠페인 예산을 논의했다. 박 대리가 SNS 광고 효과 분석 결과를 발표했는데 전환율이 3%에서 1.8%로 떨어졌다고 한다. 이 부장이 광고 소재를 변경하자고 제안했고 다음 주까지 A/B 테스트 안을 준비하기로 했다. 예산은 기존 2000만원에서 2500만원으로 증액 승인됨."`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`## 회의록

📋 개요
- 일시: [오늘 날짜] 마케팅팀 주간회의
- 참석자: 김 팀장, 박 대리, 이 부장
- 안건: Q2 캠페인 예산 및 성과 검토

📌 주요 논의
1. Q2 캠페인 예산 논의 (김 팀장)
2. SNS 광고 효과 분석 (박 대리) - 전환율 3% → 1.8% 하락
3. 광고 소재 변경 제안 (이 부장)

✅ 결정 사항
- Q2 캠페인 예산: 2,000만원 → 2,500만원 증액 승인
- 광고 소재 A/B 테스트 진행 결정

📎 액션 아이템
| 항목 | 담당자 | 기한 |
|------|--------|------|
| A/B 테스트 안 준비 | 이 부장 | 다음 주 |`}</div>
          </div>
        </div>

        <h2>2. 제안서 초안</h2>
        <div className="code-block">
          <div className="code-header">제안서 프롬프트</div>
          <pre><code>{`B2B SaaS 제품 도입 제안서 초안을 작성해주세요.

제품: AI 고객 서비스 챗봇
고객사: 중소형 이커머스 (월 주문 5만건)
고객 문제: CS 인력 부족, 응답 시간 평균 4시간

포함 내용:
1. 현황 분석 및 문제 정의
2. 솔루션 소개 및 기대 효과
3. 도입 일정 (3단계)
4. 투자 비용 및 ROI 예상
5. 성공 사례 참고

톤: 전문적, 데이터 기반, 설득력 있게
분량: A4 2페이지 분량`}</code></pre>
        </div>

        <h2>3. 시장 분석</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">SWOT 분석</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 기업 정보를 바탕으로 SWOT 분석을 수행해주세요.

기업: 국내 중소 커피 프랜차이즈 (50개 매장)
시장: 국내 커피 시장 (연 7조원, 포화 상태)
강점: 자체 로스팅, 저가 전략 (아메리카노 2,000원)
현황: 매출 정체, 배달 비중 30%

SWOT 표 + 전략 매트릭스(SO/WO/ST/WT) + 핵심 추천 전략 3가지`}</div>
          </div>
        </div>

        <h2>4. 고객 커뮤니케이션</h2>
        <div className="prompt-example">
          <div className="prompt-example-header">고객 불만 대응</div>
          <div className="prompt-example-body">
            <div className="prompt-label">프롬프트</div>
            <div className="prompt-text">{`다음 고객 불만에 대한 응대 메시지를 작성해주세요.

불만: "3일 전에 주문한 상품이 아직도 안 왔어요. 배송 조회도 안 되고 전화도 안 받고 정말 화가 납니다!"

원칙:
- 감정을 먼저 인정하고 공감
- 구체적인 조치 사항 안내
- 보상안 제시
- 200자 이내`}</div>
            <div className="prompt-label">AI 응답</div>
            <div className="prompt-result">{`고객님, 불편을 드려 정말 죄송합니다. 기다리시느라 답답하셨을 마음 충분히 이해합니다.

확인 결과, 물류센터 시스템 오류로 배송이 지연되었습니다. 현재 긴급 출고 처리하여 내일(3/24) 오전 중 도착 예정입니다.

불편에 대한 사과로 5,000원 적립금을 지급해 드렸습니다. 추가 문의는 카카오톡 채널로 즉시 응대하겠습니다.`}</div>
          </div>
        </div>

        <h2>5. 전략 기획</h2>
        <div className="code-block">
          <div className="code-header">OKR 설계 프롬프트</div>
          <pre><code>{`마케팅팀의 Q2 OKR을 설계해주세요.

배경:
- Q1 매출 목표 달성률: 85%
- 신규 고객 획득 비용(CAC): 5만원 (목표: 3만원)
- 브랜드 인지도: 15% (목표: 25%)

요구사항:
- Objective 2개
- 각 Objective별 Key Result 3개
- KR은 측정 가능한 수치 포함
- 이니셔티브(Initiative) 각 2개씩`}</code></pre>
        </div>

        <div className="callout-box">
          <h3>비즈니스 프롬프트 핵심 팁</h3>
          <ul>
            <li><strong>숫자와 데이터 제공</strong>: 구체적 수치가 있어야 AI가 정확한 분석 가능</li>
            <li><strong>프레임워크 지정</strong>: SWOT, OKR, MECE 등 분석 프레임워크 명시</li>
            <li><strong>출력 형식 지정</strong>: 표, 목록, 슬라이드 형식 등 명확히</li>
            <li><strong>액션 지향</strong>: 분석 뿐 아니라 "So What? Now What?"까지 요청</li>
          </ul>
        </div>

        <div className="exercise-box">
          <h3>연습: 비즈니스 문서 작성</h3>
          <p>자신의 업무 상황에 맞는 비즈니스 문서를 AI로 작성해보세요: 회의록, 제안서, 분석 보고서 중 하나를 선택하세요.</p>
        </div>

        <div className="lesson-nav"><Link to="/practice/translation" className="lesson-nav-btn prev">← 이전: 번역</Link><Link to="/playground" className="lesson-nav-btn next">다음: 실습 →</Link></div>
      </div></div></section>
    </>
  )
}
