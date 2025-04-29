import {texts} from '../../data/text.ts';

const contact = texts.find((item) => item.type === 'contact');
const Contact = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '15rem', marginRight: '9rem', textAlign: 'justify' }}
  >
    <h1>reach out to me</h1>
    <p
    style={{fontSize: '1.3rem'}}
    >
    {contact?.description}
    </p>
  </div>
  );
};

export default Contact;
