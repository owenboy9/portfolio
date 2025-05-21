import {texts} from '../../data/text.ts';
import {projects} from '../../data/projects.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';
import hypnos from "/assets/projects/hypnos.webp";
import hypnos_logo from "/assets/projects/hypnos_logo.webp";
import logo_fim from "/assets/projects/logo_fim.webp";
import dot_bg from "/assets/projects/dot_bg.avif"; // background image

const filmProjects = projects.filter(p => p.type === 'film');
const cinema = texts.find((item) => item.type === 'cinema');

const Cinema = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '15rem', marginRight: '9rem', textAlign: 'justify' }}
  >
    <h1>my cinema</h1>
    <p style={{ fontSize: '1.3rem'}}
    >{cinema?.description}</p>
    
    <h3 className="text-2xl font-bold mb-4"
    style={{ marginTop: "4rem"}}
    >
      film projects
    </h3>
      <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-x-[3rem] gap-y-[2rem] mt-4">
        {filmProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <h3 className="text-2xl font-bold mb-4"
      style={{ marginTop: "4rem"}}
      >
      hypnos theatre
    </h3>
    <div className="hypnos"
      style={{ display: "flex", flexDirection: "row", 
      alignItems: "center", 
      justifyContent: "center", marginBottom: "1rem", 
      gap: "4rem",
      border: "none",
      borderRadius: "1rem",
      paddingTop: "1rem",
      height: "fit-content",
      backgroundImage: `url(${dot_bg})`,
      backgroundSize: "auto",     // or "contain" if you want the whole image
      backgroundRepeat: "repeat",  // or "no-repeat" depending on the image
       }}
    >
    <img
      src={hypnos}
      alt="Hypnos Theatre"
      className="mb-8 rounded-xl shadow-lg"
      style={{
        width: '40%',
        maxWidth: '800px',
        height: 'auto',
        marginBottom: '1rem',
        borderRadius: '1rem',
      }}
    />
    <a href="https://filmimalmo.se/"
      target='_blank'
      rel="noopener noreferrer"
    >
      <img
        src={logo_fim}
        alt="fim logo"
        className="mb-8 rounded-xl shadow-lg"
        style={{
          width: '4rem',
          marginBottom: '1rem',
        }}
      />
    </a>
    <a href="https://hypnostheatre.com/"
      target='_blank'
      rel="noopener noreferrer"
    >
      <img
        src={hypnos_logo}
        alt="Hypnos logo"
        className="mb-8 rounded-xl shadow-lg"
        style={{
          width: '4rem',
          marginBottom: '1rem',
        }}
      />
    </a>
    </div>
  </div>
  );
};

export default Cinema;
