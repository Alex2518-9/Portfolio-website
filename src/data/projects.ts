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
    image: "/images/snowray.png",
    imageAlt: "Snowray logo",
    imageWidth: 1640,
    imageHeight: 468,
    website: "https://docs.b2ihealthcare.com/snowray",
    featured: true,
  },
  {
    name: "Japan World",
    file: "japan-world.tsx",
    description: "A website exploring Japan and its culture.",
    jaName: "Japan World",
    jaDescription: "日本とその文化を紹介するWebサイトです。",
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
    description: "A Flutter mobile app demo for exploring recipes and meal ideas.",
    jaName: "Meals App",
    jaDescription: "レシピや食事アイデアを探せるFlutter製モバイルアプリのデモです。",
    tags: ["Flutter", "Mobile"],
    image: "/images/meals-app-preview.jpg",
    imageAlt: "Meals App video preview",
    imageWidth: 1284,
    imageHeight: 2778,
    video: "/videos/meals_app.mp4",
    github: "https://github.com/Alex2518-9/Meals_app",
  },
  {
    name: "Rock Paper Scissors",
    file: "rock-scissors-paper.tsx",
    description: "A playful browser game built with React.",
    jaName: "Rock Paper Scissors",
    jaDescription: "Reactで作った、遊び心あふれるブラウザゲームです。",
    tags: ["React", "Game", "Frontend"],
    image: "/images/rock-scissors-paper.png",
    imageAlt: "Rock Paper Scissors game preview",
    imageWidth: 1600,
    imageHeight: 1200,
    website: "https://rock-paper-scissor-a.vercel.app/",
  },
];
