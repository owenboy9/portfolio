import { Project } from "../../data/projects";
import ghlogo from "/assets/projects/ghlogo.png"; 


interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="project-card">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link"
      >
        <img
          src={project.image}
          alt={project.description}
          className="project-card-image"
        />
      </a>
      <div className="project-card-text">
        <p className="project-card-date">{project.date}</p>
        <p className="project-card-description">{project.description}</p>
        {project.ghlink && (
          <a
            href={project.ghlink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-ghlink"
          >
            <img
              src={ghlogo}
              alt="GitHub repository"
              className="project-card-ghlogo"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
