import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

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
          Swal.fire('SweetAlert2 is working!');
          form.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="my-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-caveat font-bold text-center my-12 py-12">
        Contact form
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row lg:flex-row bg-colorSix dark:bg-colorSeven p-12 gap-4 rounded-lg">
          <div className="w-1/2">
            <div className="flex flex-col gap-4">
              <label className="text-3xl font-playfairDisplay font-semibold text-colorTwo dark:text-colorOne">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="type your name"
                className="text-xl font-playfairDisplay font-light outline-none border-[1px] border-colorTwo rounded-lg p-4 dark:border-colorFive"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-4">
              <label className="text-3xl font-playfairDisplay font-semibold text-colorTwo dark:text-colorOne">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="type your email here"
                className="text-xl font-playfairDisplay font-light outline-none border-[1px] border-colorTwo rounded-lg p-4 dark:border-colorFive"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col md:flex-row lg:flex-row bg-colorSix dark:bg-colorSeven p-12">
          <div className="w-full">
            <div className="flex flex-col gap-4">
              <label className="text-3xl font-playfairDisplay font-semibold text-colorTwo dark:text-colorOne">
                Message
              </label>
              <textarea
                name="message"
                placeholder="type your message here"
                className="text-xl font-playfairDisplay font-light outline-none border-[1px] border-colorTwo rounded-lg p-4 dark:border-colorFive"
              />
            </div>
          </div>
        </div>

        <button
          className="w-full bg-colorTwo hover:bg-transparent hover:text-colorTwo border-[1px] border-colorTwo dark:bg-colorFive dark:text-colorTwo font-playfairDisplay dark:border-[1px] dark:border-colorFive dark:hover:bg-transparent dark:hover:text-colorFive duration-200 text-colorOne py-8 rounded-lg text-3xl md:text-4xl lg:text-5xl my-4"
          type="submit"
        >
          Submit message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
