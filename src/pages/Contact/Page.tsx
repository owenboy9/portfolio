import {texts} from '../../data/text.ts';
import ContactForm from '../../components/ContactForm/ContactForm.tsx';
import linkedinlogo from '/assets/linkedinlogo.png';
import ghlogo from "/assets/projects/ghlogo.png"; 

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
    <div className='logos'
    style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: "2rem", marginTop: "-3rem", gap: "1rem" }}
    >
    <a href="https://www.linkedin.com/in/owen-kraus9"
      target='_blank'
      rel="noopener noreferrer"
    >
      <img src={linkedinlogo} 
        alt="linkedin"
        className="w-[1.8rem]" // smaller size
        style={{ display: "block" }}
      />
    </a>
    <a href="https://github.com/owenboy9"
      target='_blank'
      rel="noopener noreferrer"
    >
      <img src={ghlogo}
        alt="GitHub repository"
        className="w-[2rem]" // smaller size
        style={{ display: "block" }} 
      />
    </a>
    </div>
    <ContactForm />
  </div>
  );
};

export default Contact;
