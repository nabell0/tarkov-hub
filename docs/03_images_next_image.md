# 03. 이미지 — `next/image` (외부 URL 포함)

Next.js의 `next/image`는 이미지 로딩/최적화에 유리한 컴포넌트입니다.

---

### 1) 기본 사용법 (필수: width/height)

`Image`는 **레이아웃 안정성**을 위해 `width`/`height`를 지정하는 것이 기본입니다.

```tsx
import Image from "next/image";

<Image
  src="https://example.com/image.png"
  alt="설명"
  width={800}
  height={450}
/>
```

---

### 2) 외부 이미지 URL이 “안 깨지게” 하는 방법

외부 도메인을 쓰면 환경에 따라 최적화 파이프라인이 막히거나 설정이 필요할 수 있습니다.  
가장 간단하게 “깨지지 않게” 하려면 `unoptimized`를 붙입니다.

```tsx
<Image
  src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/29/M4a1.png/revision/latest?cb=20231017102422"
  alt="M4A1 기본 외형"
  width={1597}
  height={573}
  unoptimized
/>
```

---

### 3) (선택) 최적화를 제대로 켜고 싶다면: `next.config.ts`

`unoptimized` 없이도 외부 이미지를 최적화하려면,
`next.config.ts`에 도메인 허용 설정을 추가합니다.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
        pathname: "/escapefromtarkov_gamepedia/**",
      },
    ],
  },
};

export default nextConfig;
```

그 다음 `Image`에서 `unoptimized`를 제거해도 됩니다.

---

### 4) 이 프로젝트에서 사용 중인 이미지

`app/weapons/m4a1/page.tsx`에서 타르코프 위키(Fandom) CDN의 외부 이미지 URL을 사용 중입니다.

**주의**
- 외부 이미지 URL은 원본 사이트 정책/변경에 따라 깨질 수 있습니다.
- 안정성이 가장 중요하면, 최종적으로는 `public/`에 저장하거나(로컬) 본인 CDN을 쓰는 것이 안전합니다.

