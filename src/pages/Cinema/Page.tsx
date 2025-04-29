import {texts} from '../../data/text.ts';
import {projects} from '../../data/projects.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';

const filmProjects = projects.filter(p => p.type === 'film');
const cinema = texts.find((item) => item.type === 'cinema');

const Cinema = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '5rem', marginRight: '9rem', textAlign: 'justify' }}
  >
    <h1>my cinema</h1>
    <p style={{ fontSize: '1.3rem'}}
    >{cinema?.description}</p>
    <h3 className="text-2xl font-bold mb-4">
      film projects
    </h3>
    {filmProjects.map((project, idx) => (
      <ProjectCard key={idx} project={project} />
      ))
    }
  </div>
  );
};

export default Cinema;
