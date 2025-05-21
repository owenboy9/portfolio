import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

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
        body: JSON.stringify({
          email,
          name,
          message
        })
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
    <div className="flex flex-col items-center px-[10rem] pt-8 pb-12 text-black font-[inherit]">
      <form
        onSubmit={submitForm}
        className="w-full flex flex-col items-center px-4 gap-y-[1rem]"
      >
        <input
          type="text"
          placeholder="your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-[80%] h-[3rem] text-lg p-3 my-3 rounded-md border-[2px] border-dotted border-black text-center font-[inherit] placeholder:text-[black]
            transition-transform duration-300 hover:scale-[1.03]`}
          style={{
            borderRadius: "1rem",
            fontSize: '1.1rem',
          }}
        />
        <input
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-[80%] h-[3rem] text-lg p-3 my-3 rounded-md border-[2px] border-dotted border-black text-center font-[inherit] placeholder:text-[black]
            transition-transform duration-300 hover:scale-[1.03]`}
          style={{
            borderRadius: "1rem",
            fontSize: '1.1rem',
          }}
        />
        <textarea
          placeholder="your message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          readOnly={isSubmitted}
          className={`w-[80%] h-[13rem] text-lg py-5 px-4 my-4 rounded-xl border-[2px] border-dotted border-black text-center font-[inherit] placeholder:text-[black]
          transition-transform duration-300 hover:scale-[1.03] resize-none h-48`}
          style={{
            borderRadius: "1rem",
            textAlign: "center",
            paddingTop: "3rem",
            fontSize: '1.1rem',
          }}
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 text-lg text-[black]rounded border-[2px] border-dotted border-black font-[inherit] hover:scale-[1.05] transition-transform duration-200"
          style={{
            borderRadius: "0.5rem",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
