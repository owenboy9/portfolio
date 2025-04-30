import {texts} from '../../data/text.ts';
import ContactForm from '../../components/ContactForm/ContactForm.tsx';

const contact = texts.find((item) => item.type === 'contact');
const Contact = () => {
  return (
  <div
  style={{ marginTop: '2rem', marginLeft: '15rem', marginRight: '9rem', textAlign: 'justify' }}
  >
    <h1>reach out to me</h1>
    <p
    style={{fontSize: '1.3rem', marginBottom: '5rem'}}
    >
    {contact?.description}
    </p>
    <ContactForm />
  </div>
  );
};

export default Contact;
