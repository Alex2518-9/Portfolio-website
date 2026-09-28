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
  {
    name: "Rock Paper Scissors",
    file: "rock-scissors-paper.tsx",
    description: "A playful browser game built in React.",
    jaName: "Rock Paper Scissors",
    jaDescription: "Reactで作った、遊び心のあるブラウザゲームです。",
    tags: ["React", "Game", "Frontend"],
    image: "/images/rock-scissors-paper.png",
    imageAlt: "Rock Paper Scissors game preview",
    imageWidth: 1600,
    imageHeight: 1200,
    website: "https://rock-paper-scissor-a.vercel.app/",
  },
];
