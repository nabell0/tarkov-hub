# 10. 추천 모딩·추천 탄약 UI (`weapon_mods` / `weapon_ammo`)

## 파일

- `app/weapons/[weaponName]/page.tsx`

## 데이터 조회

무기 조회 성공 후 **`weapon.id`** 기준으로 병렬 fetch:

```ts
const [{ data: modsRaw, error: modsError }, { data: ammoRaw, error: ammoError }] =
  await Promise.all([
    supabase.from("weapon_mods").select("*").eq("weapon_id", weapon.id),
    supabase.from("weapon_ammo").select("*").eq("weapon_id", weapon.id),
  ]);
```

- 에러 시: `console.error("weapon_mods 조회 에러:", …)`, `weapon_ammo` 동일

## 테이블 ↔ 화면 매핑

### `weapon_mods`

| DB 컬럼 | 화면 |
|---------|------|
| `part_name` | 카드 제목 (`title` 등 별칭 키도 헬퍼에서 시도) |
| `description` | 본문 설명 + (선택) `parts` JSON 파싱 시 부품 리스트 |
| `image_url` | 카드 상단 이미지 |

- `parts`가 JSON 배열 `{ label, value }` 형태면 리스트로 렌더
- 이미지 없음: 회색 플레이스홀더 + 「이미지 없음」
- 행 없음: 「등록된 모딩 데이터가 없습니다.」

### `weapon_ammo`

| DB 컬럼 | 화면 |
|---------|------|
| `ammo_name` | 탄약명 (구경은 무기 `calibers` 포맷 문자열을 앞에 붙일 수 있음) |
| `role` 등 | `pickString`으로 별칭 지원 시 배지 |
| `penetration` / `pen` | 관통 수치 |
| `damage` / `dmg` | 데미지 수치 |
| `image_url` | 카드 상단 이미지 |

- 행 없음: 「등록된 탄약 데이터가 없습니다.」

## 이미지

- **모든 카드 이미지는 `<img>`** (`@next/next/no-img-element` 해당 줄만 disable)
- 외부 URL 핫링크 이슈 시 Supabase Storage 등 자체 호스팅으로 교체 가능

## 로컬 시드 데이터 참고

- `src/data/weapons.ts` — 과거 정적 빌드/탄약 예시(현재 상세는 DB 우선)
