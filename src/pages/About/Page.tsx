import { texts } from '../../data/text.ts';

const about = texts.find((item) => item.type === 'about');

const About = () => {
  return (
    <div className="about-container">
      <h1>about me</h1>
      <p className="about-description">{about?.description}</p>
    </div>
  );
};

export default About;
