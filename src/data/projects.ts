// src/data/projects.ts

import cakery from "/assets/projects/cakery.png";
import casino from "/assets/projects/casino.png";
import mysite from "/assets/projects/mysite.png";
import fleshmatterslong from "/assets/projects/fleshmatterslong.png";
import fleshmattersshort from "/assets/projects/fleshmattersshort.png";
import resume from "/assets/projects/resume.png";
import arduino from "/assets/projects/arduino.png";

export interface Project {
  date: string;
  description: string;
  link: string;
  image: string;
  type: "code" | "film";
}

export const projects: Project[] = [
  {
    date: "2025",
    description: "a simple cute bakery-themed web project",
    link: "https://owenboy9.github.io/cakery/",
    image: cakery,
    type: "code",
  },
  {
    date: "2025",
    description: "casino slot machine — a fun casino-themed web project",
    link: "https://owenboy9.github.io/casino/",
    image: casino,
    type: "code",
  },
  {
    date: "2025",
    description: "my resume website",
    link: "https://owenboy9.github.io/frontend-exercises/",
    image: resume,
    type: "code",
  },
  {
    date: "2024",
    description: "my poetic gender identity website",
    link: "https://owenboy9.github.io/my-site/",
    image: mysite,
    type: "code",
  },
  {
    date: "2022",
    description: "flesh matters: short film, unabridged version",
    link: "https://www.youtube.com/watch?v=6Pxib8WEsRs",
    image: fleshmatterslong,
    type: "film",
  },
  {
    date: "2023",
    description: "flesh matters: short film, film festival version",
    link: "https://www.youtube.com/watch?v=WeAi7Yrtfic&t=6s",
    image: fleshmattersshort,
    type: "film",
  },
];
