# AI Prompt - 디자인 시스템 가이드

## 색상 체계

### Primary Colors (테마별)
| 테마 | Primary | Hover | Light | Gradient |
|------|---------|-------|-------|----------|
| Purple (기본) | #7C3AED | #6D28D9 | #EDE9FE | #7C3AED → #A78BFA |
| Blue | #2563EB | #1D4ED8 | #DBEAFE | #2563EB → #60A5FA |
| Green | #059669 | #047857 | #D1FAE5 | #059669 → #34D399 |
| Rose | #E11D48 | #BE123C | #FFE4E6 | #E11D48 → #FB7185 |
| Orange | #EA580C | #C2410C | #FFF7ED | #EA580C → #FB923C |

### 시맨틱 컬러
```css
--bg-primary: #FFFFFF          /* 메인 배경 */
--bg-secondary: #F8FAFC        /* 보조 배경 */
--text-primary: #1E293B        /* 주요 텍스트 */
--text-secondary: #64748B      /* 보조 텍스트 */
--border-color: #E2E8F0        /* 테두리 */
--shadow-color: rgba(0,0,0,0.1) /* 그림자 */
```

### 다크 모드
```css
--bg-primary: #0F172A
--bg-secondary: #1E293B
--text-primary: #F1F5F9
--text-secondary: #94A3B8
--border-color: #334155
```

## 타이포그래피

### 폰트
- **Main**: 'Noto Sans KR', sans-serif
- **Code**: 'Fira Code', 'Consolas', monospace

### 크기 스케일
| 용도 | 크기 | Weight |
|------|------|--------|
| Hero Title | 3.5rem | 900 |
| Page Title (h1) | 2.5rem | 800 |
| Section Title (h2) | 1.75rem | 700 |
| Sub Title (h3) | 1.25rem | 600 |
| Body | 1rem | 400 |
| Small | 0.875rem | 400 |

## 컴포넌트 스타일

### 버튼
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 12px 32px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}
```

### 글래스모피즘 카드
```css
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

### 프롬프트 예시 카드
```html
<div class="prompt-example">
  <div class="prompt-example-header">제목</div>
  <div class="prompt-example-body">
    <div class="prompt-label">프롬프트</div>
    <div class="prompt-text">내용</div>
    <div class="prompt-label">AI 응답</div>
    <div class="prompt-result">결과</div>
  </div>
</div>
```

### 비교 카드
```html
<div class="comparison-grid">
  <div class="comparison-card bad"><h4>나쁜 예</h4>...</div>
  <div class="comparison-card good"><h4>좋은 예</h4>...</div>
</div>
```

### 코드 블록
```html
<div class="code-block">
  <div class="code-header">제목</div>
  <pre><code>코드 내용</code></pre>
</div>
```

### 콜아웃 박스
```html
<div class="callout-box">
  <h3>팁 제목</h3>
  <ul><li>항목</li></ul>
</div>
```

### 연습 박스
```html
<div class="exercise-box">
  <h3>연습 제목</h3>
  <p>설명</p>
</div>
```

## 레이아웃

### 반응형 브레이크포인트
| 이름 | 최대 너비 | 설명 |
|------|----------|------|
| Desktop | 1100px+ | 전체 레이아웃 |
| Tablet | 768px~1100px | 2열 → 1열 전환 |
| Mobile | ~768px | 모바일 네비게이션 |
| Small | ~480px | 소형 모바일 |

### 컨테이너
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

### 페이지 구조
```
┌──────────────────────────────┐
│          Navbar (fixed)       │  ← 글래스모피즘
├──────────────────────────────┤
│        Page Header            │  ← 그라데이션 배경
├──────────────────────────────┤
│                              │
│        Page Content           │  ← lesson-body (max-width: 800px)
│                              │
├──────────────────────────────┤
│          Footer               │  ← 다크 그라데이션
└──────────────────────────────┘
```

## 애니메이션

### AOS (Animate On Scroll)
- `data-aos="fade-up"` - 아래에서 위로 페이드인
- `data-aos="fade-down"` - 위에서 아래로
- `data-aos="fade-left"` / `fade-right`
- `data-aos="zoom-in"` - 확대 페이드인
- Duration: 0.6s, Easing: ease-out

### 트랜지션
- 버튼 호버: `transform: translateY(-2px)`, `box-shadow` 증가
- 카드 호버: `transform: translateY(-4px)`
- 네비게이션: `background`, `box-shadow` 스크롤 시 변경
- 테마 전환: `transition: 0.3s ease` 전역 적용
