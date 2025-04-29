import React from "react";
import { Project } from "../../data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="border border-black/30 rounded-2xl p-4 mb-6 shadow-sm bg-transparent backdrop-blur-sm transition-transform hover:scale-[1.02]">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={project.image}
          alt={project.description}
          className="w-full h-48 object-cover rounded-xl mb-3"
        />
      </a>
      <p className="text-sm text-gray-500">{project.date}</p>
      <p className="text-base font-mono text-black">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
