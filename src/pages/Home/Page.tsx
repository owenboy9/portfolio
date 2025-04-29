import {texts} from '../../data/text.ts';

const home = texts.find((item) => item.type === 'home');

const Home = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '15rem', marginRight: '9rem', textAlign: 'justify'}}
  >
    <h1>owen kraus</h1>
    <p
    style={{ fontSize: '1.3rem'}}>
    {home?.description}
    </p>
  </div>
  );
};

export default Home;
