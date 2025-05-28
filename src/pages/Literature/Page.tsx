import { texts } from '../../data/text.ts';
import { translations } from '../../data/translations.ts';

const literature = texts.find((item) => item.type === 'literature');

const Literature = () => {
  return (
    <div className="literature-container">
      <h1>my literature</h1>

      <p className="literature-paragraph">
        {literature?.description}
      </p>

      <h3 className="literature-subtitle">my book</h3>
      <p className="literature-paragraph">
        sin título. operaciones de lo visual en la obra de roberto bolaño. 2018
      </p>

      <h3 className="literature-subtitle">my literary translations</h3>
      <ul className="literature-list">
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
