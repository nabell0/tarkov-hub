# 06. 페이지 — M4A1 상세(`/weapons/m4a1`) 구성

M4A1 상세 페이지는 `app/weapons/m4a1/page.tsx`에 있습니다.

---

### 화면 구성

- **상단 헤더**
  - 홈으로 돌아가는 링크(Back to Home)

- **타이틀/태그**
  - `Colt M4A1`, `Assault Rifle`, `5.56x45 NATO`

- **기본 스탯**
  - 섹션 상단에 M4A1 “기본 외형” 큰 이미지
  - 아래에 스탯 카드(Ergo/Recoil 등)

- **추천 모딩 예시**
  - Short Range / Long Range 빌드 카드
  - Short Range 빌드 카드 하단에 “모딩된 M4A1” 작은 이미지

---

### 이미지 구현 포인트

현재는 외부 URL을 사용하고, 안정적으로 렌더되게 `next/image`의 `unoptimized`를 적용했습니다.

- 외부 이미지 출처: 타르코프 위키(Fandom) 이미지 CDN (`static.wikia.nocookie.net`)
- 최적화까지 켜고 싶다면 `docs/03_images_next_image.md`의 `next.config.ts` 설정을 참고하세요.

