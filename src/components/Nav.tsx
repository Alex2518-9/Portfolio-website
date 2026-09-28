"use client";

import { useState } from "react";
import {
  usePortfolioPreferences,
  type Language,
  type Theme,
} from "./PortfolioPreferences";

const links = {
  en: [
    { href: "#about", label: "/about" },
    { href: "#skills", label: "/skills" },
    { href: "#work", label: "/work" },
    { href: "#contact", label: "/contact" },
  ],
  ja: [
    { href: "#about", label: "私について" },
    { href: "#skills", label: "スキル" },
    { href: "#work", label: "制作実績" },
    { href: "#contact", label: "お問い合わせ" },
  ],
};

function PreferenceButtons({
  japanese,
  theme,
  setLanguage,
  setTheme,
}: {
  japanese: boolean;
  theme: Theme;
  setLanguage: (language: Language) => void;
  setTheme: (theme: Theme) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLanguage(japanese ? "en" : "ja")}
        aria-label={
          japanese ? "Switch language to English" : "言語を日本語に切り替える"
        }
        className="shrink-0 whitespace-nowrap rounded-md border border-line px-2.5 py-1.5 font-mono text-xs text-text-muted transition-colors hover:bg-surface-alt hover:text-text"
      >
        {japanese ? "EN" : "日本語"}
      </button>
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={
          theme === "dark"
            ? japanese
              ? "ライトテーマに切り替える"
              : "Switch to light theme"
            : japanese
              ? "ダークテーマに切り替える"
              : "Switch to dark theme"
        }
        className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-text-muted transition-colors hover:bg-surface-alt hover:text-text"
      >
        {theme === "dark" ? (
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle
              cx="10"
              cy="10"
              r="3.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M10 2v2m0 12v2M18 10h-2M4 10H2m13.66-5.66-1.42 1.42M5.76 14.24l-1.42 1.42m11.32 0-1.42-1.42M5.76 5.76 4.34 4.34"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.4 12.2A7 7 0 0 1 7.8 3.6 7 7 0 1 0 16.4 12.2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { language, theme, setLanguage, setTheme } = usePortfolioPreferences();
  const japanese = language === "ja";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3 px-6 py-3.5">
        <a
          href="#top"
          className="min-w-0 whitespace-nowrap font-mono text-sm font-medium text-text"
        >
          <span className="sm:hidden">
            {japanese ? "アレックス" : "Alex Téringer"}
          </span>
          <span className="hidden sm:inline">
            {theme === "light" ? (
              japanese ? (
                "アレックス・テリンゲル"
              ) : (
                "Alex Téringer"
              )
            ) : japanese ? (
              <>
                <span className="text-accent">こんにちは</span>
                、アレックスです。
              </>
            ) : (
              <>
                <span className="text-accent">const</span> alex ={" "}
                <span className="text-ok">&quot;online&quot;</span>;
              </>
            )}
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          {links[language].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-mono text-sm text-text-muted transition-colors hover:text-text"
            >
              {theme === "light"
                ? japanese
                  ? {
                      "#about": "私について",
                      "#skills": "スキル",
                      "#work": "制作実績",
                      "#contact": "お問い合わせ",
                    }[link.href]
                  : {
                      "#about": "About",
                      "#skills": "Skills",
                      "#work": "Work",
                      "#contact": "Contact",
                    }[link.href]
                : link.label}
            </a>
          ))}
          <a
            href="#documents"
            className="rounded-md border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
          >
            {japanese ? "履歴書" : theme === "light" ? "Resume" : "resume"}
          </a>
          <PreferenceButtons
            japanese={japanese}
            theme={theme}
            setLanguage={setLanguage}
            setTheme={setTheme}
          />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <PreferenceButtons
            japanese={japanese}
            theme={theme}
            setLanguage={setLanguage}
            setTheme={setTheme}
          />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={japanese ? "メニューを開閉" : "Toggle menu"}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-line text-text"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={open ? "M4 4L14 14M14 4L4 14" : "M2 5H16M2 9H16M2 13H16"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface px-6 py-4 lg:hidden">
          <div className="mx-auto flex max-w-4xl flex-col gap-1">
            {links[language].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-sm text-text-muted hover:bg-surface-alt hover:text-text"
              >
                {theme === "light"
                  ? japanese
                    ? {
                        "#about": "私について",
                        "#skills": "スキル",
                        "#work": "制作実績",
                        "#contact": "お問い合わせ",
                      }[link.href]
                    : {
                        "#about": "About",
                        "#skills": "Skills",
                        "#work": "Work",
                        "#contact": "Contact",
                      }[link.href]
                  : link.label}
              </a>
            ))}
            <a
              href="#documents"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 text-center font-mono text-sm text-accent"
            >
              {japanese ? "履歴書" : theme === "light" ? "Resume" : "resume"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
