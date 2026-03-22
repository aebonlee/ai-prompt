# AI Prompt - 변경 이력 (Changelog)

모든 주요 변경 사항을 기록합니다.
형식: [Keep a Changelog](https://keepachangelog.com/ko/1.0.0/)

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
- GitHub Actions CI/CD 자동 배포
- 프로젝트 문서: PROJECT_PLAN, ARCHITECTURE, DEPLOYMENT, DESIGN_SYSTEM, CURRICULUM_GUIDE, DEVLOG

### Fixed
- vite.config.js ESM 환경에서 `require('fs')` → `import fs from 'node:fs'` 수정
