# 04. 스타일 — Tailwind v4 + Tarkov 테마

이 프로젝트는 Tailwind v4 템플릿 기반이며, “타르코프 분위기”를 만들기 위해
Tailwind 클래스에 **커스텀 CSS 변수 팔레트**를 섞어서 사용합니다.

---

### 1) Tailwind 로딩 위치

`app/globals.css`에 아래가 있어야 Tailwind가 적용됩니다.

```css
@import "tailwindcss";
```

---

### 2) Tarkov 컬러 팔레트(CSS 변수)

같은 파일의 `:root`에서 건메탈/올리브 톤 변수를 정의했습니다.

- `--background`, `--foreground`: 전체 바탕/글자
- `--hub-panel`, `--hub-border`: 카드/패널 배경, 테두리
- `--hub-olive`, `--hub-accent`: 포인트(올리브)

---

### 3) 실제 컴포넌트에서 쓰는 방식

Tailwind의 임의 값 문법으로 CSS 변수를 섞습니다.

```tsx
<div className="border border-[color:var(--hub-border)] bg-[color:var(--hub-panel)]" />
```

이렇게 하면 “테마는 변수로 통일”하면서도, 레이아웃/간격/타이포는 Tailwind로 빠르게 잡을 수 있습니다.

