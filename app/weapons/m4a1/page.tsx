import Link from "next/link";
import Image from "next/image";

const m4a1Stats = [
  { label: "Ergonomics", value: "56" },
  { label: "Vertical Recoil", value: "88" },
  { label: "Horizontal Recoil", value: "215" },
  { label: "Muzzle Velocity", value: "884 m/s" },
  { label: "Fire Rate", value: "800 RPM" },
  { label: "Weight", value: "3.36 kg" },
  { label: "Caliber", value: "5.56x45 NATO" },
];

const builds = [
  {
    title: "Short Range Build",
    desc: "빠른 반응이 필요한 근거리 교전에 적합한 빌드입니다.",
    parts: [
      { label: "Handguard", value: "Geissele SMR MK16" },
      { label: "Stock", value: "Magpul CTR Carbine" },
      { label: "Foregrip", value: "RK-2" },
      { label: "Muzzle", value: "SureFire SOCOM556-RC2" },
      { label: "Sight", value: "EOTech EXPS3" },
      { label: "Magazine", value: "STANAG 60-round" },
    ],
  },
  {
    title: "Long Range Build",
    desc: "정확한 저격 및 중장거리 제압에 어울리는 빌드입니다.",
    parts: [
      { label: "Handguard", value: "Midwest Industries 14\"" },
      { label: "Stock", value: "PRS GEN3" },
      { label: "Foregrip", value: "Shift" },
      { label: "Muzzle", value: "Thunder Beast 223CB" },
      { label: "Sight", value: "Trijicon VCOG 1-6x" },
      { label: "Magazine", value: "Magpul PMAG 30-round" },
      { label: "Charging Handle", value: "Raptor" },
    ],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(109,127,42,0.10)] px-2 py-0.5 text-xs font-medium text-[color:var(--foreground)]">
      {children}
    </span>
  );
}

export default function M4A1Page() {
  return (
    <div className="min-h-full">
      {/* 배경: 메인 페이지와 통일 */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(109,127,42,0.22),transparent_60%),radial-gradient(900px_600px_at_80%_0%,rgba(157,187,57,0.12),transparent_55%),radial-gradient(900px_600px_at_50%_80%,rgba(17,26,29,0.95),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(231,236,235,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231,236,235,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,11,0.0),rgba(7,10,11,0.85)_55%,rgba(7,10,11,1))]" />
      </div>
      {/* Header */}
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
      {/* Main Content */}
      <main className="mx-auto w-full max-w-3xl px-4 py-6">
        {/* Weapon Title & Tags */}
        <section>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold text-[color:var(--foreground)]">
              Colt M4A1
            </h1>
            <div className="flex gap-2">
              <Tag>Assault Rifle</Tag>
              <Tag>5.56x45 NATO</Tag>
            </div>
          </div>
          <p className="mb-4 text-sm text-[color:var(--hub-muted)]">
            Escape from Tarkov을 대표하는 모딩 자유도가 높은 돌격 소총. 다양한 상황에 맞게 커스터마이즈 할 수 있습니다.
          </p>
        </section>
        {/* 기본 스탯 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">기본 스탯</h2>

          <div className="mb-4 flex justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
              <Image
                src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/29/M4a1.png/revision/latest?cb=20231017102422"
                alt="M4A1 기본 외형"
                width={1597}
                height={573}
                priority
                unoptimized
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {m4a1Stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-4 py-3"
              >
                <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)] mb-1">
                  {stat.label.toUpperCase()}
                </p>
                <p className="text-base font-semibold text-[color:var(--foreground)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* 추천 모딩 예시 */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-[color:var(--foreground)]">추천 모딩 예시</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {builds.map((build) => (
              <article
                key={build.title}
                className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.48)] p-5 flex flex-col gap-2"
              >
                <h3 className="text-base font-bold text-[color:var(--foreground)]">{build.title}</h3>
                <p className="text-xs text-[color:var(--hub-muted)] mb-2">{build.desc}</p>
                <ul className="flex flex-col gap-1">
                  {build.parts.map((part) => (
                    <li key={part.label} className="flex items-center justify-between border-b border-dashed border-[color:var(--hub-border)] last:border-b-0 pb-1 last:pb-0">
                      <span className="text-sm text-[color:var(--hub-muted)]">{part.label}</span>
                      <span className="text-sm font-medium text-[color:var(--foreground)]">{part.value}</span>
                    </li>
                  ))}
                </ul>

                {build.title.toLowerCase().includes("short range") ? (
                  <div className="mt-3">
                    <div className="w-full overflow-hidden rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
                      <Image
                        src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/65/M4modded.png/revision/latest?cb=20240508062306"
                        alt="M4A1 추천 모딩 (근거리)"
                        width={316}
                        height={127}
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
        {/* Back link at bottom for mobile/further guidance */}
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