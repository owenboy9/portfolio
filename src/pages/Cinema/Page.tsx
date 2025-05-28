import { texts } from '../../data/text.ts';
import { projects } from '../../data/projects.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';
import hypnos from "/assets/projects/hypnos.webp";
import hypnos_logo from "/assets/projects/hypnos_logo.webp";
import logo_fim from "/assets/projects/logo_fim.webp";

const filmProjects = projects.filter(p => p.type === 'film');
const cinema = texts.find((item) => item.type === 'cinema');

const Cinema = () => {
  return (
    <div className="cinema-container">
      <h1>my cinema</h1>
      <p className="cinema-description">{cinema?.description}</p>
      
      <h3 className="section-title">film projects</h3>
      <div className="film-projects-grid">
        {filmProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <h3 className="section-title">hypnos theatre</h3>
      <div className="hypnos-container">
        <img
          src={hypnos}
          alt="Hypnos Theatre"
          className="hypnos-image"
        />
        <a href="https://filmimalmo.se/" target='_blank' rel="noopener noreferrer">
          <img
            src={logo_fim}
            alt="fim logo"
            className="hypnos-logo"
          />
        </a>
        <a href="https://hypnostheatre.com/" target='_blank' rel="noopener noreferrer">
          <img
            src={hypnos_logo}
            alt="Hypnos logo"
            className="hypnos-logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Cinema;
