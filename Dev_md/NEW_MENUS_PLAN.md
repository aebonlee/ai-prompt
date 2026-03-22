# 4개 신규 메뉴 추가 구현 문서

## 개요

AI 프롬프트 엔지니어링 학습 사이트에 **강의안 / 실습워크북 / 표준참고문서링크 / 커뮤니티** 4개 메뉴를 추가하였습니다.

## 구현 완료 항목

### 신규 파일 (31개)

| 디렉토리 | 파일 | 설명 |
|----------|------|------|
| `pages/lectures/` | `LecturesHome.jsx` | 강의안 허브 페이지 |
| `pages/lectures/` | `LectureWhatIsPrompt.jsx` | 강의안: 프롬프트 엔지니어링이란? |
| `pages/lectures/` | `LectureAiModels.jsx` | 강의안: AI 모델 이해하기 |
| `pages/lectures/` | `LectureStructure.jsx` | 강의안: 프롬프트 구조와 패턴 |
| `pages/lectures/` | `LectureFewShot.jsx` | 강의안: Few-shot 기법 |
| `pages/lectures/` | `LectureChainOfThought.jsx` | 강의안: Chain-of-Thought |
| `pages/lectures/` | `LectureRoleSystem.jsx` | 강의안: 역할 부여와 시스템 프롬프트 |
| `pages/lectures/` | `LectureWriting.jsx` | 강의안: 실전 글쓰기 |
| `pages/lectures/` | `LectureCoding.jsx` | 강의안: 실전 코딩 |
| `pages/lectures/` | `LectureAnalysis.jsx` | 강의안: 실전 데이터 분석 |
| `pages/lectures/` | `LectureTranslation.jsx` | 강의안: 실전 번역 |
| `pages/lectures/` | `LectureBusiness.jsx` | 강의안: 실전 비즈니스 |
| `pages/workbook/` | `WorkbookHome.jsx` | 워크북 허브 페이지 |
| `pages/workbook/` | `WorkbookWhatIsPrompt.jsx` | 워크북: 프롬프트 엔지니어링이란? |
| `pages/workbook/` | `WorkbookAiModels.jsx` | 워크북: AI 모델 이해하기 |
| `pages/workbook/` | `WorkbookStructure.jsx` | 워크북: 프롬프트 구조와 패턴 |
| `pages/workbook/` | `WorkbookFewShot.jsx` | 워크북: Few-shot 기법 |
| `pages/workbook/` | `WorkbookChainOfThought.jsx` | 워크북: Chain-of-Thought |
| `pages/workbook/` | `WorkbookRoleSystem.jsx` | 워크북: 역할 부여와 시스템 프롬프트 |
| `pages/workbook/` | `WorkbookWriting.jsx` | 워크북: 실전 글쓰기 |
| `pages/workbook/` | `WorkbookCoding.jsx` | 워크북: 실전 코딩 |
| `pages/workbook/` | `WorkbookAnalysis.jsx` | 워크북: 실전 데이터 분석 |
| `pages/workbook/` | `WorkbookTranslation.jsx` | 워크북: 실전 번역 |
| `pages/workbook/` | `WorkbookBusiness.jsx` | 워크북: 실전 비즈니스 |
| `pages/` | `References.jsx` | 표준 참고문서 링크 페이지 |
| `pages/community/` | `CommunityList.jsx` | 커뮤니티 게시판 목록 |
| `pages/community/` | `CommunityWrite.jsx` | 커뮤니티 글쓰기 (로그인 필요) |
| `pages/community/` | `CommunityView.jsx` | 커뮤니티 게시글 상세 + 댓글 |
| `services/` | `communityService.js` | Supabase posts/comments CRUD |
| `styles/` | `community.css` | 커뮤니티 전용 CSS |
| `Dev_md/` | `COMMUNITY_TABLES.sql` | Supabase 테이블 + RLS SQL 스크립트 |

### 수정 파일 (4개)

| 파일 | 변경 내용 |
|------|----------|
| `src/config/site.js` | menuItems에 강의안(12개), 실습워크북(12개), 참고문서(1개), 커뮤니티(2개) 메뉴 추가 |
| `src/App.jsx` | lazy import 27개 + Route 27개 추가 (강의안 12, 워크북 12, 참고문서 1, 커뮤니티 3) |
| `src/index.css` | `community.css` import 추가 |
| `src/styles/dark-mode.css` | 커뮤니티 컴포넌트 다크모드 스타일 추가 |

## 메뉴 구조

```
강의안 (드롭다운 12개: 홈 + 커리큘럼 11개)
  /lectures, /lectures/what-is-prompt, /lectures/ai-models, ...

실습워크북 (드롭다운 12개: 홈 + 커리큘럼 11개)
  /workbook, /workbook/what-is-prompt, /workbook/ai-models, ...

참고문서 (단일 링크)
  /references

커뮤니티 (드롭다운 2개 + 동적 라우트)
  /community (게시판), /community/write (글쓰기, ProtectedRoute)
  /community/:id (상세+댓글, 동적 라우트)
```

## Supabase 설정

커뮤니티 기능을 활성화하려면 `Dev_md/COMMUNITY_TABLES.sql` 스크립트를 Supabase SQL Editor에서 실행해야 합니다.

### 테이블 구조
- **posts**: id, title, content, category, author_id, author_name, created_at, updated_at
- **comments**: id, post_id, content, author_id, author_name, created_at
- **RLS**: 누구나 읽기, 인증 사용자 생성, 본인 글만 수정/삭제

## 페이지 구조 패턴

### 강의안 하위 페이지
```
SEOHead → page-header("강의안: 제목") → section.section.lesson-content
  └─ callout-box(학습 목표) → h2 섹션들(핵심 개념, 강의 내용)
     → callout-box(강의 요약) → exercise-box(복습 문제) → lesson-nav
```

### 워크북 하위 페이지
```
SEOHead → page-header("워크북: 제목") → section.section.lesson-content
  └─ callout-box(실습 목표) → exercise-box(빈칸 채우기)
     → prompt-example(프롬프트 작성 연습) → exercise-box(자가 점검) → lesson-nav
```

## 구현 일자
2026-03-23
