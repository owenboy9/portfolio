import { Project } from "../../data/projects";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="w-[250px] h-[330px] rounded-2xl border-[2px] border-neutral-700 bg-transparent p-4 flex flex-col items-center"
      style={{
            borderRadius: "1rem", // makes sure it really applies
            display: "block",
            boxShadow: "2px 2px 2pxrgba(0, 0, 0, 0.25))", // optional extra
            border: "2.5px dotted rgb(102, 102, 102)", // Tailwind's neutral-700
          }}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        
        <img
          src={project.image}
          alt={project.description}
          className="w-[80px] h-[80px] object-cover rounded-xl mt-4 mx-auto"
          style={{
            borderRadius: "50%", // makes sure it really applies
            display: "block",
            marginTop: "2rem",
          }}
        />
      </a>
      <div className="text-black font-mono text-sm text-center mt-2">
        <p className="text-xs text-gray-600 mb-1"
        style={{ fontSize: '1.3rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
        >{project.date}</p>
        <p
        style={{ fontSize: '1.3rem',  paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
        >{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
