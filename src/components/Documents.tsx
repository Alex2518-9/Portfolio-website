"use client";

import TerminalWindow from "./TerminalWindow";
import { documents } from "@/data/documents";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Documents() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";

  return (
    <section id="documents" className="mx-auto w-full max-w-4xl px-6 py-20 sm:py-24">
      <p className="font-mono text-sm text-accent">{japanese ? "書類" : theme === "light" ? "Background" : "# documents"}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {japanese ? "履歴書・職務経歴書" : "Resume & work history"}
      </h2>
      <p className="mt-3 max-w-md text-sm text-text-muted">
        {japanese
          ? "個人情報を含む日本式の履歴書は、公開を控えているためご希望に応じてお送りします。"
          : <>A Japanese-style 履歴書 is available directly on request — it
            includes personal details I&apos;d rather not publish openly.</>}
      </p>

      <div className="mt-8">
        <TerminalWindow title="~/documents">
          <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
            <code>
              <span className="text-accent">$</span> {japanese ? "書類一覧" : "ls -la ./documents"}
            </code>
          </pre>
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {documents.map((doc) => (
              <li
                key={doc.filename}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <a
                    href={doc.href}
                    download
                    className="font-mono text-sm text-ok underline decoration-line underline-offset-4 hover:text-text"
                  >
                    {doc.filename}
                  </a>
                  <span className="ml-2 text-sm text-text">
                    — {japanese
                      ? doc.filename === "alex-teringer-cv.pdf"
                        ? "履歴書（英語）"
                        : "職務経歴書（日本語）"
                      : doc.label}
                  </span>
                  {doc.note && (
                    <p className="mt-1 text-xs text-text-muted">
                      {japanese
                        ? "公開版では電話番号と住所を非公開にしています。詳細はお問い合わせください。"
                        : doc.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </div>
    </section>
  );
}
