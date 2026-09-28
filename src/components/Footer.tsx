"use client";

import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Footer() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";

  return (
    <footer className="mx-auto w-full max-w-4xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Alex Téringer</span>
        <span>{japanese
          ? theme === "light" ? "Alex Téringer が制作" : "Next.js・TypeScript・Tailwind CSS で制作"
          : theme === "light" ? "Designed & built by Alex Téringer" : "built with next.js · typescript · tailwind"}</span>
      </div>
    </footer>
  );
}
