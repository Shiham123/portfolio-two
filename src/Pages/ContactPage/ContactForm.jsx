import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_se954hh',
        'template_99drvsj',
        form.current,
        '9rjahnHJiJ7GwQWua'
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="form_name" />
        <label>Email</label>
        <input type="email" name="form_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Submit message</button>
      </form>
    </div>
  );
};

export default ContactForm;
