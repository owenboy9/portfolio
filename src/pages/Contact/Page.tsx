import { texts } from '../../data/text.ts';
import ContactForm from '../../components/ContactForm/ContactForm.tsx';
import linkedinlogo from '/assets/linkedinlogo.png';
import ghlogo from "/assets/projects/ghlogo.png";

const contact = texts.find((item) => item.type === 'contact');

const Contact = () => {
  return (
    <div className="page-container">
      <h1>reach out to me</h1>
      <p className="contact-description">
        {contact?.description}
      </p>

      <div className="contact-logos">
        <a
          href="https://www.linkedin.com/in/owen-kraus9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinlogo}
            alt="LinkedIn"
            className="contact-logo"
          />
        </a>
        <a
          href="https://github.com/owenboy9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ghlogo}
            alt="GitHub"
            className="contact-logo github"
          />
        </a>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
