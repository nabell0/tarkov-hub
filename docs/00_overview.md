# 00. Overview — 지금까지 구현 흐름

이 문서는 “TARKOV HUB” 프로젝트에서 **지금까지 만든 기능이 어떤 흐름으로 동작하는지**를 한 번에 훑을 수 있게 정리합니다.

---

### 최신 구조(2026-04 기준) — 빠른 링크

- **Supabase·테이블:** `08_supabase_client_and_tables.md`
- **무기 상세 `/weapons/[weaponName]` + DB 스키마:** `09_weapon_detail_supabase.md`
- **모딩·탄약 카드 UI:** `10_weapon_mods_ammo_ui.md`
- **SQL 시드·`image_url` UPDATE 요약:** `11_sql_reference_mods_ammo.md`
- **이전 일자 작업 로그:** `07_2026-04-01_work_log.md`

무기 상세는 **정적 `m4a1/page.tsx`가 아니라** 다이나믹 라우트 + Supabase `weapons` / `weapon_mods` / `weapon_ammo` 조합으로 동작합니다.

---

### 현재 만들어진 화면(라우트)

- **`/`**: 메인 페이지
  - 다크(건메탈) + 올리브 포인트의 타르코프 스타일 UI
  - 상단 메뉴바: `TARKOV HUB` 로고 + (무기도감/탄약정보/퀘스트)
  - 배너: `"Welcome to Tarkov, Escaper."` + 검색 UI
  - 인기 무기 카드 2개: `M4A1`, `MP7A1`
  - **M4A1 카드 “상세 보기”** 클릭 → **`/weapons/m4a1`** 이동

- **`/weapons/m4a1`**: M4A1 무기 상세 페이지
  - 기본 스탯 섹션 + 추천 모딩(Short/Long range)
  - 이미지 2장(외부 URL) 표시
    - 기본 스탯 섹션 상단: 큰 이미지
    - Short Range 빌드 카드 하단: 작은 이미지

---

### 핵심 파일(어디에 무엇이 있는지)

- `app/page.tsx`: 메인 페이지 UI + `/weapons/m4a1`로 가는 링크
- `app/weapons/m4a1/page.tsx`: M4A1 상세 페이지 UI + 외부 이미지 표시
- `app/layout.tsx`: 전체 페이지 공통 레이아웃(폰트/메타/바디)
- `app/globals.css`: Tailwind 로드 + Tarkov 테마 CSS 변수

---

### 다음 확장 방향(추천)

- `MP7A1`도 상세 페이지 만들기: `app/weapons/mp7a1/page.tsx`
- “검색창”에 실제 동작 붙이기(무기/탄약/퀘스트 데이터 필터링)
- UI 컴포넌트 분리(`Tag`, 카드, 헤더 등)로 재사용성 올리기

