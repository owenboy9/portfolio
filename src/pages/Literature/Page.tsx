import {texts} from '../../data/text.ts';

const literature = texts.find((item) => item.type === 'literature');

const Literature = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '5rem', marginRight: '9rem', textAlign: 'justify' }}
  >
    <h1>my literature</h1>
    <p
    style={{ fontSize: '1.3rem'}}>
      {literature?.description}
    </p>
  </div>
  );
};

export default Literature;
