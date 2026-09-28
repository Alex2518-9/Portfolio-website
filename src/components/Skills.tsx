"use client";

import { skillGroups } from "@/data/skills";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Skills() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";
  const groupLabels: Record<string, string> = {
    frontend: "フロントエンド",
    mobile: "モバイル",
    "backend_&_data": "バックエンド・データ",
    tools: "ツール",
  };

  return (
    <section id="skills" className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
      <p className="font-mono text-sm text-accent">{japanese ? "スキル" : theme === "light" ? "Skills & tools" : "# skills"}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {japanese ? "使用技術" : "What I work with"}
      </h2>

      <div className="mt-8 space-y-5 font-mono text-sm">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-2 rounded-lg border border-line bg-surface px-5 py-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="w-44 shrink-0 text-text-muted">
              {japanese ? groupLabels[group.label] : group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line bg-surface-alt px-2.5 py-1 text-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
