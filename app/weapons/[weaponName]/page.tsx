import Link from "next/link";
import Image from "next/image";
import { weaponsData } from "@/src/data/weapons";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(109,127,42,0.10)] px-2 py-0.5 text-xs font-medium text-[color:var(--foreground)]">
      {children}
    </span>
  );
}

export default async function WeaponPage({
  params,
}: {
  params: Promise<{ weaponName: string }>;
}) {
  const { weaponName } = await params;
  const weapon = weaponsData.find((item) => item.weaponName === weaponName);

  if (!weapon) {
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
        <section>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold text-[color:var(--foreground)]">
              {weapon.displayName}
            </h1>
            <div className="flex gap-2">
              {weapon.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
          <p className="mb-4 text-sm text-[color:var(--hub-muted)]">
            {weapon.description}
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">기본 스탯</h2>
          <div className="mb-4 flex justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
              <Image
                src={weapon.baseImage.src}
                alt={weapon.baseImage.alt}
                width={weapon.baseImage.width}
                height={weapon.baseImage.height}
                priority
                unoptimized
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {weapon.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-4 py-3"
              >
                <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)] mb-1">
                  {stat.label}
                </p>
                <p className="text-base font-semibold text-[color:var(--foreground)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-[color:var(--foreground)]">추천 모딩 예시</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {weapon.builds.map((build) => (
              <article
                key={build.title}
                className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.48)] p-5 flex flex-col gap-2"
              >
                <h3 className="text-base font-bold text-[color:var(--foreground)]">{build.title}</h3>
                <p className="text-xs text-[color:var(--hub-muted)] mb-2">{build.desc}</p>
                <ul className="flex flex-col gap-1">
                  {build.parts.map((part) => (
                    <li
                      key={`${build.title}-${part.label}`}
                      className="flex items-center justify-between border-b border-dashed border-[color:var(--hub-border)] last:border-b-0 pb-1 last:pb-0"
                    >
                      <span className="text-sm text-[color:var(--hub-muted)]">{part.label}</span>
                      <span className="text-sm font-medium text-[color:var(--foreground)]">{part.value}</span>
                    </li>
                  ))}
                </ul>
                {build.image ? (
                  <div className="mt-3">
                    <div className="w-full overflow-hidden rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
                      <Image
                        src={build.image.src}
                        alt={build.image.alt}
                        width={build.image.width}
                        height={build.image.height}
                        unoptimized
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 420px"
                      />
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-[color:var(--foreground)]">
            추천 탄약 (Recommended Ammo)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {weapon.recommendedAmmo.map((ammo) => (
              <article
                key={ammo.name}
                className="rounded-2xl border border-[color:var(--hub-border)] bg-[linear-gradient(135deg,rgba(13,18,20,0.88),rgba(17,26,29,0.72))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.45)]"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-[color:var(--foreground)]">
                    {weapon.caliberLabel} {ammo.name}
                  </h3>
                  <span className="rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(109,127,42,0.14)] px-2.5 py-1 text-xs text-[color:var(--foreground)]">
                    {ammo.role}
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-3 py-3">
                    <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)]">
                      PENETRATION
                    </p>
                    <p className="mt-1 text-base font-semibold text-[color:var(--hub-accent)]">
                      {ammo.penetration}
                    </p>
                  </li>
                  <li className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-3 py-3">
                    <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)]">
                      DAMAGE
                    </p>
                    <p className="mt-1 text-base font-semibold text-[color:var(--hub-accent)]">
                      {ammo.damage}
                    </p>
                  </li>
                </ul>
              </article>
            ))}
          </div>
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
