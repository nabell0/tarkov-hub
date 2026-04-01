import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TARKOV HUB",
  description: "Escape from Tarkov 정보 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[color:var(--hub-olive-2)] selection:text-[color:var(--foreground)]">
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
        {children}
      </body>
    </html>
  );
}
