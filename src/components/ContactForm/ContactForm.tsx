import { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !message) {
      alert("you have missed some fields here ♡");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mqaqjvdz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, name, message })
      });

      if (response.ok) {
        setEmail("♡");
        setName("♡");
        setMessage("thank you for your message\n♡");
        setIsSubmitted(true);
        setIsThankYou(true);

        setTimeout(() => {
          setEmail("");
          setName("");
          setMessage("");
          setIsSubmitted(false);
          setIsThankYou(false);
        }, 3000);
      } else {
        alert("something went wrong. please try again ♡");
      }
    } catch (err) {
      console.error("Form error:", err);
      alert("something went wrong. please try again ♡");
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={submitForm} className="contact-form">
        <input
          type="text"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-input"
        />
        <input
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-input"
        />
        <textarea
          placeholder="your message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          readOnly={isSubmitted}
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
