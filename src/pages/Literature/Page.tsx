import {texts} from '../../data/text.ts';
import { translations } from '../../data/translations.ts';

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
    <h3>my book</h3>
    <p style={{ fontSize: '1.3rem'}}>sin título. operaciones de lo visual en la obra de roberto bolaño. 2018</p>
    <h3>my literary translations</h3>
    <ul style={{ fontSize: '1.3rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
        {translations.map((t, index) => (
          <li key={index}>
            {t.author}, {t.title}. {t.year}, from {t.from.toLowerCase()}, {t.genre}
          </li>
        ))}
      </ul>
  </div>
  );
};

export default Literature;
