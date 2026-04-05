import Link from "next/link";
import { supabase } from "@/src/lib/supabase";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(109,127,42,0.10)] px-2 py-0.5 text-xs font-medium text-[color:var(--foreground)]">
      {children}
    </span>
  );
}

type WeaponRow = {
  id: string;
  name?: string | null;
  display_name?: string | null;
  description?: string | null;
  image_url?: string | null;
  base_rpm?: number | string | null;
  recoil?: string | null;
  ttk?: string | null;
  type?: string | null;
  calibers?: string | string[] | null;
};

type DbRow = Record<string, unknown>;

function formatStatValue(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === "") return "—";
  return String(value);
}

function formatCalibers(calibers: WeaponRow["calibers"]): string {
  if (calibers == null) return "—";
  if (Array.isArray(calibers)) return calibers.join(", ");
  if (typeof calibers === "string") {
    try {
      const parsed = JSON.parse(calibers) as unknown;
      if (Array.isArray(parsed)) {
        return parsed.map(String).join(", ");
      }
    } catch {
      /* plain string */
    }
    return calibers;
  }
  return String(calibers);
}

function pickImageUrl(row: DbRow): string | null {
  const v = row.image_url;
  return typeof v === "string" && v.trim().length > 0 ? v.trim() : null;
}

function pickString(row: DbRow, keys: string[]): string | null {
  for (const key of keys) {
    const v = row[key];
    if (typeof v === "string" && v.trim().length > 0) return v.trim();
  }
  return null;
}

function parseModParts(row: DbRow): { label: string; value: string }[] {
  const raw = row.parts;
  if (raw == null) return [];
  let parsed: unknown = raw;
  if (typeof raw === "string") {
    try {
      parsed = JSON.parse(raw);
    } catch {
      return [];
    }
  }
  if (!Array.isArray(parsed)) return [];
  return parsed
    .map((item) => {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        const o = item as Record<string, unknown>;
        const label = o.label ?? o.name ?? o.key;
        const value = o.value ?? o.part ?? o.item;
        if (typeof label === "string" && typeof value === "string") {
          return { label, value };
        }
      }
      return null;
    })
    .filter((x): x is { label: string; value: string } => x !== null);
}

function ModCardImage({ src, alt }: { src: string | null; alt: string }) {
  if (src) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain p-2 sm:p-3"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(17,26,29,0.55)]">
      <span className="text-xs text-[color:var(--hub-muted)]">이미지 없음</span>
    </div>
  );
}

function AmmoCardImage({ src, alt }: { src: string | null; alt: string }) {
  if (src) {
    return (
      <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain p-2"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="mb-3 flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-dashed border-[color:var(--hub-border)] bg-[color:rgba(17,26,29,0.45)]">
      <span className="text-xs text-[color:var(--hub-muted)]">이미지 없음</span>
    </div>
  );
}

export default async function WeaponPage({
  params,
}: {
  params: Promise<{ weaponName: string }>;
}) {
  const { weaponName } = await params;
  const weaponId = weaponName.toLowerCase();

  const { data: weaponRaw, error } = await supabase
    .from("weapons")
    .select("*")
    .eq("id", weaponId)
    .single();

  if (error) {
    console.error("DB 조회 에러:", error);
  }

  if (error || !weaponRaw) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center justify-center px-4 py-10">
        <div className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.55)] p-6 text-center">
          <p className="text-lg font-semibold text-[color:var(--foreground)]">
            무기를 찾을 수 없습니다
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex rounded-lg px-4 py-2 text-sm font-semibold text-[color:var(--foreground)] bg-[color:rgba(109,127,42,0.14)] ring-1 ring-inset ring-[color:rgba(109,127,42,0.28)] hover:bg-[color:rgba(109,127,42,0.22)]"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const weapon = weaponRaw as WeaponRow;
  const title = weapon.name ?? weapon.display_name ?? weapon.id;
  const caliberText = formatCalibers(weapon.calibers);

  const [{ data: modsRaw, error: modsError }, { data: ammoRaw, error: ammoError }] =
    await Promise.all([
      supabase.from("weapon_mods").select("*").eq("weapon_id", weapon.id),
      supabase.from("weapon_ammo").select("*").eq("weapon_id", weapon.id),
    ]);

  if (modsError) {
    console.error("weapon_mods 조회 에러:", modsError);
  }
  if (ammoError) {
    console.error("weapon_ammo 조회 에러:", ammoError);
  }

  const mods = (modsRaw ?? []) as DbRow[];
  const ammoRows = (ammoRaw ?? []) as DbRow[];

  const statCards = [
    { label: "Base RPM", value: formatStatValue(weapon.base_rpm) },
    { label: "Recoil", value: formatStatValue(weapon.recoil) },
    { label: "TTK", value: formatStatValue(weapon.ttk) },
    { label: "Type", value: formatStatValue(weapon.type) },
    { label: "Calibers", value: caliberText },
  ];

  const image_url =
    typeof weapon.image_url === "string" && weapon.image_url.trim().length > 0
      ? weapon.image_url.trim()
      : null;
  const hasImage = image_url !== null;

  const caliberPrefix = caliberText !== "—" ? caliberText : "";

  return (
    <div className="min-h-full">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(109,127,42,0.22),transparent_60%),radial-gradient(900px_600px_at_80%_0%,rgba(157,187,57,0.12),transparent_55%),radial-gradient(900px_600px_at_50%_80%,rgba(17,26,29,0.95),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(231,236,235,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231,236,235,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,11,0.0),rgba(7,10,11,0.85)_55%,rgba(7,10,11,1))]" />
      </div>
      <header className="sticky top-0 z-20 border-b border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.72)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 group" aria-label="홈으로">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg border border-[color:var(--hub-border)] bg-[color:var(--hub-panel)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--hub-accent)] shadow-[0_0_0_4px_rgba(157,187,57,0.12)]" />
            </span>
            <span className="text-base font-semibold tracking-[0.12em] text-[color:var(--hub-muted)] group-hover:text-[color:var(--foreground)]">
              TARKOV HUB
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-[color:var(--foreground)] bg-[color:rgba(109,127,42,0.14)] ring-1 ring-inset ring-[color:rgba(109,127,42,0.28)] hover:bg-[color:rgba(109,127,42,0.22)]"
          >
            Back to Home
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl px-4 py-6">
        <div className="mb-8 overflow-hidden rounded-2xl border border-[color:var(--hub-border)] bg-[linear-gradient(145deg,rgba(17,26,29,0.95),rgba(7,10,11,0.92))] shadow-[inset_0_1px_0_rgba(231,236,235,0.06),0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-[color:rgba(109,127,42,0.12)]">
          <div className="relative aspect-video w-full bg-[radial-gradient(ellipse_at_50%_35%,rgba(109,127,42,0.12),transparent_50%),linear-gradient(180deg,rgba(13,18,20,0.75),rgba(7,10,11,0.92))]">
            {hasImage ? (
              <div className="absolute inset-0 p-3 sm:p-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image_url}
                  alt={title}
                  className="h-full w-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            ) : null}
          </div>
        </div>

        <section>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold text-[color:var(--foreground)]">{title}</h1>
            <div className="flex flex-wrap gap-2">
              {weapon.type ? <Tag>{weapon.type}</Tag> : null}
              {caliberText !== "—" ? <Tag>{caliberText}</Tag> : null}
            </div>
          </div>
          {weapon.description ? (
            <p className="mb-4 text-sm text-[color:var(--hub-muted)]">{weapon.description}</p>
          ) : null}
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-[color:var(--foreground)]">기본 스탯</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-4 py-3"
              >
                <p className="mb-1 text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)]">
                  {stat.label.toUpperCase()}
                </p>
                <p className="text-base font-semibold text-[color:var(--foreground)]">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-[color:var(--foreground)]">추천 모딩 예시</h2>
          {mods.length === 0 ? (
            <div className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.48)] px-5 py-8 text-center">
              <p className="text-sm text-[color:var(--hub-muted)]">
                등록된 모딩 데이터가 없습니다.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {mods.map((mod, index) => {
                const modTitle =
                  pickString(mod, ["title", "build_title", "name"]) ?? `모딩 ${index + 1}`;
                const modDesc = pickString(mod, ["description", "desc", "summary"]) ?? "";
                const modImg = pickImageUrl(mod);
                const parts = parseModParts(mod);
                const rowKey =
                  typeof mod.id === "string" || typeof mod.id === "number"
                    ? String(mod.id)
                    : `mod-${index}`;

                return (
                  <article
                    key={rowKey}
                    className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.48)] p-5 flex flex-col gap-2"
                  >
                    <ModCardImage src={modImg} alt={modTitle} />
                    <h3 className="text-base font-bold text-[color:var(--foreground)]">{modTitle}</h3>
                    {modDesc ? (
                      <p className="text-xs text-[color:var(--hub-muted)] mb-1">{modDesc}</p>
                    ) : null}
                    {parts.length > 0 ? (
                      <ul className="flex flex-col gap-1">
                        {parts.map((part) => (
                          <li
                            key={`${rowKey}-${part.label}`}
                            className="flex items-center justify-between border-b border-dashed border-[color:var(--hub-border)] last:border-b-0 pb-1 last:pb-0"
                          >
                            <span className="text-sm text-[color:var(--hub-muted)]">{part.label}</span>
                            <span className="text-sm font-medium text-[color:var(--foreground)]">
                              {part.value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-[color:var(--foreground)]">
            추천 탄약 (Recommended Ammo)
          </h2>
          {ammoRows.length === 0 ? (
            <div className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.48)] px-5 py-8 text-center">
              <p className="text-sm text-[color:var(--hub-muted)]">
                등록된 탄약 데이터가 없습니다.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {ammoRows.map((ammo, index) => {
                const ammoName = pickString(ammo, ["name", "ammo_name", "label"]) ?? `탄약 ${index + 1}`;
                const ammoRole = pickString(ammo, ["role", "note", "tag"]) ?? "";
                const pen = ammo.penetration ?? ammo.pen;
                const dmg = ammo.damage ?? ammo.dmg;
                const ammoImg = pickImageUrl(ammo);
                const rowKey =
                  typeof ammo.id === "string" || typeof ammo.id === "number"
                    ? String(ammo.id)
                    : `ammo-${index}`;

                return (
                  <article
                    key={rowKey}
                    className="rounded-2xl border border-[color:var(--hub-border)] bg-[linear-gradient(135deg,rgba(13,18,20,0.88),rgba(17,26,29,0.72))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.45)]"
                  >
                    <AmmoCardImage src={ammoImg} alt={ammoName} />
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-[color:var(--foreground)]">
                        {caliberPrefix ? `${caliberPrefix} ` : ""}
                        {ammoName}
                      </h3>
                      {ammoRole ? (
                        <span className="shrink-0 rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(109,127,42,0.14)] px-2.5 py-1 text-xs text-[color:var(--foreground)]">
                          {ammoRole}
                        </span>
                      ) : null}
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-3 py-3">
                        <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)]">
                          PENETRATION
                        </p>
                        <p className="mt-1 text-base font-semibold text-[color:var(--hub-accent)]">
                          {formatStatValue(pen as string | number | null | undefined)}
                        </p>
                      </li>
                      <li className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-3 py-3">
                        <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)]">
                          DAMAGE
                        </p>
                        <p className="mt-1 text-base font-semibold text-[color:var(--hub-accent)]">
                          {formatStatValue(dmg as string | number | null | undefined)}
                        </p>
                      </li>
                    </ul>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <div className="mt-8 flex md:hidden">
          <Link
            href="/"
            className="w-full rounded-lg px-4 py-2 text-center text-sm font-semibold text-[color:var(--foreground)] bg-[color:rgba(109,127,42,0.14)] ring-1 ring-inset ring-[color:rgba(109,127,42,0.28)] hover:bg-[color:rgba(109,127,42,0.22)]"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
