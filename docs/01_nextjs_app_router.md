# 01. Next.js App Router — “폴더 구조 = URL”

이 프로젝트는 Next.js의 **App Router** 방식을 사용합니다.  
App Router의 핵심은 **`app/` 폴더의 구조가 곧 URL 경로가 된다**는 점입니다.

---

### 1) `page.tsx`가 “페이지”다

아래처럼 `page.tsx`가 있는 위치가 그대로 URL이 됩니다.

- `app/page.tsx` → `/`
- `app/weapons/m4a1/page.tsx` → `/weapons/m4a1`

즉, 새 페이지를 만들고 싶으면 보통 다음처럼 폴더를 추가합니다.

```txt
app/
  weapons/
    mp7a1/
      page.tsx   ← 만들면 /weapons/mp7a1 생김
```

---

### 2) `layout.tsx`는 “공통 틀”

`app/layout.tsx`는 모든 페이지를 감싸는 공통 레이아웃입니다.

- HTML `<html>`, `<body>`의 기본 클래스/폰트/전역 스타일을 적용
- `children`으로 각 페이지를 렌더링

---

### 3) “서버 컴포넌트” 기본값

App Router에서 `page.tsx`는 기본이 **Server Component**(서버에서 렌더)입니다.

- 단순 UI 출력/정적 마크업은 그대로 작성해도 문제 없습니다.
- 브라우저 상태(state), 이벤트 핸들러, `useEffect` 같은 클라이언트 기능이 필요하면
  파일 상단에 `"use client"`를 붙여 **Client Component**로 바꿉니다.

현재 페이지들은 주로 **정적 UI** 중심이라, Server Component로도 충분합니다.

