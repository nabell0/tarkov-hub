# 02. 페이지 이동 — `next/link`의 `Link`

Next.js에서는 일반적으로 `<a href="...">` 대신 `next/link`의 `Link`를 사용합니다.

---

### 왜 `Link`를 쓰나요?

- **페이지 전환이 더 빠름**: 필요한 리소스를 효율적으로 가져오고, 클라이언트 내비게이션을 사용
- **UX가 좋아짐**: 전체 새로고침 느낌이 줄어듭니다

---

### 사용 예시

```tsx
import Link from "next/link";

export default function Example() {
  return <Link href="/weapons/m4a1">M4A1 상세로</Link>;
}
```

---

### 이 프로젝트에서 적용된 곳

- 메인 페이지(`app/page.tsx`)의 **M4A1 카드 “상세 보기”** 버튼이
  `href="/weapons/m4a1"`로 이동하도록 되어 있습니다.

