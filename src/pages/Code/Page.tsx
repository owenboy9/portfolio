import { texts } from '../../data/text.ts';
import { projects } from '../../data/projects.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';

const code = texts.find((item) => item.type === 'code');
const codeProjects = projects.filter(p => p.type === 'code');

const Code = () => {
  return (
    <div className="page-container">
      <h1>my code</h1>
      <p className="code-description">{code?.description}</p>

      <h3 className="section-title">code projects</h3>
      <div className="code-projects-grid">
        {codeProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Code;
