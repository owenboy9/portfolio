// src/components/ProjectCard/ProjectCard.tsx
import React from "react";
import {Project} from '../../data/projects.ts';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-black/10 rounded-lg p-4 mb-4 hover:shadow-md transition-all hover:scale-[1.02]"
    >
      <p className="text-sm text-gray-500">{project.date}</p>
      <p className="text-base font-mono text-black">{project.description}</p>
    </a>
  );
};

export default ProjectCard;
