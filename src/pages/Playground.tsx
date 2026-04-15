import { useState, useRef, useCallback } from 'react'
import SEOHead from '../components/SEOHead'

const sideMenuItems = [
  { id: 'score', label: '프롬프트 평가 기준' },
  { id: 'rubric', label: '평가 루브릭 & 채점표' },
  { id: 'worksheet', label: '자기 평가 워크시트' },
  { id: 'techniques', label: '핵심 프롬프트 기법' },
  { id: 'advanced', label: '고급 프롬프트 전략' },
  { id: 'practice', label: '프롬프트 실습' },
]

const templates = [
  { label: 'Few-shot 예시', prompt: '다음 예시를 참고하여 답변해주세요.\n\n질문: 사과는 무슨 색인가요?\n답변: 빨간색입니다.\n\n질문: 바나나는 무슨 색인가요?\n답변: 노란색입니다.\n\n질문: 포도는 무슨 색인가요?\n답변:' },
  { label: 'Chain-of-Thought', prompt: '문제를 단계별로 풀어주세요.\n\n문제: 한 상자에 사과가 12개 있습니다. 3명이 동일하게 나누어 먹고, 남은 사과의 반을 동생에게 주었습니다. 최종적으로 남은 사과는 몇 개인가요?\n\n풀이 과정:' },
  { label: '역할 부여', prompt: '당신은 10년 경력의 시니어 프론트엔드 개발자입니다.\n코드 리뷰를 할 때 다음 관점에서 피드백을 제공합니다:\n1. 성능 최적화\n2. 코드 가독성\n3. 보안 취약점\n\n다음 코드를 리뷰해주세요:\n```javascript\nconst data = fetch("/api/users").then(r => r.json())\n```' },
  { label: '구조화된 출력', prompt: '다음 텍스트에서 정보를 추출하여 JSON 형식으로 정리해주세요.\n\n텍스트: "삼성전자는 2024년 1분기 매출 71.9조원을 기록했으며, 영업이익은 6.6조원입니다. 반도체 부문이 실적 개선을 주도했습니다."\n\n출력 형식:\n{\n  "company": "",\n  "period": "",\n  "revenue": "",\n  "operating_profit": "",\n  "key_driver": ""\n}' },
  { label: '비교 분석', prompt: '다음 두 가지 기술을 아래 기준으로 비교 분석해주세요.\n\n비교 대상: React vs Vue.js\n\n비교 기준:\n1. 학습 곡선\n2. 생태계 크기\n3. 성능\n4. 취업 시장\n5. 커뮤니티 활성도\n\n표 형식으로 정리하고 결론을 제시해주세요.' }
]

export default function Playground() {
  const [activeMenu, setActiveMenu] = useState('score')
  const [prompt, setPrompt] = useState('')
  const [history, setHistory] = useState<Array<{ prompt: string; analysis: string; timestamp: string }>>([])
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const autoResize = useCallback(() => {
    const el = textareaRef.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = Math.max(200, el.scrollHeight) + 'px'
    }
  }, [])

  const handleTemplate = (template: typeof templates[0]) => {
    setPrompt(template.prompt)
    requestAnimationFrame(autoResize)
  }

  const handleAnalyze = () => {
    if (!prompt.trim()) return
    const analysis = analyzePrompt(prompt)
    setHistory(prev => [{ prompt, analysis, timestamp: new Date().toLocaleTimeString('ko-KR') }, ...prev])
  }

  const handleClear = () => {
    setPrompt('')
    if (textareaRef.current) textareaRef.current.style.height = '200px'
  }

  return (
    <>
      <SEOHead title="프롬프트 실습" description="프롬프트 평가 기준, 핵심 기법, 고급 전략을 학습하고 직접 실습해보세요." />

      <div className="page-header">
        <div className="container">
          <h1>프롬프트 실습</h1>
          <p>평가 기준 학습부터 직접 실습까지, 프롬프트 엔지니어링의 모든 것</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="pg-layout">
            {/* Left Sidebar */}
            <aside className="pg-sidebar">
              <nav className="pg-sidebar-nav">
                {sideMenuItems.map(item => (
                  <button
                    key={item.id}
                    className={`pg-sidebar-btn${activeMenu === item.id ? ' active' : ''}`}
                    onClick={() => setActiveMenu(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <main className="pg-content">
              {activeMenu === 'score' && <ScoreSection />}
              {activeMenu === 'rubric' && <RubricSection />}
              {activeMenu === 'worksheet' && <WorksheetSection />}
              {activeMenu === 'techniques' && <TechniquesSection />}
              {activeMenu === 'advanced' && <AdvancedSection />}
              {activeMenu === 'practice' && (
                <PracticeSection
                  prompt={prompt}
                  setPrompt={setPrompt}
                  history={history}
                  textareaRef={textareaRef}
                  autoResize={autoResize}
                  onTemplate={handleTemplate}
                  onAnalyze={handleAnalyze}
                  onClear={handleClear}
                />
              )}
            </main>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Section: 프롬프트 평가 기준 ─── */
function ScoreSection() {
  return (
    <div className="pg-section">
      <h2>프롬프트 평가 기준</h2>
      <p className="pg-desc">프롬프트의 품질을 객관적으로 평가하기 위한 5대 평가 기준입니다.</p>

      <h3>5대 평가 기준 (SCORE)</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>기준</th><th>약자</th><th>설명</th><th>배점</th></tr></thead>
          <tbody>
            <tr><td>구체성 (Specificity)</td><td><span className="pg-badge badge-s">S</span></td><td>요청이 구체적이고 명확한가</td><td>20점</td></tr>
            <tr><td>맥락 (Context)</td><td><span className="pg-badge badge-c">C</span></td><td>충분한 배경 정보를 제공했는가</td><td>20점</td></tr>
            <tr><td>출력지정 (Output)</td><td><span className="pg-badge badge-o">O</span></td><td>원하는 결과 형식을 명시했는가</td><td>20점</td></tr>
            <tr><td>역할부여 (Role)</td><td><span className="pg-badge badge-r">R</span></td><td>적절한 전문가 역할을 지정했는가</td><td>20점</td></tr>
            <tr><td>효과성 (Effectiveness)</td><td><span className="pg-badge badge-e">E</span></td><td>실제로 원하는 결과를 얻었는가</td><td>20점</td></tr>
          </tbody>
        </table>
      </div>

      <h3>평가 등급 체계</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>등급</th><th>점수 범위</th><th>설명</th></tr></thead>
          <tbody>
            <tr><td><span className="grade grade-s">S (탁월)</span></td><td>90-100</td><td>모든 요소가 완벽하게 갖춰진 프롬프트</td></tr>
            <tr><td><span className="grade grade-a">A (우수)</span></td><td>80-89</td><td>대부분의 요소가 잘 갖춰진 프롬프트</td></tr>
            <tr><td><span className="grade grade-b">B (보통)</span></td><td>70-79</td><td>기본 요소는 있으나 개선 여지가 있음</td></tr>
            <tr><td><span className="grade grade-c">C (미흡)</span></td><td>60-69</td><td>핵심 요소가 부족하여 결과가 불만족</td></tr>
            <tr><td><span className="grade grade-d">D (부족)</span></td><td>0-59</td><td>프롬프트로서 기본 기능을 하지 못함</td></tr>
          </tbody>
        </table>
      </div>

      <h3>기준별 세부 평가 항목</h3>

      <h4>S - 구체성 (Specificity)</h4>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>점수</th><th>수준</th><th>설명</th></tr></thead>
          <tbody>
            <tr><td>17-20</td><td>탁월</td><td>정확한 수치, 범위, 조건이 모두 명시됨</td></tr>
            <tr><td>13-16</td><td>우수</td><td>대부분 구체적이나 일부 모호한 부분 존재</td></tr>
            <tr><td>9-12</td><td>보통</td><td>기본적인 요청은 명확하나 세부 사항 부족</td></tr>
            <tr><td>5-8</td><td>미흡</td><td>막연한 요청으로 해석의 여지가 큼</td></tr>
            <tr><td>0-4</td><td>부족</td><td>무엇을 요청하는지 파악이 어려움</td></tr>
          </tbody>
        </table>
      </div>

      <h4>C - 맥락 (Context)</h4>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>점수</th><th>수준</th><th>설명</th></tr></thead>
          <tbody>
            <tr><td>17-20</td><td>탁월</td><td>배경, 대상, 용도, 제약조건이 모두 포함</td></tr>
            <tr><td>13-16</td><td>우수</td><td>핵심 맥락은 있으나 일부 정보 누락</td></tr>
            <tr><td>9-12</td><td>보통</td><td>기본 배경만 제공, 추가 맥락 필요</td></tr>
            <tr><td>5-8</td><td>미흡</td><td>맥락이 거의 없어 AI가 추측해야 함</td></tr>
            <tr><td>0-4</td><td>부족</td><td>맥락 정보가 전혀 없음</td></tr>
          </tbody>
        </table>
      </div>

      <div className="pg-tip">SCORE 평가 모델을 활용하면 프롬프트 품질을 체계적으로 측정하고 개선할 수 있습니다.</div>
    </div>
  )
}

/* ─── Section: 평가 루브릭 & 채점표 ─── */
function RubricSection() {
  return (
    <div className="pg-section">
      <h2>평가 루브릭 & 채점표</h2>
      <p className="pg-desc">실무에서 바로 사용할 수 있는 프롬프트 평가 루브릭과 채점표입니다.</p>

      <h3>종합 평가 루브릭</h3>
      <div className="table-wrap">
        <table className="pg-table pg-table-sm">
          <thead><tr><th>평가 영역</th><th>탁월 (5점)</th><th>우수 (4점)</th><th>보통 (3점)</th><th>미흡 (2점)</th><th>부족 (1점)</th></tr></thead>
          <tbody>
            <tr><td>목적 명확성</td><td>목표가 구체적이고 측정 가능</td><td>목표가 명확함</td><td>목표가 있으나 모호</td><td>목표가 불분명</td><td>목표 없음</td></tr>
            <tr><td>맥락 제공</td><td>완벽한 배경 정보</td><td>핵심 맥락 포함</td><td>기본 맥락만 제공</td><td>맥락 부족</td><td>맥락 없음</td></tr>
            <tr><td>구조 & 형식</td><td>체계적 구조 + 형식 지정</td><td>구조적 + 일부 형식</td><td>기본 구조 있음</td><td>구조 미흡</td><td>비구조적</td></tr>
            <tr><td>제약 조건</td><td>범위, 길이, 톤 등 명시</td><td>주요 제약 포함</td><td>일부 제약 있음</td><td>제약 부족</td><td>제약 없음</td></tr>
            <tr><td>예시 & 참고</td><td>구체적 예시 + 참고자료</td><td>예시 포함</td><td>간단한 참고</td><td>예시 부족</td><td>예시 없음</td></tr>
          </tbody>
        </table>
      </div>

      <h3>Copilot 환경별 특화 기준</h3>

      <h4>GitHub Copilot (코드)</h4>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>항목</th><th>평가 내용</th><th>비중</th></tr></thead>
          <tbody>
            <tr><td>주석 품질</td><td>함수 목적, 매개변수, 반환값 설명</td><td>25%</td></tr>
            <tr><td>네이밍</td><td>의미 있는 함수명/변수명 사용</td><td>20%</td></tr>
            <tr><td>컨텍스트 파일</td><td>관련 파일/타입 import 유무</td><td>20%</td></tr>
            <tr><td>테스트 케이스</td><td>엣지 케이스 포함 여부</td><td>15%</td></tr>
            <tr><td>단계적 분해</td><td>복잡한 작업의 단계 구분</td><td>20%</td></tr>
          </tbody>
        </table>
      </div>

      <h4>M365 Copilot (업무)</h4>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>항목</th><th>평가 내용</th><th>비중</th></tr></thead>
          <tbody>
            <tr><td>작업 목적</td><td>문서/분석의 목적 명시</td><td>25%</td></tr>
            <tr><td>대상 독자</td><td>결과물의 수신자/활용자</td><td>20%</td></tr>
            <tr><td>톤 & 스타일</td><td>공식/비공식, 전문적/친근</td><td>15%</td></tr>
            <tr><td>분량 & 형식</td><td>길이, 구조, 시각적 요소</td><td>20%</td></tr>
            <tr><td>참고 자료</td><td>활용할 데이터/문서 명시</td><td>20%</td></tr>
          </tbody>
        </table>
      </div>

      <h3>채점 예시</h3>
      <div className="pg-example-box">
        <div className="pg-example-label bad">Before</div>
        <code>"React로 할 일 목록 앱 만들어줘"</code>
      </div>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>평가 기준</th><th>점수</th><th>이유</th></tr></thead>
          <tbody>
            <tr><td>구체성 (S)</td><td>8/20</td><td>기본 요구만 있고 세부 기능 미지정</td></tr>
            <tr><td>맥락 (C)</td><td>4/20</td><td>프로젝트 배경, 사용 환경 미제공</td></tr>
            <tr><td>출력지정 (O)</td><td>6/20</td><td>"앱"이라는 큰 범위만 지정</td></tr>
            <tr><td>역할부여 (R)</td><td>0/20</td><td>역할 미지정</td></tr>
            <tr><td>효과성 (E)</td><td>8/20</td><td>기본 기능만 생성 가능</td></tr>
            <tr className="pg-total-row"><td><strong>총점</strong></td><td><strong>26/100</strong></td><td><span className="grade grade-d">등급: D (부족)</span></td></tr>
          </tbody>
        </table>
      </div>

      <div className="pg-example-box" style={{ marginTop: '24px' }}>
        <div className="pg-example-label good">After</div>
        <code>"시니어 React 개발자로서, TypeScript + Zustand 상태관리를 사용한 할 일 목록 앱을 만들어줘. 기능: 추가/삭제/완료처리/필터(전체·미완료·완료). localStorage 영속성 포함. 컴포넌트는 TodoInput, TodoList, TodoItem, FilterBar로 분리해줘."</code>
      </div>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>평가 기준</th><th>점수</th><th>이유</th></tr></thead>
          <tbody>
            <tr><td>구체성 (S)</td><td>18/20</td><td>기능, 컴포넌트 구조까지 명확</td></tr>
            <tr><td>맥락 (C)</td><td>14/20</td><td>기술 스택 명시 (배경은 약간 부족)</td></tr>
            <tr><td>출력지정 (O)</td><td>16/20</td><td>컴포넌트 구조 지정</td></tr>
            <tr><td>역할부여 (R)</td><td>18/20</td><td>시니어 React 개발자 역할</td></tr>
            <tr><td>효과성 (E)</td><td>17/20</td><td>원하는 결과를 높은 확률로 달성</td></tr>
            <tr className="pg-total-row"><td><strong>총점</strong></td><td><strong>83/100</strong></td><td><span className="grade grade-a">등급: A (우수)</span></td></tr>
          </tbody>
        </table>
      </div>

      <div className="pg-tip">같은 주제라도 프롬프트 품질에 따라 결과물의 수준이 극적으로 달라집니다.</div>
    </div>
  )
}

/* ─── Section: 자기 평가 워크시트 ─── */
function WorksheetSection() {
  return (
    <div className="pg-section">
      <h2>자기 평가 워크시트</h2>
      <p className="pg-desc">프롬프트를 작성한 후 스스로 점검할 수 있는 자기 평가 워크시트입니다.</p>

      <h3>작성 전 체크리스트</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>#</th><th>체크 항목</th><th>확인</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>이 프롬프트로 달성하려는 목표를 한 문장으로 말할 수 있는가?</td><td>&#9744;</td></tr>
            <tr><td>2</td><td>AI가 아닌 사람에게 같은 요청을 한다면 충분히 이해할 수 있는가?</td><td>&#9744;</td></tr>
            <tr><td>3</td><td>결과물의 형태(코드, 문서, 표 등)를 미리 정했는가?</td><td>&#9744;</td></tr>
            <tr><td>4</td><td>필요한 배경 정보를 모두 파악했는가?</td><td>&#9744;</td></tr>
            <tr><td>5</td><td>한 번에 하나의 작업만 요청하는가? (복합 작업은 분리)</td><td>&#9744;</td></tr>
          </tbody>
        </table>
      </div>

      <h3>작성 후 자기 평가표</h3>
      <div className="table-wrap">
        <table className="pg-table pg-table-sm">
          <thead><tr><th>영역</th><th>질문</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead>
          <tbody>
            <tr><td>명확성</td><td>요청이 한 가지로만 해석되는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
            <tr><td>구체성</td><td>수치, 범위, 조건을 명시했는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
            <tr><td>맥락</td><td>배경과 목적을 충분히 제공했는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
            <tr><td>역할</td><td>AI에게 적절한 전문가 역할을 부여했는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
            <tr><td>형식</td><td>출력 형식을 지정했는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
            <tr><td>제약</td><td>길이, 톤, 스타일 등 제약을 명시했는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
            <tr><td>예시</td><td>원하는 결과의 예시를 포함했는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
            <tr><td>간결성</td><td>불필요한 정보를 제거했는가?</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td><td>&#9744;</td></tr>
          </tbody>
        </table>
      </div>

      <h3>결과 분석 가이드</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>총점</th><th>등급</th><th>조언</th></tr></thead>
          <tbody>
            <tr><td>35-40</td><td><span className="grade grade-s">S</span></td><td>탁월한 프롬프트! 그대로 사용하세요</td></tr>
            <tr><td>28-34</td><td><span className="grade grade-a">A</span></td><td>우수합니다. 약간의 보완으로 완벽해질 수 있습니다</td></tr>
            <tr><td>20-27</td><td><span className="grade grade-b">B</span></td><td>기본은 갖추었으나 구체성과 맥락을 보강하세요</td></tr>
            <tr><td>12-19</td><td><span className="grade grade-c">C</span></td><td>핵심 요소가 부족합니다. 역할과 형식을 추가하세요</td></tr>
            <tr><td>8-11</td><td><span className="grade grade-d">D</span></td><td>전면 재작성이 필요합니다</td></tr>
          </tbody>
        </table>
      </div>

      <h3>개선 반복 프로세스</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>단계</th><th>활동</th><th>핵심 질문</th></tr></thead>
          <tbody>
            <tr><td>1. 초안 작성</td><td>첫 번째 프롬프트 작성</td><td>"무엇을 원하는가?"</td></tr>
            <tr><td>2. 자기 평가</td><td>위 체크리스트로 점검</td><td>"빠진 요소는 없는가?"</td></tr>
            <tr><td>3. 실행 & 확인</td><td>AI에 입력 후 결과 확인</td><td>"기대한 결과인가?"</td></tr>
            <tr><td>4. 분석</td><td>부족한 부분 파악</td><td>"왜 기대와 다른가?"</td></tr>
            <tr><td>5. 개선</td><td>프롬프트 수정 후 재실행</td><td>"어떤 요소를 보강할까?"</td></tr>
            <tr><td>6. 기록</td><td>성공 패턴 정리</td><td>"재사용할 수 있는가?"</td></tr>
          </tbody>
        </table>
      </div>

      <div className="pg-tip">프롬프트 작성 능력은 타고나는 것이 아니라, 반복 연습으로 향상됩니다.</div>
    </div>
  )
}

/* ─── Section: 핵심 프롬프트 기법 ─── */
function TechniquesSection() {
  return (
    <div className="pg-section">
      <h2>핵심 프롬프트 기법</h2>
      <p className="pg-desc">AI에서 효과적으로 사용되는 핵심 프롬프트 기법들을 소개합니다.</p>

      <h3>주요 프롬프트 기법 비교</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>기법</th><th>설명</th><th>난이도</th><th>효과</th></tr></thead>
          <tbody>
            <tr><td>Zero-shot</td><td>예시 없이 바로 지시</td><td>쉬움</td><td>보통</td></tr>
            <tr><td>Few-shot</td><td>2-3개 예시를 포함하여 지시</td><td>보통</td><td>높음</td></tr>
            <tr><td>Chain-of-Thought</td><td>단계별 사고 과정을 유도</td><td>보통</td><td>높음</td></tr>
            <tr><td>Role Prompting</td><td>전문가 역할을 부여</td><td>쉬움</td><td>높음</td></tr>
            <tr><td>Template Prompting</td><td>미리 정한 틀에 맞춰 요청</td><td>쉬움</td><td>높음</td></tr>
            <tr><td>Tree-of-Thought</td><td>여러 사고 경로를 탐색</td><td>어려움</td><td>매우 높음</td></tr>
          </tbody>
        </table>
      </div>

      <h3>1. Zero-shot 프롬프팅</h3>
      <p>예시 없이 직접 지시하는 가장 기본적인 기법입니다.</p>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>상황</th><th>프롬프트</th></tr></thead>
          <tbody>
            <tr><td>번역</td><td>"다음 문장을 영어로 번역해주세요: 오늘 회의 자료를 준비했습니다"</td></tr>
            <tr><td>분류</td><td>"다음 이메일이 스팸인지 정상인지 분류해주세요: ..."</td></tr>
            <tr><td>요약</td><td>"다음 기사를 3줄로 요약해주세요: ..."</td></tr>
          </tbody>
        </table>
      </div>

      <h3>2. Few-shot 프롬프팅</h3>
      <p>예시를 제공하여 패턴을 학습시키는 기법입니다.</p>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>구분</th><th>내용</th></tr></thead>
          <tbody>
            <tr><td>예시 1</td><td>입력: "이 제품 정말 좋아요!" → 감정: 긍정</td></tr>
            <tr><td>예시 2</td><td>입력: "배송이 너무 느려요" → 감정: 부정</td></tr>
            <tr><td>예시 3</td><td>입력: "보통이에요, 그냥 그래요" → 감정: 중립</td></tr>
            <tr><td><strong>실제 요청</strong></td><td>입력: "가격 대비 품질이 뛰어납니다" → 감정: ?</td></tr>
          </tbody>
        </table>
      </div>

      <h3>3. Chain-of-Thought (CoT)</h3>
      <p>단계별 사고 과정을 명시적으로 유도하는 기법입니다.</p>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>일반 프롬프트</th><th>CoT 프롬프트</th></tr></thead>
          <tbody>
            <tr><td>"이 코드의 버그를 찾아줘"</td><td>"이 코드를 분석해줘: 1) 먼저 각 함수의 역할을 파악하고, 2) 데이터 흐름을 추적하고, 3) 잠재적 에러 포인트를 식별하고, 4) 버그의 원인과 해결책을 제시해줘"</td></tr>
            <tr><td>"마케팅 전략을 세워줘"</td><td>"마케팅 전략을 단계별로 수립해줘: 1) 현재 시장 상황 분석, 2) 목표 고객 정의, 3) 경쟁사 대비 차별점 도출, 4) 채널별 전략 수립, 5) KPI 설정"</td></tr>
          </tbody>
        </table>
      </div>

      <h3>4. Role Prompting</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>역할</th><th>프롬프트 시작</th><th>효과</th></tr></thead>
          <tbody>
            <tr><td>코드 리뷰어</td><td>"당신은 10년 경력의 시니어 개발자입니다"</td><td>코드 품질, 보안, 성능 관점의 리뷰</td></tr>
            <tr><td>비즈니스 컨설턴트</td><td>"당신은 McKinsey 출신 경영 컨설턴트입니다"</td><td>전략적, 구조화된 비즈니스 분석</td></tr>
            <tr><td>UX 디자이너</td><td>"당신은 사용자 중심 설계 전문가입니다"</td><td>사용성, 접근성 관점의 피드백</td></tr>
            <tr><td>데이터 사이언티스트</td><td>"당신은 통계학 박사 데이터 분석가입니다"</td><td>데이터 기반의 인사이트 도출</td></tr>
          </tbody>
        </table>
      </div>

      <div className="pg-tip">상황에 따라 여러 기법을 조합하면 더 좋은 결과를 얻을 수 있습니다.</div>
    </div>
  )
}

/* ─── Section: 고급 프롬프트 전략 ─── */
function AdvancedSection() {
  return (
    <div className="pg-section">
      <h2>고급 프롬프트 전략</h2>
      <p className="pg-desc">전문가 수준의 고급 프롬프트 전략입니다.</p>

      <h3>메타 프롬프팅</h3>
      <p>AI에게 프롬프트 자체를 개선하도록 요청하는 전략입니다.</p>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>단계</th><th>메타 프롬프트</th></tr></thead>
          <tbody>
            <tr><td>분석 요청</td><td>"내가 작성한 다음 프롬프트를 분석해줘: [프롬프트]"</td></tr>
            <tr><td>개선 요청</td><td>"이 프롬프트의 약점을 3가지 찾고, 개선된 버전을 작성해줘"</td></tr>
            <tr><td>비교 요청</td><td>"원본과 개선 버전의 예상 결과 차이를 설명해줘"</td></tr>
          </tbody>
        </table>
      </div>

      <h3>페르소나 체이닝</h3>
      <p>여러 전문가 역할을 순차적으로 활용하는 전략입니다.</p>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>단계</th><th>페르소나</th><th>작업</th></tr></thead>
          <tbody>
            <tr><td>1단계</td><td>비즈니스 분석가</td><td>요구사항 정의 및 범위 설정</td></tr>
            <tr><td>2단계</td><td>시스템 아키텍트</td><td>기술 구조 및 설계 결정</td></tr>
            <tr><td>3단계</td><td>시니어 개발자</td><td>코드 구현 및 최적화</td></tr>
            <tr><td>4단계</td><td>QA 엔지니어</td><td>테스트 케이스 및 검증</td></tr>
            <tr><td>5단계</td><td>테크니컬 라이터</td><td>문서화 및 가이드 작성</td></tr>
          </tbody>
        </table>
      </div>

      <h3>제약 기반 프롬프팅</h3>
      <p>의도적으로 제약 조건을 추가하여 결과 품질을 높이는 전략입니다.</p>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>제약 유형</th><th>예시</th><th>효과</th></tr></thead>
          <tbody>
            <tr><td>길이 제약</td><td>"200자 이내로 작성"</td><td>핵심만 추출</td></tr>
            <tr><td>난이도 제약</td><td>"중학생이 이해할 수준으로"</td><td>명확한 설명</td></tr>
            <tr><td>형식 제약</td><td>"반드시 표 형식으로만"</td><td>구조화된 결과</td></tr>
            <tr><td>금지 제약</td><td>"전문 용어 사용 금지"</td><td>접근성 향상</td></tr>
            <tr><td>시간 제약</td><td>"5분 안에 발표할 수 있는 분량"</td><td>핵심 압축</td></tr>
          </tbody>
        </table>
      </div>

      <h3>반복 정제 (Iterative Refinement)</h3>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>라운드</th><th>프롬프트 전략</th><th>목적</th></tr></thead>
          <tbody>
            <tr><td>1차</td><td>넓은 범위로 초안 요청</td><td>전체 구조 파악</td></tr>
            <tr><td>2차</td><td>부족한 부분 구체화 요청</td><td>깊이 보강</td></tr>
            <tr><td>3차</td><td>특정 섹션 집중 개선</td><td>품질 향상</td></tr>
            <tr><td>4차</td><td>전체 일관성 검토 요청</td><td>최종 정제</td></tr>
          </tbody>
        </table>
      </div>

      <h3>프롬프트 템플릿 라이브러리</h3>

      <h4>코드 리뷰 템플릿</h4>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>항목</th><th>내용</th></tr></thead>
          <tbody>
            <tr><td>역할</td><td>"시니어 [언어/프레임워크] 개발자로서"</td></tr>
            <tr><td>관점</td><td>"보안, 성능, 가독성, 유지보수성 관점에서"</td></tr>
            <tr><td>형식</td><td>"각 항목별로 심각도(높/중/낮)와 개선 코드를 제시하고"</td></tr>
            <tr><td>제약</td><td>"긍정적 피드백도 1개 이상 포함해줘"</td></tr>
          </tbody>
        </table>
      </div>

      <h4>비즈니스 보고서 템플릿</h4>
      <div className="table-wrap">
        <table className="pg-table">
          <thead><tr><th>항목</th><th>내용</th></tr></thead>
          <tbody>
            <tr><td>역할</td><td>"[산업] 분야의 비즈니스 애널리스트로서"</td></tr>
            <tr><td>구조</td><td>"Executive Summary → 현황 분석 → 핵심 발견 → 제안 → 다음 단계"</td></tr>
            <tr><td>형식</td><td>"각 섹션별 2-3문장, 핵심 수치는 볼드 처리"</td></tr>
            <tr><td>톤</td><td>"경영진 대상, 전문적이지만 이해하기 쉽게"</td></tr>
          </tbody>
        </table>
      </div>

      <div className="pg-tip">고급 전략은 기본 기법을 충분히 익힌 후 활용하면 더욱 효과적입니다.</div>
    </div>
  )
}

/* ─── Section: 프롬프트 실습 ─── */
function PracticeSection({ prompt, setPrompt, history, textareaRef, autoResize, onTemplate, onAnalyze, onClear }: {
  prompt: string
  setPrompt: (v: string) => void
  history: Array<{ prompt: string; analysis: string; timestamp: string }>
  textareaRef: React.RefObject<HTMLTextAreaElement | null>
  autoResize: () => void
  onTemplate: (t: typeof templates[0]) => void
  onAnalyze: () => void
  onClear: () => void
}) {
  return (
    <div className="pg-section">
      <h2>프롬프트 실습</h2>
      <p className="pg-desc">프롬프트를 직접 작성하고 구조를 분석해보세요.</p>

      <h3>템플릿 선택</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {templates.map((t, i) => (
          <button key={i} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => onTemplate(t)}>
            {t.label}
          </button>
        ))}
      </div>

      <h3>프롬프트 입력</h3>
      <textarea
        ref={textareaRef}
        className="playground-input"
        placeholder={"여기에 프롬프트를 입력하세요...\n\n예: '당신은 전문 번역가입니다. 다음 한국어 문장을 자연스러운 영어로 번역해주세요.'"}
        value={prompt}
        onChange={e => { setPrompt(e.target.value); autoResize() }}
      />
      <div className="playground-actions">
        <button className="btn btn-primary" onClick={onAnalyze} style={{ padding: '10px 24px' }}>프롬프트 분석</button>
        <button className="btn btn-secondary" onClick={onClear} style={{ padding: '10px 24px' }}>초기화</button>
        <button className="btn btn-secondary" onClick={() => navigator.clipboard.writeText(prompt)} style={{ padding: '10px 24px' }}>복사</button>
      </div>

      {history.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h3>분석 결과</h3>
          {history.map((item, i) => (
            <div key={i} className="playground-output" style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '12px' }}>{item.timestamp}</div>
              <div style={{ whiteSpace: 'pre-wrap' }}>{item.analysis}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Analyze Helper ─── */
function analyzePrompt(prompt: string) {
  const lines = prompt.split('\n').filter(l => l.trim())
  const wordCount = prompt.split(/\s+/).filter(Boolean).length
  const charCount = prompt.length

  const techniques: string[] = []
  if (/당신은|너는|역할|전문가|시니어|경력/.test(prompt)) techniques.push('역할 부여 (Role Assignment)')
  if (/예시|예:|답변:|질문:/.test(prompt)) techniques.push('Few-shot Learning')
  if (/단계별|step by step|과정|순서대로/.test(prompt)) techniques.push('Chain-of-Thought')
  if (/JSON|표|형식|포맷|markdown/.test(prompt)) techniques.push('출력 형식 지정 (Output Formatting)')
  if (/비교|분석|장단점|vs/.test(prompt)) techniques.push('비교 분석 (Comparative Analysis)')
  if (/제약|조건|규칙|반드시|하지 마/.test(prompt)) techniques.push('제약 조건 설정 (Constraints)')
  if (/컨텍스트|배경|상황|맥락/.test(prompt)) techniques.push('컨텍스트 제공 (Context Setting)')
  if (techniques.length === 0) techniques.push('기본 질의 (Basic Query)')

  let score = 50
  if (charCount > 100) score += 10
  if (charCount > 300) score += 10
  if (techniques.length > 1) score += 15
  if (techniques.length > 3) score += 10
  if (/\n/.test(prompt)) score += 5
  if (/\d\.|\-\s/.test(prompt)) score += 5

  let quality = '보통'
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
