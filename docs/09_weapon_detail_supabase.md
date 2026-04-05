# 09. 무기 상세 페이지(Supabase 연동)

## 파일

- `app/weapons/[weaponName]/page.tsx`

## 라우팅·식별자

- URL: `/weapons/{weaponName}` (예: `m4a1`, `mp7a1`, `asval`)
- **Next.js 최신 `params`:** `params`는 `Promise`로 전달되므로 `const { weaponName } = await params;` 후 사용
- DB `id`와 맞추기 위해 **`weaponName.toLowerCase()`** 로 정규화한 뒤 `weapons.id`에 `eq` 조건으로 조회

## 무기 본문 조회

```ts
const { data: weaponRaw, error } = await supabase
  .from("weapons")
  .select("*")
  .eq("id", weaponId)
  .single();
```

- 실패 시 서버 로그: `console.error("DB 조회 에러:", error)`
- 행이 없거나 에러면 「무기를 찾을 수 없습니다」 UI

## 스키마에 맞춘 UI 필드

상세 상단·스탯 카드는 DB 컬럼 기준:

- `image_url` — 히어로 이미지(`aspect-video` + `object-contain`). 없으면 그라데이션만
- `base_rpm`, `recoil`, `ttk`, `type`, `calibers` — 스탯 카드
- 제목: `name` → `display_name` → `id` 순

## 이미지 렌더링

- 외부 도메인 `next/image` 제약을 피하기 위해 **순수 `<img>`** 사용
- `weapon.image_url`만 사용(스네이크 케이스). 로컬 변수로 `trim` 후 `src`에 전달

## 연관 데이터

모딩·탄약은 `10_weapon_mods_ammo_ui.md` 참고.
