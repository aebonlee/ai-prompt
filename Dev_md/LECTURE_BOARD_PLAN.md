# 강의안 동적 게시판 변환 구현 문서

## 개요

기존 정적 카드 그리드 형태의 강의안 페이지를 **koreatech 프로젝트의 강의안 등록 게시판 패턴**을 적용하여 Supabase 기반 동적 게시판으로 변환하였습니다.

## 변경 사항

### 신규 파일 (5개)

| 디렉토리 | 파일 | 설명 |
|----------|------|------|
| `Dev_md/` | `LECTURES_TABLES.sql` | Supabase lectures 테이블 + RLS + 트리거 SQL 스크립트 |
| `src/services/` | `lectureService.js` | 강의안 CRUD 서비스 (getLectures, getLecture, createLecture, updateLecture, deleteLecture, incrementViews) |
| `src/styles/` | `lectures.css` | 강의안 게시판 전용 CSS (테이블, 폼, 상세, 반응형) |
| `src/pages/lectures/` | `LectureWrite.jsx` | 강의안 등록/수정 폼 페이지 (로그인 필요) |
| `src/pages/lectures/` | `LectureDetail.jsx` | 강의안 상세 보기 페이지 (주차 배지, 내용, 파일 다운로드) |

### 수정 파일 (5개)

| 파일 | 변경 내용 |
|------|----------|
| `src/pages/lectures/LecturesHome.jsx` | 정적 카드 그리드 → Supabase 기반 테이블 게시판으로 전면 교체 |
| `src/App.jsx` | LectureWriteForm, LectureDetailView lazy import + 3개 Route 추가 (/lectures/write, /lectures/edit/:id, /lectures/view/:id) |
| `src/config/site.js` | 강의안 메뉴를 12개 정적 링크에서 '강의안 목록' + '강의안 등록' 2개로 간소화 |
| `src/index.css` | lectures.css import 추가 |
| `src/styles/dark-mode.css` | 강의안 게시판 다크모드 스타일 추가 |

## Supabase 테이블 설계

### lectures 테이블

| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | 자동 생성 |
| week_number | integer | 주차 번호 |
| title | text | 강의 제목 |
| content | text | 강의 내용 |
| file_url | text | 첨부 파일 URL (/pdf/파일명 또는 전체 URL) |
| is_published | boolean | 공개 여부 (기본: true) |
| views | integer | 조회수 (기본: 0) |
| author_id | uuid (FK) | 작성자 ID → auth.users |
| author_name | text | 작성자 이름 |
| created_at | timestamptz | 생성일 |
| updated_at | timestamptz | 수정일 (트리거 자동 갱신) |

### RLS 정책
- 누구나 공개된 강의안 읽기 (is_published = true)
- 인증 사용자 강의안 생성
- 본인 강의안만 수정/삭제

## 라우트 구조

```
/lectures                → LecturesHome (게시판 목록, 테이블 형태)
/lectures/write          → LectureWrite (등록 폼, ProtectedRoute)
/lectures/edit/:id       → LectureWrite (수정 폼, ProtectedRoute)
/lectures/view/:id       → LectureDetail (상세 보기)
/lectures/what-is-prompt → LectureWhatIsPrompt (정적 학습자료, 유지)
/lectures/ai-models      → LectureAiModels (정적 학습자료, 유지)
... (11개 정적 학습자료 페이지 모두 유지)
```

## 주요 기능

### 게시판 목록 (LecturesHome)
- 주차(Week) 배지가 있는 테이블 형태
- 행 클릭 시 확장/축소 (내용 미리보기)
- 파일 보기(새 탭) / 다운로드 버튼
- 주차에 해당하는 정적 학습자료 링크 배지 표시
- 본인 작성 글에 수정 버튼 표시
- 로그인 시 '강의안 등록' 버튼 표시

### 등록/수정 폼 (LectureWrite)
- 주차 번호 + 제목 (1행 배치)
- 내용 (textarea 12행)
- 첨부 파일 URL (/pdf/ 접두사 자동 추가)
- 공개 여부 체크박스
- 등록/수정/취소 버튼

### 상세 보기 (LectureDetail)
- 주차 배지, 제목, 메타정보 (작성자, 날짜, 조회수)
- 내용 (줄바꿈 보존 렌더링)
- 파일 보기/다운로드 (로그인 필요)
- 목록으로 / 수정 / 삭제 버튼 (본인 글만)

## 정적 학습자료 페이지 (유지)

기존 11개 정적 강의안 페이지는 그대로 유지되며, 게시판의 주차별 행에서 해당 주차에 맞는 학습자료 링크가 배지로 표시됩니다.

| 주차 | 정적 페이지 경로 | 제목 |
|------|------------------|------|
| Week 1 | /lectures/what-is-prompt | 프롬프트 엔지니어링이란? |
| Week 2 | /lectures/ai-models | AI 모델 이해하기 |
| Week 3 | /lectures/structure | 프롬프트 구조와 패턴 |
| Week 4 | /lectures/few-shot | Few-shot 기법 |
| Week 5 | /lectures/chain-of-thought | Chain-of-Thought |
| Week 6 | /lectures/role-system | 역할 부여와 시스템 프롬프트 |
| Week 7 | /lectures/writing | 실전: 글쓰기 |
| Week 8 | /lectures/coding | 실전: 코딩 |
| Week 9 | /lectures/analysis | 실전: 데이터 분석 |
| Week 10 | /lectures/translation | 실전: 번역 |
| Week 11 | /lectures/business | 실전: 비즈니스 |

## 활성화 방법

1. Supabase SQL Editor에서 `Dev_md/LECTURES_TABLES.sql` 실행
2. 사이트에 로그인 후 '강의안 등록'에서 강의안 작성

## 구현 일자
2026-03-23
