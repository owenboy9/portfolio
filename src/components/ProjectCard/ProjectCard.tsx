import { Project } from "../../data/projects";
import ghlogo from "/assets/projects/ghlogo.png"; 
import dot_bg from "/assets/projects/dot_bg.avif"; // background image


interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="w-[250px] h-[330px] rounded-2xl p-4 flex flex-col items-center
                transition-all duration-300
                hover:border-[2.5px] hover:[border-style:dotted] hover:border-[rgb(102,102,102)]"
      style={{
        border: "none",
        borderRadius: "1rem",
        height: "fit-content",
        paddingBottom: "1rem",
        backgroundImage: `url(${dot_bg})`,
        backgroundSize: "cover",     // or "contain" if you want the whole image
        backgroundRepeat: "repeat",  // or "no-repeat" depending on the image
        backgroundPosition: "center",
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
        style={{ fontSize: '1.2rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
        >{project.date}</p>
        <p
        style={{ fontSize: '1.2rem',  paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
        >{project.description}</p>
        {/* GitHub logo (conditionally rendered) */}
        {project.ghlink && (
          <a
            href={project.ghlink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex justify-center"
          >
            <img
              src={ghlogo}
              alt="GitHub repository"
              className="w-[2rem]" // smaller size
              style={{ display: "block" }}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
