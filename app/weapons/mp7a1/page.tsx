import Link from "next/link";
import Image from "next/image";

const mp7a1Stats = [
  { label: "연사력", value: "950 RPM" },
  { label: "인체공학", value: "65" },
  { label: "수직 반동", value: "32" },
  { label: "무게", value: "2.27 kg" },
  { label: "유효 사거리", value: "200 m" },
  { label: "사용 탄약", value: "4.6x30mm HK" },
];

const builds = [
  {
    title: "근거리 추천 모딩",
    desc: "실내 교전/코너 피킹 위주로 빠르게 킬각을 잡는 세팅입니다.",
    parts: [
      { label: "개머리판", value: "HK MP7A1 stock" },
      { label: "전방 손잡이", value: "RK-2" },
      { label: "총구", value: "B&T Rotex-II 4.6x30mm sound suppressor" },
      { label: "조준경", value: "EOTech EXPS3" },
      { label: "탄창", value: "HK MP7 4.6x30 40-round magazine" },
      { label: "전술 장비", value: "L3Harris AN/PEQ-15 tactical device" },
    ],
  },
  {
    title: "가성비 소음기 빌드",
    desc: "소음기 + 무난한 반동/조작성 밸런스로 안정적인 운영을 목표로 합니다.",
    parts: [
      { label: "개머리판", value: "HK MP7A1 stock" },
      { label: "전방 손잡이", value: "Shift" },
      { label: "총구", value: "B&T Rotex-II 4.6x30mm sound suppressor" },
      { label: "조준경", value: "Holosun HS401G5 reflex sight" },
      { label: "탄창", value: "HK MP7 4.6x30 30-round magazine" },
    ],
  },
];

const recommendedAmmo = [
  {
    name: "AP SX",
    role: "고관통",
    penetration: 53,
    damage: 35,
  },
  {
    name: "FMJ SX",
    role: "무난 / 범용",
    penetration: 40,
    damage: 43,
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(109,127,42,0.10)] px-2 py-0.5 text-xs font-medium text-[color:var(--foreground)]">
      {children}
    </span>
  );
}

export default function MP7A1Page() {
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
              H&amp;K MP7A1
            </h1>
            <div className="flex gap-2">
              <Tag>SMG</Tag>
              <Tag>4.6x30mm HK</Tag>
            </div>
          </div>
          <p className="mb-4 text-sm text-[color:var(--hub-muted)]">
            MP7A1은 근접전(CQB)에 강한 초고속 연사 SMG로, 낮은 반동과 빠른 조작감이
            강점입니다. 팩토리/인터체인지 등 실내 교전에서 특히 빛납니다.
          </p>
        </section>
        {/* 기본 스탯 */}
        <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold text-[color:var(--foreground)]">
            기본 스탯
          </h2>

          <div className="mb-4 flex justify-center">
            <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
              <Image
                src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/02/HKMP7A1Image.png/revision/latest?cb=20231025201954"
                alt="MP7A1 기본 외형"
                width={1200}
                height={417}
                priority
                unoptimized
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {mp7a1Stats.map((stat) => (
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
        {/* 추천 모딩 예시 */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-[color:var(--foreground)]">
            추천 모딩 예시
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {builds.map((build) => (
              <article
                key={build.title}
                className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.48)] p-5 flex flex-col gap-2"
              >
                <h3 className="text-base font-bold text-[color:var(--foreground)]">
                  {build.title}
                </h3>
                <p className="text-xs text-[color:var(--hub-muted)] mb-2">
                  {build.desc}
                </p>
                <ul className="flex flex-col gap-1">
                  {build.parts.map((part) => (
                    <li
                      key={part.label}
                      className="flex items-center justify-between border-b border-dashed border-[color:var(--hub-border)] last:border-b-0 pb-1 last:pb-0"
                    >
                      <span className="text-sm text-[color:var(--hub-muted)]">
                        {part.label}
                      </span>
                      <span className="text-sm font-medium text-[color:var(--foreground)]">
                        {part.value}
                      </span>
                    </li>
                  ))}
                </ul>

                {build.title.includes("근거리") ? (
                  <div className="mt-3">
                    <div className="w-full overflow-hidden rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)]">
                      <Image
                        src="https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c6/Rotex2.png/revision/latest?cb=20181108183105"
                        alt="MP7A1 소음기 장착 모딩 예시"
                        width={800}
                        height={467}
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
        {/* 추천 탄약 */}
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-[color:var(--foreground)]">
            추천 탄약 (Recommended Ammo)
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {recommendedAmmo.map((ammo) => (
              <article
                key={ammo.name}
                className="rounded-2xl border border-[color:var(--hub-border)] bg-[linear-gradient(135deg,rgba(13,18,20,0.88),rgba(17,26,29,0.72))] p-5 shadow-[0_16px_45px_rgba(0,0,0,0.45)]"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-[color:var(--foreground)]">
                    4.6x30mm {ammo.name}
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