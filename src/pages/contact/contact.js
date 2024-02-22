
// const Contact = () => {
//   return (
//     <div>
//         <h1 className="header">CONTACT</h1>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tcqkd1a', 'template_vmpr7sx', form.current, 'ykx-z8huACquKZeJ6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <h1 className="header">CONTACT</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="text" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default Contact;