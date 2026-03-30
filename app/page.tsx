import Link from "next/link";
const popularWeapons = [
  {
    name: "M4A1",
    type: "Assault Rifle",
    calibers: ["5.56x45"],
    tags: ["Meta", "All-rounder"],
    stats: [
      { label: "Base RPM", value: "800" },
      { label: "Recoil", value: "Medium" },
      { label: "Modding", value: "Excellent" },
    ],
  },
  {
    name: "MP7A1",
    type: "SMG",
    calibers: ["4.6x30"],
    tags: ["CQB", "Laser beam"],
    stats: [
      { label: "Base RPM", value: "950" },
      { label: "Recoil", value: "Low" },
      { label: "TTK", value: "Fast (close)" },
    ],
  },
] as const;
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(109,127,42,0.10)] px-2 py-0.5 text-xs font-medium text-[color:var(--foreground)]">
      {children}
    </span>
  );
}
export default function Home() {
  return (
    <div className="min-h-full">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(109,127,42,0.22),transparent_60%),radial-gradient(900px_600px_at_80%_0%,rgba(157,187,57,0.12),transparent_55%),radial-gradient(900px_600px_at_50%_80%,rgba(17,26,29,0.95),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(231,236,235,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231,236,235,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,10,11,0.0),rgba(7,10,11,0.85)_55%,rgba(7,10,11,1))]" />
      </div>
      <header className="sticky top-0 z-20 border-b border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.72)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3"
            aria-label="TARKOV HUB 홈"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--hub-border)] bg-[color:var(--hub-panel)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--hub-accent)] shadow-[0_0_0_5px_rgba(157,187,57,0.12)]" />
            </span>
            <span className="leading-none">
              <span className="block text-sm tracking-[0.28em] text-[color:var(--hub-muted)]">
                ESCAPE FROM TARKOV
              </span>
              <span className="block text-lg font-semibold tracking-[0.12em]">
                TARKOV HUB
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
            <Link
              href="#weapons"
              className="rounded-lg px-3 py-2 text-sm text-[color:var(--hub-muted)] hover:bg-[color:rgba(231,236,235,0.06)] hover:text-[color:var(--foreground)]"
            >
              무기도감
            </Link>
            <Link
              href="#ammo"
              className="rounded-lg px-3 py-2 text-sm text-[color:var(--hub-muted)] hover:bg-[color:rgba(231,236,235,0.06)] hover:text-[color:var(--foreground)]"
            >
              탄약정보
            </Link>
            <Link
              href="#quests"
              className="rounded-lg px-3 py-2 text-sm text-[color:var(--hub-muted)] hover:bg-[color:rgba(231,236,235,0.06)] hover:text-[color:var(--foreground)]"
            >
              퀘스트
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(17,26,29,0.65)] px-3 py-1 text-xs text-[color:var(--hub-muted)] sm:inline-flex">
              Dark • Olive • Gunmetal
            </span>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-[color:var(--hub-border)] bg-[color:var(--hub-panel)] px-3 py-2 text-sm text-[color:var(--foreground)] hover:bg-[color:var(--hub-panel-2)] md:hidden"
              aria-label="메뉴"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4">
        <section className="pt-12 md:pt-16">
          <div className="rounded-2xl border border-[color:var(--hub-border)] bg-[linear-gradient(135deg,rgba(17,26,29,0.72),rgba(13,18,20,0.72))] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.55)] md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
              <div>
                <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--hub-muted)]">
                  OPERATIONS BRIEFING
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                  Welcome to Tarkov,{" "}
                  <span className="text-[color:var(--hub-accent)]">
                    Escaper.
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[color:var(--hub-muted)] md:text-base">
                  무기, 탄약, 퀘스트 정보를 빠르게 찾고, 오늘의 로드아웃을
                  준비하세요.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex w-full items-center gap-2 rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.55)] px-3 py-2.5">
                    <span
                      className="h-2 w-2 rounded-full bg-[color:var(--hub-olive)]"
                      aria-hidden="true"
                    />
                    <input
                      type="search"
                      placeholder="무기 / 탄약 / 퀘스트 검색 (예: M4A1, 7.62 BP, Delivery from the past)"
                      className="w-full bg-transparent text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--hub-subtle)] focus:outline-none"
                    />
                    <button
                      type="button"
                      className="shrink-0 rounded-lg bg-[color:var(--hub-olive)] px-3 py-2 text-sm font-semibold text-[color:rgba(7,10,11,0.95)] hover:bg-[color:var(--hub-accent)]"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Tag>Weapons</Tag>
                  <Tag>Ammo</Tag>
                  <Tag>Quests</Tag>
                  <Tag>Maps (soon)</Tag>
                </div>
              </div>
              <div className="rounded-2xl border border-[color:var(--hub-border)] bg-[radial-gradient(700px_220px_at_20%_10%,rgba(109,127,42,0.25),transparent_60%),linear-gradient(135deg,rgba(13,18,20,0.9),rgba(17,26,29,0.75))] p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs tracking-[0.22em] text-[color:var(--hub-muted)]">
                      QUICK LINKS
                    </p>
                    <p className="mt-2 text-sm text-[color:var(--hub-muted)]">
                      자주 찾는 카테고리로 바로 이동
                    </p>
                  </div>
                  <span className="rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(231,236,235,0.06)] px-2.5 py-1 text-xs text-[color:var(--hub-muted)]">
                    v0.1
                  </span>
                </div>
                <div className="mt-4 grid gap-2">
                  <Link
                    href="#weapons"
                    className="group rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.4)] px-4 py-3 text-sm hover:bg-[color:rgba(17,26,29,0.7)]"
                  >
                    <span className="flex items-center justify-between text-[color:var(--foreground)]">
                      인기 무기 보기
                      <span className="text-[color:var(--hub-muted)] group-hover:text-[color:var(--foreground)]">
                        →
                      </span>
                    </span>
                    <span className="mt-1 block text-xs text-[color:var(--hub-muted)]">
                      M4A1 · MP7A1
                    </span>
                  </Link>
                  <Link
                    href="#ammo"
                    className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.4)] px-4 py-3 text-sm text-[color:var(--hub-muted)] hover:bg-[color:rgba(17,26,29,0.7)] hover:text-[color:var(--foreground)]"
                  >
                    탄약 관통/데미지 요약 (준비중)
                  </Link>
                  <Link
                    href="#quests"
                    className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.4)] px-4 py-3 text-sm text-[color:var(--hub-muted)] hover:bg-[color:rgba(17,26,29,0.7)] hover:text-[color:var(--foreground)]"
                  >
                    퀘스트 동선/아이템 체크리스트 (준비중)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="weapons" className="pt-12 md:pt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                인기 무기
              </h2>
              <p className="mt-1 text-sm text-[color:var(--hub-muted)]">
                이번 시즌 자주 보이는 무기 2개를 카드로 정리했어요.
              </p>
            </div>
            <Link
              href="#"
              className="hidden rounded-lg border border-[color:var(--hub-border)] bg-[color:rgba(17,26,29,0.45)] px-3 py-2 text-sm text-[color:var(--hub-muted)] hover:bg-[color:rgba(17,26,29,0.7)] hover:text-[color:var(--foreground)] sm:inline-flex"
            >
              전체 무기도감 (준비중)
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {popularWeapons.map((w) => (
              <article
                key={w.name}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--hub-border)] bg-[linear-gradient(135deg,rgba(13,18,20,0.88),rgba(17,26,29,0.72))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(109,127,42,0.22),transparent_60%)] blur-2xl transition-opacity group-hover:opacity-80" />
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-[0.28em] text-[color:var(--hub-muted)]">
                      {w.type.toUpperCase()}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      {w.name}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--hub-muted)]">
                      Caliber:{" "}
                      <span className="text-[color:var(--foreground)]">
                        {w.calibers.join(", ")}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="rounded-full border border-[color:var(--hub-border)] bg-[color:rgba(231,236,235,0.06)] px-3 py-1 text-xs text-[color:var(--hub-muted)]">
                      Popular pick
                    </span>
                    <div className="flex flex-wrap justify-end gap-2">
                      {w.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </header>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {w.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-[color:var(--hub-border)] bg-[color:rgba(7,10,11,0.35)] px-3 py-3"
                    >
                      <p className="text-[11px] tracking-[0.18em] text-[color:var(--hub-muted)]">
                        {s.label.toUpperCase()}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[color:var(--foreground)]">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
                <footer className="mt-6 flex items-center justify-between">
                  <p className="text-xs text-[color:var(--hub-muted)]">
                    세부 스탯/모딩 추천은 추후 업데이트 예정
                  </p>
                  <Link
                    href={w.name === "M4A1" ? "/weapons/m4a1" : "#"}
                    className="rounded-lg bg-[color:rgba(109,127,42,0.14)] px-3 py-2 text-sm font-semibold text-[color:var(--foreground)] ring-1 ring-inset ring-[color:rgba(109,127,42,0.28)] hover:bg-[color:rgba(109,127,42,0.22)]"
                  >
                    상세 보기 →
                  </Link>
                </footer>
              </article>
            ))}
          </div>
        </section>
        <section id="ammo" className="pt-12">
          <div className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.55)] p-6">
            <h2 className="text-lg font-semibold">탄약정보</h2>
            <p className="mt-2 text-sm text-[color:var(--hub-muted)]">
              관통/데미지/아머 클래스별 추천 등은 다음 단계에서 붙이면 UI가 더
              살아납니다.
            </p>
          </div>
        </section>
        <section id="quests" className="py-12">
          <div className="rounded-2xl border border-[color:var(--hub-border)] bg-[color:rgba(13,18,20,0.55)] p-6">
            <h2 className="text-lg font-semibold">퀘스트</h2>
            <p className="mt-2 text-sm text-[color:var(--hub-muted)]">
              트레이더별 필수 퀘스트/아이템 체크리스트 영역을 여기로 확장할 수
              있어요.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
