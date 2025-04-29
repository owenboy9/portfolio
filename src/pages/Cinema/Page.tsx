import {texts} from '../../data/text.ts';


const cinema = texts.find((item) => item.type === 'cinema');

const Cinema = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '5rem', marginRight: '9rem', textAlign: 'justify' }}
  >
    <h1>my cinema</h1>
    <p style={{ fontSize: '1.3rem'}}
    >{cinema?.description}</p>
  </div>
  );
};

export default Cinema;
