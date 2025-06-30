// src/data/projects.ts

import cakery from "/assets/projects/cakery.jpg";
import casino from "/assets/projects/casino.png";
import mysite from "/assets/projects/mysite.jpeg";
import logo_fim from "assets/projects/logo_fim.webp";
import fleshmatterslong from "/assets/projects/fleshmatterslong.png";
import fleshmattersshort from "/assets/projects/fleshmattersshort.png";
import resume from "/assets/projects/resume.png";
import arduino from "/assets/projects/arduino.png";
import spin from "/assets/projects/spin.png";

export interface Project {
  date: string;
  description: string;
  link: string;
  image: string;
  type: "code" | "film";
  ghlink: string;
}

export const projects: Project[] = [
  {
    date: "2025",
    description: "a group project for an independent film association website",
    link: "https://film-i-malmo.vercel.app/",
    ghlink: "https://github.com/owenboy9/film-i-malmo",
    image: logo_fim,
    type: "code",
  },
  {
    date: "2025",
    description: "a simple cute bakery-themed web project",
    link: "https://owenboy9.github.io/cakery/",
    ghlink: "https://github.com/owenboy9/cakery",
    image: cakery,
    type: "code",
  },
  {
    date: "2025",
    description: "bubbly daily planner to help trick procrastination (sound). add activities in the calendar to be able to use the spinning wheel",
    link: "https://zereis.github.io/Event-planner/#/spin",
    ghlink: "https://github.com/Zereis/Event-planner",
    image: spin,
    type: "code",
  },
  {
    date: "2025",
    description: "casino slot machine — a fun casino-themed web project (sound). test winning effects by pressing '1' or '2' or '3'",
    link: "https://owenboy9.github.io/casino/",
    ghlink: "https://github.com/owenboy9/casino",
    image: casino,
    type: "code",
  },
  {
    date: "2025",
    description: "my resume website",
    link: "https://owenboy9.github.io/frontend-exercises/",
    ghlink: "https://github.com/owenboy9/frontend-exercises",
    image: resume,
    type: "code",
  },
  {
    date: "2024",
    description: "my poetic gender identity website",
    link: "https://owenboy9.github.io/my-site/",
    ghlink: "https://github.com/owenboy9/my-site",
    image: mysite,
    type: "code",
  },
  {
    date: "2024",
    description: "gui and test flow for a research project at arduino",
    link: "https://owenboy9.github.io/arduinogui/",
    ghlink: "https://github.com/dcuartielles/temperature_chamber",
    image: arduino,
    type: "code",
  },
  {
    date: "2022",
    description: "flesh matters: short film, unabridged version",
    link: "https://www.youtube.com/watch?v=6Pxib8WEsRs",
    ghlink: "",
    image: fleshmatterslong,
    type: "film",
  },
  {
    date: "2023",
    description: "flesh matters: short film, festival version",
    link: "https://www.youtube.com/watch?v=WeAi7Yrtfic&t=6s",
    ghlink: "",
    image: fleshmattersshort,
    type: "film",
  },
];
