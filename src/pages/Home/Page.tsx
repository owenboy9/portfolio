import { texts } from '../../data/text.ts';

const home = texts.find((item) => item.type === 'home');

const Home = () => {
  return (
    <div className="home-container">
      <h1>owen kraus</h1>
      <p className="home-description">
        {home?.description}
      </p>
    </div>
  );
};

export default Home;
