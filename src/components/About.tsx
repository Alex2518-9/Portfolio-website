"use client";

import { usePortfolioPreferences } from "./PortfolioPreferences";

const facts = [
  {
    label: "based_in",
    value: "Tokyo, Japan (since 2026)",
    jaLabel: "拠点",
    jaValue: "東京（2026年〜）",
  },
  {
    label: "most_recent",
    value: "Frontend Dev @ B2i Healthcare",
    jaLabel: "直近の仕事",
    jaValue: "B2i Healthcare フロントエンド開発",
  },
  {
    label: "education",
    value: "BSc, Budapest Univ. of Technology",
    jaLabel: "学歴",
    jaValue: "ブダペスト工科経済大学 学士",
  },
  {
    label: "languages",
    value: "Hungarian (native), English, Japanese (N2)",
    jaLabel: "言語",
    jaValue: "ハンガリー語（母語）、英語、日本語（N2）",
  },
];

export default function About() {
  const { language, theme } = usePortfolioPreferences();
  const japanese = language === "ja";

  return (
    <section id="about" className="border-t border-line bg-surface/40">
      <div className="mx-auto grid max-w-4xl gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_max-content] lg:gap-14">
        <div>
          <p className="font-mono text-sm text-accent">
            {japanese
              ? "私について"
              : theme === "light"
                ? "A little about me"
                : "# about"}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            {japanese ? "これまでのこと" : "A little about me"}
          </h2>
          <div className="mt-5 max-w-md space-y-4 border-l-2 border-line pl-5 text-sm leading-relaxed text-text-muted">
            <p>
              {japanese ? (
                <>
                  金融とITを学ぶなかでフロントエンド開発に出会い、その面白さに惹かれてこの道に進みました。直近の
                  <strong className="about-highlight">3年半</strong>は
                  <strong className="about-highlight">IQVIAグループのB2i Healthcare</strong>
                  で<strong className="about-highlight">フロントエンド開発者</strong>
                  として勤務。病院や医療機関で日々使われるレスポンシブWebアプリ
                  <strong className="about-highlight">「Snowray」</strong>
                  の開発・保守を担当し、各国のデザイナーやバックエンドエンジニアと協力してきました。
                </>
              ) : (
                <>
                  I started out studying finance and IT, and picked up frontend
                  development along the way — it stuck. For the past{" "}
                  <strong className="about-highlight">3.5 years</strong>
                  I&apos;ve worked as a <strong className="about-highlight">frontend developer</strong> at
                  <strong className="about-highlight"> B2i Healthcare (an IQVIA business)</strong>,
                  building and maintaining <strong className="about-highlight">Snowray</strong>, a
                  responsive web app used daily by hospitals and other medical
                  institutions, working closely with designers and backend
                  engineers on a distributed team.
                </>
              )}
            </p>
            <p>
              {japanese ? (
                <>
                  <strong className="about-highlight">東京</strong>
                  に移住してから、<strong className="about-highlight">日本語</strong>
                  と日本のテック業界について学んでいます。
                  <strong className="about-highlight">Flutter</strong>
                  でモバイル開発にも挑戦し、<strong className="about-highlight">Python</strong>
                  も学びながら、日々使われるプロダクトをより幅広く作れるよう取り組んでいます。
                </>
              ) : (
                <>
                  Since moving to <strong className="about-highlight">Tokyo</strong> I&apos;ve been learning
                  <strong className="about-highlight"> Japanese</strong>
                  alongside the local tech scene, and I&apos;m now expanding
                  from web into mobile with <strong className="about-highlight">Flutter</strong>, with
                  some <strong className="about-highlight">Python</strong> on the side, so I can build
                  for more of the products people use every day.
                </>
              )}
            </p>
            <p>
              {japanese ? (
                "コード以外では、スキー、ボルダリング、武道を楽しんでいます。テクノロジーや日本文化について読むことも好きです。"
              ) : (
                <>
                  Outside of code: skiing, bouldering, martial arts, and reading
                  my way through anything about technology or Japanese culture.
                </>
              )}
            </p>
          </div>
        </div>

        <dl className="about-facts rounded-xl border border-line bg-surface text-xs">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex w-full flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-4 ${
                i !== facts.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <dt
                className={`text-text-muted ${japanese ? "shrink-0 whitespace-nowrap" : "wrap-break-word"}`}
              >
                {japanese ? fact.jaLabel : fact.label}
              </dt>
              <dd
                className={`text-text sm:ml-auto sm:text-right ${japanese ? "shrink-0 whitespace-nowrap" : "min-w-0 wrap-break-word"}`}
              >
                {japanese ? fact.jaValue : fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
