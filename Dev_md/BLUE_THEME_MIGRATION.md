# 블루 테마 마이그레이션 가이드

## 구현일: 2026-03-23

## 변경 사항 요약

기존 Purple 기본 테마에서 Blue 기본 테마로 전환하고, 이모지를 Font Awesome 아이콘으로 교체했습니다.

---

## 1. Font Awesome 도입

### CDN 추가 (`index.html`)

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

### 메인 페이지 아이콘 매핑 (`Home.jsx`)

| 영역 | 기존 (이모지) | 변경 (Font Awesome) |
|------|-------------|-------------------|
| STEP 01 | 💡 | `fa-solid fa-lightbulb` |
| STEP 02 | 🤖 | `fa-solid fa-robot` |
| STEP 03 | 🏗️ | `fa-solid fa-cubes` |
| STEP 04 | 🎯 | `fa-solid fa-bullseye` |
| STEP 05 | 🧠 | `fa-solid fa-brain` |
| STEP 06 | 🎭 | `fa-solid fa-masks-theater` |
| STEP 07 | ✍️ | `fa-solid fa-pen-nib` |
| STEP 08 | 💻 | `fa-solid fa-code` |
| STEP 09 | 📊 | `fa-solid fa-chart-bar` |
| STEP 10 | 🌐 | `fa-solid fa-globe` |
| STEP 11 | 💼 | `fa-solid fa-briefcase` |
| 실습 중심 | 🎯 | `fa-solid fa-bullseye` |
| AI 모델 대응 | 🔄 | `fa-solid fa-arrows-rotate` |
| 업무 템플릿 | 📋 | `fa-solid fa-clipboard-list` |
| 입문자 | 👨‍💼 | `fa-solid fa-user-tie` |
| 개발자 | 👩‍💻 | `fa-solid fa-laptop-code` |
| 크리에이터 | 📝 | `fa-solid fa-pen-to-square` |

### CSS 아이콘 색상 (`site.css`)

```css
.curriculum-icon { color: var(--primary); }
.feature-icon { color: var(--primary); }
.target-icon { color: var(--primary); }
```

---

## 2. 기본 컬러 테마 변경

### ThemeContext.jsx

```javascript
// 변경 전
const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('color-theme') || 'purple')

// 변경 후
const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('color-theme') || 'blue')
```

> 기존 사용자는 localStorage에 저장된 값이 우선 적용되므로 영향 없음.

---

## 3. 테마 전환 시스템모드 제거

### ThemeContext.jsx

- `auto` 모드 삭제 (시간 기반 자동 전환 로직 제거)
- `light` ↔ `dark` 토글만 유지
- 기본값: `light`

### Navbar.jsx

- SVG 아이콘 → Font Awesome `fa-sun` / `fa-moon` 교체
- `auto-icon` SVG 제거

### navbar.css

- `.auto-icon` 스타일 규칙 제거
- `.theme-toggle[data-mode="auto"]` 규칙 제거

---

## 4. 컬러 피커 아이콘

### Navbar.jsx

```jsx
// 변경 전: SVG circle 아이콘
<svg>...</svg>

// 변경 후: Font Awesome palette
<i className="fa-solid fa-palette" style={{ fontSize: '18px' }} />
```

---

## 5. 파비콘

### 새 파일: `public/favicon.svg`

- 블루(#0046C8) 배경 + 흰색 "AI" 텍스트
- SVG 우선, ICO 폴백

### index.html

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
<link rel="alternate icon" href="/favicon.ico" />
```

---

## 6. OG 이미지

### 생성 스크립트: `scripts/generate-og-image.mjs`

- sharp 패키지 사용 (devDependency)
- 블루 그라데이션 배경 (#001a4d → #0046C8)
- 1200x630px PNG 출력

```bash
node scripts/generate-og-image.mjs
```

---

## 영향받는 파일

| 파일 | 변경 내용 |
|------|----------|
| `index.html` | Font Awesome CDN, favicon SVG |
| `src/pages/Home.jsx` | 이모지 → FA 아이콘 |
| `src/styles/site.css` | 아이콘 색상 `var(--primary)` |
| `src/styles/navbar.css` | auto 모드 스타일 제거 |
| `src/components/Navbar.jsx` | 테마토글/컬러피커 FA 아이콘 |
| `src/contexts/ThemeContext.jsx` | 기본 blue, auto 모드 제거 |
| `public/favicon.svg` | 신규 블루 파비콘 |
| `public/og-image.png` | 블루 테마 OG 이미지 |
| `scripts/generate-og-image.mjs` | OG 이미지 생성 스크립트 |
