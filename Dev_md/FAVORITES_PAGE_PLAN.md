# 즐겨찾기 페이지 추가 - GenAI 추천 사이트 모음

## 구현일: 2026-03-23

## Context

상단 메뉴에 "즐겨찾기" 페이지를 추가하여 GenAI 관련 모든 추천 사이트를 카테고리별로 정리한다. 모든 외부 링크는 새 탭(`target="_blank"`)으로 열린다. 기존 `References.jsx` 패턴(카테고리별 `lesson-table`)을 그대로 따른다.

---

## 파일 변경

| 파일 | 작업 | 설명 |
|------|------|------|
| `src/pages/Favorites.jsx` | **신규** | 즐겨찾기 페이지 (카테고리별 링크 테이블) |
| `src/config/site.js` | 수정 | menuItems에 `즐겨찾기` 메뉴 추가 |
| `src/App.jsx` | 수정 | lazy import + Route `/favorites` 추가 |

**CSS 신규 작성 불필요** — 기존 `lesson-table`, `callout-box`, `page-header` 클래스 재사용.

---

## 즐겨찾기 카테고리 (9개, ~60개 사이트)

1. AI 챗봇 / 어시스턴트 (7개)
2. AI 이미지 생성 (7개)
3. AI 동영상 / 오디오 (6개)
4. AI 코딩 도구 (6개)
5. AI 문서 / 생산성 (7개)
6. AI 검색 / 리서치 (5개)
7. AI 디자인 / 크리에이티브 (5개)
8. AI 학습 / 프롬프트 리소스 (8개)
9. AI 비즈니스 / 자동화 (5개)

---

## 페이지 구조 (References.jsx 패턴 동일)

```
SEOHead(title="즐겨찾기", description="...")
→ page-header("즐겨찾기", "GenAI 추천 사이트 모음")
→ section.section.lesson-content
  → container > lesson-body
    → callout-box (안내 문구: 모든 링크는 새 탭에서 열립니다)
    → 카테고리별 반복:
      → h2 (카테고리 제목)
      → table.lesson-table
        → thead: 사이트명 / 설명 / 바로가기
        → tbody: name, desc, <a href target="_blank">방문하기 ↗</a>
    → callout-box (업데이트 안내)
```

---

## 메뉴 위치

`site.js` menuItems에서 `참고문서` 다음에 배치:
```javascript
{ label: '즐겨찾기', path: '/favorites' }
```

---

## 검증 결과

- `npm run build` 성공
- `/favorites` 라우트 등록 완료
- 상단 메뉴에 "즐겨찾기" 표시
- 모든 링크가 새 탭으로 열림 (`target="_blank" rel="noopener noreferrer"`)
- 다크모드 호환 (기존 lesson-table 재사용)
