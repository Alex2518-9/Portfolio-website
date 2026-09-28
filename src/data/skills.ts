export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    label: "mobile",
    items: ["Flutter", "Dart"],
  },
  {
    label: "backend_&_data",
    items: ["Node.js", "Python", "PostgreSQL", "Prisma"],
  },
  {
    label: "tools",
    items: ["Git", "GitHub", "Vercel", "Figma", "Playwright", "Jira", "Storybook"],
  },
];
