# 08. Supabase 클라이언트와 테이블 개요

## 목적

무기 도감 상세·목록에서 **PostgreSQL(Supabase)** 데이터를 읽기 위한 연결 방식과, 사용 중인 테이블 역할을 정리합니다.

## 클라이언트

- **파일:** `src/lib/supabase.ts`
- **역할:** `@supabase/supabase-js`의 `createClient`로 브라우저/서버에서 동일하게 사용할 수 있는 클라이언트 export
- **환경 변수:** `.env.local`
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

> RLS(행 수준 보안)가 켜져 있으면 anon 키 정책에 맞게 `SELECT`만 허용되는지 확인합니다.

## 테이블 역할

| 테이블 | 용도 |
|--------|------|
| `public.weapons` | 무기 마스터: `id`, 이름, 설명, `image_url`, 스탯(`base_rpm`, `recoil`, `ttk`, `type`, `calibers` 등) |
| `public.weapon_mods` | 무기별 추천 모딩: `weapon_id` → `weapons.id`, `part_name`, `description`, `image_url` |
| `public.weapon_ammo` | 무기별 추천 탄약: `weapon_id`, `ammo_name`, `damage`, `penetration`, `image_url` |

## 관련 라우트

- 상세: `app/weapons/[weaponName]/page.tsx` — `weapons` 1건 + `weapon_mods` / `weapon_ammo` 다건 조회
- 목록: `app/weapons/page.tsx` — `weaponsData`(로컬) 또는 추후 Supabase 목록으로 전환 가능

## 다음 문서

- `09_weapon_detail_supabase.md` — 상세 페이지 쿼리·`params` 처리
- `10_weapon_mods_ammo_ui.md` — 모딩/탄약 카드 UI·`<img>` 사용
- `11_sql_reference_mods_ammo.md` — 시드·`image_url` 보강용 SQL 요약
