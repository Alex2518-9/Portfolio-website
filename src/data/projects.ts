export type Project = {
  name: string;
  file: string;
  description: string;
  jaDescription: string;
  jaName?: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  video?: string;
  github?: string;
  website?: string;
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
    name: "Japan World",
    file: "japan-world.tsx",
    description: "A website exploring Japan.",
    jaName: "Japan World",
    jaDescription: "日本を紹介するWebサイトです。",
    tags: ["Next.js", "React", "Tailwind CSS"],
    image: "/images/japan.png",
    imageAlt: "Japan World website",
    imageWidth: 2642,
    imageHeight: 1108,
    website: "https://japan-world.vercel.app/",
  },
  {
    name: "Meals App",
    file: "meals-app.dart",
    description: "A Flutter mobile app demo.",
    jaName: "Meals App",
    jaDescription: "Flutterで開発したモバイルアプリのデモです。",
    tags: ["Flutter", "Mobile"],
    image: "/images/meals-app-preview.jpg",
    imageAlt: "Meals App video preview",
    imageWidth: 1284,
    imageHeight: 2778,
    video: "/videos/meals_app.mp4",
    github: "https://github.com/Alex2518-9/Meals_app",
  },
];
