"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import TerminalWindow from "@/components/TerminalWindow";
import { usePortfolioPreferences } from "@/components/PortfolioPreferences";

export default function NotFound() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";
  const lightTheme = theme === "light";

  return (
    <>
      <header className="mx-auto w-full max-w-4xl px-6 py-5">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-text transition-colors hover:text-accent"
        >
          {lightTheme ? (
            "Alex Téringer"
          ) : (
            <>
              <span className="text-accent">const</span> alex ={" "}
              <span className="text-ok">&quot;online&quot;</span>;
            </>
          )}
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-12 sm:py-20">
        <p className="font-mono text-sm text-accent">
          {lightTheme
            ? japanese
              ? "お探しのページが見つかりません"
              : "This page doesn’t seem to exist"
            : japanese
              ? "$ エラー 404"
              : "$ error 404"}
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          {japanese ? "ページが見つかりません。" : "Page not found."}
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
          {japanese
            ? "リンクが古いか、ページが移動した可能性があります。ホームに戻って、ほかのページをご覧ください。"
            : "The link may be outdated, or the page may have moved. Head back home and find your way around from there."}
        </p>

        <TerminalWindow title={""} className="mt-8 max-w-2xl">
          <div className="font-mono text-sm leading-relaxed">
            <p>
              <span className="text-accent">$</span>{" "}
              {japanese ? "ページを検索中..." : "find ./page"}
            </p>
            <p className="mt-2 text-ok">
              {japanese
                ? "エラー: 指定されたページが見つかりません"
                : "error: the requested page could not be found"}
            </p>
            <p className="mt-2 text-text-muted">
              {japanese ? "終了コード: 404" : "process exited with code 404"}
            </p>
          </div>
        </TerminalWindow>

        <Link
          href="/#top"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-accent-ink transition-transform hover:-translate-y-0.5"
        >
          <span aria-hidden="true">←</span>
          {japanese
            ? lightTheme
              ? "ホームに戻る"
              : "$ ホームに戻る"
            : lightTheme
              ? "Back to homepage"
              : "$ cd /home"}
        </Link>
      </main>

      <Footer />
    </>
  );
}
