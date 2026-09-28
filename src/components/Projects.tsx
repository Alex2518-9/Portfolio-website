"use client";

import TerminalWindow from "./TerminalWindow";
import { projects } from "@/data/projects";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Projects() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";

  return (
    <section id="work" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <p className="font-mono text-sm text-accent">{japanese ? "制作実績" : theme === "light" ? "A selection of my work" : "# work"}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {japanese ? "これまでの仕事" : "Selected work"}
        </h2>
        <p className="mt-3 max-w-md text-sm text-text-muted">
          {japanese
            ? "これまでに携わったプロジェクトをご紹介します。"
            : "A few placeholders for now — real project write-ups are coming soon."}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <TerminalWindow
              key={project.name}
              title={project.file}
              className={project.featured ? "sm:col-span-2" : ""}
            >
              <h3 className="text-base font-semibold text-text">
                {japanese ? project.jaName ?? project.name : project.name}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-text-muted">
                {japanese ? project.jaDescription : project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-line bg-surface-alt px-2 py-1 text-text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </TerminalWindow>
          ))}
        </div>
      </div>
    </section>
  );
}
