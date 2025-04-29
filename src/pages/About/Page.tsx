import {texts} from '../../data/text.ts';


const about = texts.find((item) => item.type === 'about');
const About = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '15rem', marginRight: '9rem', textAlign: 'justify' }}
  >
    <h1>about me</h1>
    <p
    style={{ fontSize: '1.3rem'}}
    >{about?.description}</p>
  </div>
  );
};

export default About;
