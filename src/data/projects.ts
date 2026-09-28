export type Project = {
  name: string;
  file: string;
  description: string;
  jaDescription: string;
  jaName?: string;
  tags: string[];
  featured?: boolean;
  video?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    name: "Snowray",
    file: "snowray.tsx",
    description:
      "A responsive web application for B2i Healthcare (an IQVIA business), used daily by hospitals and other medical institutions working with SNOMED CT terminology. Built and maintained UI components, collaborated with designers and backend engineers across a global team, and worked on performance and load-time improvements.",
    jaDescription:
      "IQVIAグループのB2i Healthcare向けWebアプリ。SNOMED CT用語を扱う病院や医療機関で日々利用されています。UIコンポーネントの開発・保守を担当し、グローバルチームのデザイナーやバックエンドエンジニアと連携。パフォーマンスや読み込み時間の改善にも取り組みました。",
    tags: ["React", "Next.js", "TypeScript", "Healthcare"],
    featured: true,
  },
  {
    name: "Project Two",
    file: "project-two.tsx",
    description: "A one- or two-line summary of the problem this solved.",
    jaName: "プロジェクト 2",
    jaDescription: "解決した課題を紹介するプロジェクト概要です。",
    tags: ["React", "API"],
  },
  {
    name: "Meals App",
    file: "meals-app.dart",
    description: "A Flutter mobile app demo.",
    jaName: "Meals App",
    jaDescription: "Flutterで開発したモバイルアプリのデモです。",
    tags: ["Flutter", "Mobile"],
    video: "/videos/meals_app.mp4",
    github: "https://github.com/Alex2518-9/Meals_app",
  },
];
