import { useState, useRef, useCallback } from 'react'
import SEOHead from '../components/SEOHead'

const templates = [
  { label: 'Few-shot 예시', prompt: '다음 예시를 참고하여 답변해주세요.\n\n질문: 사과는 무슨 색인가요?\n답변: 빨간색입니다.\n\n질문: 바나나는 무슨 색인가요?\n답변: 노란색입니다.\n\n질문: 포도는 무슨 색인가요?\n답변:' },
  { label: 'Chain-of-Thought', prompt: '문제를 단계별로 풀어주세요.\n\n문제: 한 상자에 사과가 12개 있습니다. 3명이 동일하게 나누어 먹고, 남은 사과의 반을 동생에게 주었습니다. 최종적으로 남은 사과는 몇 개인가요?\n\n풀이 과정:' },
  { label: '역할 부여', prompt: '당신은 10년 경력의 시니어 프론트엔드 개발자입니다.\n코드 리뷰를 할 때 다음 관점에서 피드백을 제공합니다:\n1. 성능 최적화\n2. 코드 가독성\n3. 보안 취약점\n\n다음 코드를 리뷰해주세요:\n```javascript\nconst data = fetch("/api/users").then(r => r.json())\n```' },
  { label: '구조화된 출력', prompt: '다음 텍스트에서 정보를 추출하여 JSON 형식으로 정리해주세요.\n\n텍스트: "삼성전자는 2024년 1분기 매출 71.9조원을 기록했으며, 영업이익은 6.6조원입니다. 반도체 부문이 실적 개선을 주도했습니다."\n\n출력 형식:\n{\n  "company": "",\n  "period": "",\n  "revenue": "",\n  "operating_profit": "",\n  "key_driver": ""\n}' },
  { label: '비교 분석', prompt: '다음 두 가지 기술을 아래 기준으로 비교 분석해주세요.\n\n비교 대상: React vs Vue.js\n\n비교 기준:\n1. 학습 곡선\n2. 생태계 크기\n3. 성능\n4. 취업 시장\n5. 커뮤니티 활성도\n\n표 형식으로 정리하고 결론을 제시해주세요.' }
]

export default function Playground() {
  const [prompt, setPrompt] = useState('')
  const [history, setHistory] = useState([])
  const textareaRef = useRef(null)

  const autoResize = useCallback(() => {
    const el = textareaRef.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = Math.max(200, el.scrollHeight) + 'px'
    }
  }, [])

  const handleTemplate = (template) => {
    setPrompt(template.prompt)
    requestAnimationFrame(autoResize)
  }

  const handleAnalyze = () => {
    if (!prompt.trim()) return

    const analysis = analyzePrompt(prompt)
    setHistory(prev => [{
      prompt: prompt,
      analysis: analysis,
      timestamp: new Date().toLocaleTimeString('ko-KR')
    }, ...prev])
  }

  const handleClear = () => {
    setPrompt('')
    if (textareaRef.current) textareaRef.current.style.height = '200px'
  }

  return (
    <>
      <SEOHead title="프롬프트 실습" description="직접 프롬프트를 작성하고 분석해보세요." />

      <div className="page-header">
        <div className="container">
          <h1>프롬프트 실습</h1>
          <p>프롬프트를 작성하고 구조를 분석해보세요</p>
        </div>
      </div>

      <section className="section">
        <div className="container playground-container">
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>템플릿 선택</h2>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {templates.map((t, i) => (
              <button
                key={i}
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                onClick={() => handleTemplate(t)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px' }}>프롬프트 입력</h2>
          <textarea
            ref={textareaRef}
            className="playground-input"
            placeholder="여기에 프롬프트를 입력하세요...&#10;&#10;예: '당신은 전문 번역가입니다. 다음 한국어 문장을 자연스러운 영어로 번역해주세요.'"
            value={prompt}
            onChange={e => { setPrompt(e.target.value); autoResize() }}
          />
          <div className="playground-actions">
            <button className="btn btn-primary" onClick={handleAnalyze} style={{ padding: '10px 24px' }}>
              프롬프트 분석
            </button>
            <button className="btn btn-secondary" onClick={handleClear} style={{ padding: '10px 24px' }}>
              초기화
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => { navigator.clipboard.writeText(prompt) }}
              style={{ padding: '10px 24px' }}
            >
              복사
            </button>
          </div>

          {history.length > 0 && (
            <div style={{ marginTop: '40px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px' }}>분석 결과</h2>
              {history.map((item, i) => (
                <div key={i} className="playground-output" style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '12px' }}>
                    {item.timestamp}
                  </div>
                  <div style={{ whiteSpace: 'pre-wrap' }}>{item.analysis}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function analyzePrompt(prompt) {
  const lines = prompt.split('\n').filter(l => l.trim())
  const wordCount = prompt.split(/\s+/).filter(Boolean).length
  const charCount = prompt.length

  const techniques = []

  if (/당신은|너는|역할|전문가|시니어|경력/.test(prompt)) techniques.push('역할 부여 (Role Assignment)')
  if (/예시|예:|답변:|질문:/.test(prompt)) techniques.push('Few-shot Learning')
  if (/단계별|step by step|과정|순서대로/.test(prompt)) techniques.push('Chain-of-Thought')
  if (/JSON|표|형식|포맷|markdown/.test(prompt)) techniques.push('출력 형식 지정 (Output Formatting)')
  if (/비교|분석|장단점|vs/.test(prompt)) techniques.push('비교 분석 (Comparative Analysis)')
  if (/제약|조건|규칙|반드시|하지 마/.test(prompt)) techniques.push('제약 조건 설정 (Constraints)')
  if (/컨텍스트|배경|상황|맥락/.test(prompt)) techniques.push('컨텍스트 제공 (Context Setting)')

  if (techniques.length === 0) techniques.push('기본 질의 (Basic Query)')

  let quality = '보통'
  let score = 50

  if (charCount > 100) score += 10
  if (charCount > 300) score += 10
  if (techniques.length > 1) score += 15
  if (techniques.length > 3) score += 10
  if (/\n/.test(prompt)) score += 5
  if (/\d\.|\-\s/.test(prompt)) score += 5

  if (score >= 80) quality = '우수'
  else if (score >= 60) quality = '양호'

  return `[프롬프트 분석 결과]

글자 수: ${charCount}자 | 단어 수: ${wordCount}개 | 줄 수: ${lines.length}줄

사용된 기법:
${techniques.map(t => `  - ${t}`).join('\n')}

프롬프트 품질: ${quality} (${Math.min(score, 100)}점/100점)

개선 제안:
${charCount < 50 ? '  - 프롬프트가 너무 짧습니다. 더 구체적인 지시사항을 추가해보세요.\n' : ''}${!techniques.includes('역할 부여 (Role Assignment)') ? '  - 역할 부여를 추가하면 더 전문적인 답변을 받을 수 있습니다.\n' : ''}${!techniques.includes('출력 형식 지정 (Output Formatting)') ? '  - 원하는 출력 형식을 지정하면 더 구조화된 답변을 받을 수 있습니다.\n' : ''}${techniques.length <= 1 ? '  - 여러 기법을 조합하면 더 높은 품질의 결과를 얻을 수 있습니다.' : '  - 좋은 프롬프트입니다! 다양한 기법이 잘 활용되고 있습니다.'}`
}
