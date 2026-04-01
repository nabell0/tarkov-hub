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

export default function WeaponsPage() {
  return (
    <div className="min-h-full">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(109,127,42,0.22),transparent_60%),radial-gradient(900px_600px_at_80%_0%,rgba(157,187,57,0.12),transparent_55%),radial-gradient(900px_600px_at_50%_80%,rgba(17,26,29,0.95),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(231,236,235,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231,236,235,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,11,0.0),rgba(7,10,11,0.85)_55%,rgba(7,10,11,1))]" />
      </div>

      <main className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              전체 무기도감
            </h1>
            <p className="mt-2 text-sm text-[color:var(--hub-muted)]">
              등록된 모든 무기의 핵심 스탯을 빠르게 확인하고 상세 페이지로 이동하세요.
            </p>
          </div>
          <Link
            href="/"
            className="hidden rounded-lg border border-[color:var(--hub-border)] bg-[color:rgba(17,26,29,0.45)] px-3 py-2 text-sm text-[color:var(--hub-muted)] hover:bg-[color:rgba(17,26,29,0.7)] hover:text-[color:var(--foreground)] sm:inline-flex"
          >
            메인으로
          </Link>
        </div>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {weaponsData.map((weapon) => (
            <article
              key={weapon.weaponName}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--hub-border)] bg-[linear-gradient(135deg,rgba(13,18,20,0.88),rgba(17,26,29,0.72))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(109,127,42,0.22),transparent_60%)] blur-2xl transition-opacity group-hover:opacity-80" />
              <header className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.28em] text-[color:var(--hub-muted)]">
                    {weapon.tags[0].toUpperCase()}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    {weapon.displayName}
                  </h2>
                  <p className="mt-2 text-sm text-[color:var(--hub-muted)]">
                    Caliber:{" "}
                    <span className="text-[color:var(--foreground)]">
                      {weapon.caliberLabel}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(231,236,235,0.06)] px-3 py-1 text-xs text-[color:var(--hub-muted)]">
                    Weapon
                  </span>
                  <div className="flex flex-wrap justify-end gap-2">
                    {weapon.tags.slice(0, 2).map((tag) => (
                      <Tag key={`${weapon.weaponName}-${tag}`}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </header>

              <div className="mt-4 overflow-hidden rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
                <Image
                  src={weapon.baseImage.src}
                  alt={weapon.baseImage.alt}
                  width={weapon.baseImage.width}
                  height={weapon.baseImage.height}
                  unoptimized
                  className="h-36 w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {weapon.stats.slice(0, 3).map((stat) => (
                  <div
                    key={`${weapon.weaponName}-${stat.label}`}
                    className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-3 py-3"
                  >
                    <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)]">
                      {stat.label.toUpperCase()}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[color:var(--foreground)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <footer className="mt-6 flex items-center justify-between">
                <p className="text-xs text-[color:var(--hub-muted)]">
                  세부 스탯/모딩 추천은 추후 업데이트 예정
                </p>
                <Link
                  href={`/weapons/${weapon.weaponName}`}
                  className="rounded-lg bg-[color:rgba(109,127,42,0.14)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] ring-1 ring-inset ring-[color:rgba(109,127,42,0.28)] hover:bg-[color:rgba(109,127,42,0.22)]"
                >
                  상세 보기 →
                </Link>
              </footer>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
