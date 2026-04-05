# 11. SQL 참고 — `weapons` / `weapon_mods` / `weapon_ammo`

## 목적

Supabase **SQL Editor**에서 실행한 시드·보강 쿼리와, `src/data/weapons.ts`에서 추출한 데이터 매핑을 문서화합니다. (실제 전문 SQL은 채팅/메모에 붙여둔 버전을 그대로 사용하면 됩니다.)

## `weapons`

- `TRUNCATE` 후 `INSERT`로 `m4a1`, `mp7a1`, `asval` 등 시드
- 주요 컬럼: `id`, `name`, `display_name`, `description`, `image_url`, `base_rpm`, `recoil`, `ttk`, `type`, `calibers`

## `weapon_mods`

- 컬럼: `weapon_id`, `part_name`, `description`, `image_url`
- `weapons.ts`의 각 `build`를 1행으로 매핑:
  - `part_name` ← `build.title`
  - `description` ← `build.desc` + 부품 목록 텍스트
  - `image_url` ← `build.image?.src` (없으면 `NULL`)

## `weapon_ammo`

- 컬럼: `weapon_id`, `ammo_name`, `damage`, `penetration`, `image_url`
- `recommendedAmmo` 항목당 1행
- TS 타입에 탄 이미지가 없어 초기 시드는 `image_url`을 `NULL`로 둔 뒤, **UPDATE**로 위키 CDN URL 채움

## `image_url` 보강(UPDATE)

- 모딩: NULL이던 행(예: 가성비 빌드, 30발 범용 모딩)에 타르코프 위키 정적 이미지 URL 할당
- 탄약: `M855A1`, `M856A1`, `AP SX`, `FMJ SX`, `SP-6`, `BP` 등 위키 탄약 페이지 썸네일 URL 사용
- 조건: `WHERE weapon_id = '…' AND part_name = '…'` / `ammo_name = '…'` 로 안전하게 갱신

## 주의

- `TRUNCATE` 시 다른 테이블 FK가 있으면 `CASCADE` 또는 순서 조정 필요
- 위키 URL은 정책·차단에 따라 `<img>`로는 동작하지만 장기적으로는 **Storage 업로드** 권장
