import OwnerImg from '../../assets/Owner.png';

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const ContactBanner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row justify-center items-center gap-8 mt-20">
        <div className="lg:w-1/2 md:w-full w-full">
          <img
            src={OwnerImg}
            alt=""
            className="border-2 border-colorTwo rounded-full dark:border-colorFive"
          />
        </div>
        <div className="lg:w-1/2 md:w-full w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfairDisplay text-colorTwo dark:text-colorOne py-12 text-center">
            Contact Me
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-playfairDisplay text-colorTwo dark:text-colorOne py-4 text-center opacity-70 my-8">
            I Am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you build frontend and
            backend based on MERN stack technology. Feel free to contact me.
          </p>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Shiham123"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub
                size={50}
                color="black"
                className="cursor-pointer hover:scale-110 duration-300"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shiham-bin-yousuf-1094841bb/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin
                color="#6c99e3"
                size={50}
                className="cursor-pointer hover:scale-110 duration-300"
              />
            </a>

            <a
              href="mailto:shiham36651786@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGoogle
                color="#326c03"
                size={50}
                className="cursor-pointer hover:scale-110 duration-300"
              />
            </a>

            <a
              href="https://twitter.com/ShihamUsuf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter
                color="#6c99e3"
                size={50}
                className="cursor-pointer hover:scale-110 duration-300"
              />
            </a>

            <a
              href="https://www.facebook.com/fairoz.rahaman.1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook
                color="#1877f2"
                size={50}
                className="cursor-pointer hover:scale-110 duration-300 "
              />
            </a>

            <a
              href="https://www.instagram.com/shihamusuf/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram
                color="#e4405f"
                size={50}
                className="cursor-pointer hover:scale-110 duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
