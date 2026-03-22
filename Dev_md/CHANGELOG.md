# AI Prompt - 변경 이력 (Changelog)

모든 주요 변경 사항을 기록합니다.
형식: [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)

---

## [1.6.0] - 2026-03-23

### Changed

- 메인 페이지 이모지를 Font Awesome 6.5.1 아이콘으로 교체 (커리큘럼/특징/대상 17개 아이콘, 주컬러 적용)
- 초기 컬러셋을 Purple → Blue로 변경
- 컬러 피커 아이콘을 팔레트(fa-palette)로 변경
- 테마 전환에서 시스템모드(auto) 제거, 라이트/다크만 유지
- 테마 토글 아이콘을 Font Awesome sun/moon으로 교체
- 파비콘을 블루 SVG로 변경
- OG 이미지를 블루 그라데이션 테마로 재생성

---

## [1.5.0] - 2026-03-23

### Added

- 즐겨찾기 페이지 (`/favorites`) - GenAI 추천 사이트 모음
- 9개 카테고리, 약 60개 사이트 (챗봇, 이미지생성, 동영상/오디오, 코딩, 문서/생산성, 검색/리서치, 디자인, 학습/프롬프트, 비즈니스/자동화)
- 상단 메뉴에 "즐겨찾기" 추가 (참고문서 다음 위치)

---

## [1.4.1] - 2026-03-23

### Fixed

- 커뮤니티 글쓰기 버튼 다크모드에서 글자색이 안보이는 문제 수정

---

## [1.4.0] - 2026-03-23

### Added

- PE 개론에 ChatGPT, Claude, Gemini 3개 AI 모델 상세 페이지 추가
- site.js 메뉴 및 App.jsx 라우트 등록

---

## [1.3.1] - 2026-03-23

### Added

- 로그인에 Google/Kakao OAuth 적용 (Supabase OAuth Provider)

### Changed

- 플레이그라운드 입력박스 자동확장 (textarea auto-resize)

---

## [1.3.0] - 2026-03-23

### Added

- 실습워크북을 동적 게시판으로 변환 (Supabase CRUD, 강의안과 동일 패턴)
- 사이트 평가 보고서 문서 추가 (`Dev_md/SITE_EVALUATION_REPORT.md`)

### Changed

- Supabase 테이블에 `ap_` 접두사 통일 적용 (ap_lectures, ap_workbooks, ap_community)
- 강의안을 동적 게시판 형태로 변환 (Supabase CRUD 기반)
- 강의안/실습워크북/참고문서/커뮤니티 4개 메뉴 추가

---

## [1.2.1] - 2026-03-23

### Changed

- 프롬프트 플레이그라운드 입력 박스 세로 영역 확대 (200px → 360px)

---

## [1.2.0] - 2026-03-23

### Fixed

- intro/learn/practice 11개 레슨 페이지에 `.section` 클래스 추가로 상단 여백(4rem) 적용

---

## [1.1.0] - 2026-03-23

### Added

- AI활용 Tip! 메뉴 추가 (koreatech 프로젝트에서 이전)
- AI 종류별 4개 페이지: ChatGPT, Claude, Gemini, Copilot
- 기능별 4개 페이지: 프롬프트 작성법, AI 코딩, AI 문서 작성, AI 학습 활용
- AI Tips 허브 페이지 (`/ai-tips`)
- 네비게이션 바에 AI활용 Tip! 드롭다운 메뉴

### Fixed

- OG 이미지 404 오류 수정 (Pillow로 1200x630 이미지 생성)
- favicon.ico 생성 및 index.html 반영
- 페이지 콘텐츠 미표시 수정 (`data-aos` 153곳 제거, AOS CSS/JS 완전 삭제)

### Removed

- AOS 스크롤 애니메이션 시스템 완전 제거 (animations.css, useAos.js, data-aos 속성)

---

## [1.0.1] - 2026-03-23

### Fixed

- OG 메타 태그 URL을 커스텀 도메인(`ai-prompt.dreamitbiz.com`)으로 수정
- Home 커리큘럼에 누락된 STEP 11 비즈니스 항목 추가
- Supabase 미설정 시 빈 페이지 크래시 수정 (null guard)
- AuthContext 모든 인증 함수에 supabase null 안전 처리 추가

### Changed

- GitHub Pages 배포를 GitHub Actions → gh-pages 브랜치 방식으로 변경
- peaceiris/actions-gh-pages@v4 도입
- `npm run deploy` 스크립트 추가 (로컬 수동 배포용)

---

## [1.0.0] - 2026-03-23

### Added

- React 19 + Vite 7 기반 프로젝트 초기 구축
- Supabase 인증 시스템 (이메일, GitHub, Google OAuth)
- 테마 시스템: 다크/라이트/자동 모드 + 5가지 색상 테마 (Purple, Blue, Green, Rose, Orange)
- 글래스모피즘 반응형 네비게이션 바
- PE 개론 페이지 2개: 프롬프트란?, AI 모델 이해
- 학습 페이지 4개: 프롬프트 구조, Few-shot, Chain-of-Thought, 역할 부여
- 실전 활용 페이지 5개: 글쓰기, 코딩, 데이터 분석, 번역, 비즈니스
- 인터랙티브 프롬프트 플레이그라운드 (5개 템플릿 + 점수 분석)
- 코드 블록 원클릭 복사 기능 (useCodeCopy 훅)
- SEOHead 컴포넌트 (동적 OG/메타 태그)
- Open Graph 메타 태그 (카카오 공유 지원)
- 커스텀 도메인 설정: ai-prompt.dreamitbiz.com
- GitHub Actions CI/CD 자동 배포 (gh-pages 브랜치)
- 프로젝트 문서 8개 (Dev_md 폴더)

### Fixed

- vite.config.js ESM 환경에서 `require('fs')` → `import fs from 'node:fs'` 수정
