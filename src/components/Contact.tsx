"use client";

import TerminalWindow from "./TerminalWindow";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Contact() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";

  return (
    <section
      id="contact"
      className={`contact-section w-full py-20 sm:py-28 ${theme === "dark" ? "bg-surface/40" : ""}`}
      style={theme === "light"
        ? { backgroundColor: "rgb(255 255 255 / 58%)" }
        : undefined}
    >
      <div className="contact-section-content mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-sm text-accent">
          {japanese ? "お問い合わせ" : theme === "light" ? "Say hello" : "# contact"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {japanese ? "お気軽にご連絡ください" : "Let's talk"}
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">
          {japanese
            ? "現在、日本でフロントエンドまたはモバイル開発のポジションを探しています。採用中のチームの方は、どうぞお気軽にご連絡ください。"
            : <>I&apos;m currently looking for a frontend or mobile development role
              in Japan. If your team is hiring, I&apos;d love to hear from you.</>}
        </p>

        <div className="contact-options mt-8">
          <TerminalWindow title="contact.sh" className="contact-panel">
            <div className="dark-contact">
              <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-accent">$</span> {japanese ? "お問い合わせ --連絡先" : "open --contact"}
                  {"\n\n"}
                  email:{"    "}
                  <a
                    href="mailto:teringeralex2000@gmail.com"
                    className="text-ok underline decoration-line underline-offset-4 hover:text-text"
                  >
                    teringeralex2000@gmail.com
                  </a>
                  {"\n"}
                  linkedin: {"  "}
                  <a
                    href="https://www.linkedin.com/in/alex-t%C3%A9ringer-535b76236"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ok underline decoration-line underline-offset-4 hover:text-text"
                  >
                    linkedin.com/in/alex-téringer
                  </a>
                  {"\n"}
                  github:{"   "}
                  <a
                    href="https://github.com/Alex2518-9"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ok underline decoration-line underline-offset-4 hover:text-text"
                  >
                    github.com/Alex2518-9
                  </a>
                  <span className="cursor" />
                </code>
              </pre>
            </div>
            <div className="light-contact">
              <a href="mailto:teringeralex2000@gmail.com">
                <span className="contact-copy">
                  <span>
                    {japanese ? "メール" : "Email"}
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                      <path d="m4.5 7 7.5 6 7.5-6" />
                    </svg>
                  </span>
                  <span>teringeralex2000@gmail.com</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/alex-t%C3%A9ringer-535b76236"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-copy">
                  <span>
                    LinkedIn
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                      <path d="M8 10v6M8 7.5v.01M12 16v-6m0 2.5a2.5 2.5 0 0 1 5 0V16" />
                    </svg>
                  </span>
                  <span>linkedin.com/in/alex-téringer</span>
                </span>
              </a>
              <a href="https://github.com/Alex2518-9" target="_blank" rel="noreferrer">
                <span className="contact-copy">
                  <span>
                    GitHub
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 19c-4.2 1.3-4.2-2.1-5.9-2.5M15 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.3S17.2 2.7 15 4a12.4 12.4 0 0 0-6 0C6.8 2.7 5.7 3 5.7 3a4.4 4.4 0 0 0-.1 3.3 4.7 4.7 0 0 0-1.3 3.3c0 4.7 2.8 5.7 5.5 6A2.8 2.8 0 0 0 9 17.8V21" />
                    </svg>
                  </span>
                  <span>github.com/Alex2518-9</span>
                </span>
              </a>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
