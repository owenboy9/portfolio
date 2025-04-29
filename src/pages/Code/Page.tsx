import {texts} from '../../data/text.ts';

const code = texts.find((item) => item.type === 'code');

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
  </div>
  );
};

export default Code;
