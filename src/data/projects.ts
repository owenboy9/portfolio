// src/data/projects.ts

export interface Project {
  date: string;
  description: string;
  link: string;
  type: "code" | "film";
}

export const projects: Project[] = [
  {
    date: "2025",
    description: "a simple cute bakery-themed web project",
    link: "https://owenboy9.github.io/cakery/",
    type: "code",
  },
  {
    date: "2025",
    description: "casino slot machine — a fun casino-themed web project",
    link: "https://owenboy9.github.io/casino/",
    type: "code",
  },
  {
    date: "2025",
    description: "my resume web site",
    link: "https://owenboy9.github.io/frontend-exercises/",
    type: "code",
  },
  {
    date: "2024",
    description: "my poetic gender identity web site",
    link: "https://owenboy9.github.io/my-site/",
    type: "code",
  },
  {
    date: "2022",
    description: "flesh matters: short film, unabridged version",
    link: "https://www.youtube.com/watch?v=WeAi7Yrtfic&t=6s",
    type: "film",
  },
  {
    date: "2023",
    description: "flesh matters: short film, film festival version",
    link: "https://www.youtube.com/watch?v=6Pxib8WEsRs",
    type: "film",
  },
];
