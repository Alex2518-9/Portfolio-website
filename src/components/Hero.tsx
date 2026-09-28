"use client";

import Image from "next/image";
import TerminalWindow from "./TerminalWindow";
import { usePortfolioPreferences } from "./PortfolioPreferences";

export default function Hero() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";

  return (
    <section
      id="top"
      className="mx-auto w-full max-w-4xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <p
        className="reveal font-mono text-sm text-accent"
        style={{ animationDelay: "40ms" }}
      >
        {theme === "light"
          ? japanese ? "日本で新しいチームを探しています" : "Open to frontend & mobile roles"
          : japanese ? "$ 自己紹介" : "$ whoami"}
      </p>

      <div className="hero-intro">
        <div>
          <h1
            className="reveal mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "140ms" }}
          >
            {japanese
              ? "アレックス・テリンゲル — 日本を拠点に活動するフロントエンド・モバイル開発者。"
              : <>Alex Téringer — frontend &amp; mobile developer, based in Japan.</>}
          </h1>

          <p
            className="reveal mt-5 max-w-xl text-base leading-relaxed text-text-muted"
            style={{ animationDelay: "240ms" }}
          >
            {japanese
              ? "React、Next.js、TypeScriptを使ったレスポンシブなWebアプリ開発に3年半携わってきました。直近では、病院で日々利用される医療プラットフォームを担当。現在はFlutterでモバイル開発にも取り組みながら、日本で次のチームを探しています。"
              : <>3.5 years building responsive web apps with React, Next.js, and
                TypeScript — most recently on a healthcare platform used daily by
                hospitals. Now expanding into mobile with Flutter, and looking for
                my next team in Japan.</>}
          </p>
        </div>

        <Image
          src="/images/smallProfile.jpg"
          alt={japanese ? "アレックス・テリンゲルのプロフィール写真" : "Portrait of Alex Téringer"}
          width={640}
          height={960}
          priority
          sizes="(max-width: 640px) 224px, (max-width: 1024px) 240px, 256px"
          className="hero-portrait"
        />
      </div>

      <div
        className="reveal profile-stage mt-10"
        style={{ animationDelay: "340ms" }}
      >
        <div className="dark-profile">
          <TerminalWindow title="profile.ts">
            <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
              <code>
                <span className="text-accent">const</span> developer = {"{"}
                {"\n"}
                {"  "}name: <span className="text-ok">&quot;Alex Téringer&quot;</span>,
                {"\n"}
                {"  "}location: <span className="text-ok">&quot;{japanese ? "東京、日本" : "Tokyo, Japan"}&quot;</span>,
                {"\n"}
                {"  "}experience: <span className="text-ok">&quot;{japanese ? "フロントエンド開発 3年半" : "3.5 years, frontend"}&quot;</span>,
                {"\n"}
                {"  "}stack: [<span className="text-ok">&quot;React&quot;</span>, <span className="text-ok">&quot;Next.js&quot;</span>, <span className="text-ok">&quot;TypeScript&quot;</span>, <span className="text-ok">&quot;Tailwind&quot;</span>],
                {"\n"}
                {"  "}learning: [<span className="text-ok">&quot;Flutter&quot;</span>, <span className="text-ok">&quot;Python&quot;</span>],
                {"\n"}
                {"  "}lookingFor: <span className="text-ok">&quot;{japanese ? "日本でフロントエンド・モバイル開発職を希望" : "frontend / mobile roles in Japan"}&quot;</span>,
                {"\n"}
                {"}"}
                <span className="cursor" />
              </code>
            </pre>
          </TerminalWindow>
        </div>
        <div className="light-profile">
          <div className="light-profile-item">
            <p className="light-profile-label">{japanese ? "拠点" : "Based in"}</p>
            <p className="light-profile-value">{japanese ? "東京、日本" : "Tokyo, Japan"}</p>
          </div>
          <div className="light-profile-item">
            <p className="light-profile-label">{japanese ? "経験" : "Experience"}</p>
            <p className="light-profile-value">{japanese ? "フロントエンド 3年半" : "3.5 years in frontend"}</p>
          </div>
          <div className="light-profile-item">
            <p className="light-profile-label">{japanese ? "現在の関心" : "Currently exploring"}</p>
            <p className="light-profile-value">{japanese ? "Flutter・モバイル開発" : "Flutter & mobile"}</p>
          </div>
        </div>
      </div>

      <div
        className="reveal mt-8 flex flex-col gap-3 sm:flex-row"
        style={{ animationDelay: "440ms" }}
      >
        <a
          href="#work"
          className="rounded-md bg-accent px-5 py-2.5 text-center font-mono text-sm text-accent-ink transition-transform hover:-translate-y-0.5"
        >
          {japanese ? theme === "light" ? "制作実績を見る" : "$ 制作実績を見る" : theme === "light" ? "View selected work" : "$ open ./work"}
        </a>
        <a
          href="#contact"
          className="rounded-md border border-line px-5 py-2.5 text-center font-mono text-sm text-text transition-colors hover:bg-surface"
        >
          {japanese ? theme === "light" ? "お問い合わせ" : "$ お問い合わせ" : theme === "light" ? "Get in touch" : "$ contact --me"}
        </a>
      </div>
    </section>
  );
}
