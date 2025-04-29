import {texts} from '../../data/text.ts';
import {projects} from '../../data/projects.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';

const code = texts.find((item) => item.type === 'code');
const codeProjects = projects.filter(p => p.type === 'code');

const Code = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '5rem', marginRight: '9rem', textAlign: 'justify'  }}
  >
    <h1>my code</h1>
    <p
    style={{ fontSize: '1.3rem'}}
    >
    {code?.description}
    </p>
    <h3 className="text-2xl font-bold mb-4">
      code projects
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-x-[1.rem] gap-y-[2rem] mt-4">
      {codeProjects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
        ))
      }
    </div>
  </div>
  );
};

export default Code;
