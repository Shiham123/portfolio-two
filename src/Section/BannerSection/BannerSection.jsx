import { useState } from 'react';
import BannerImg from '../../assets/Svg/banner.svg';
import CVFile from '../../assets/PDF/assignment-2.pdf';

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const BannerSection = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleButtonClick = () => {
    if (!downloaded) {
      const link = document.createElement('a');
      link.href = CVFile;
      link.download = 'assignment-2.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloaded(true);
    }
  };

  return (
    <div className="bg-colorOne dark:bg-colorTwo flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 md:flex md:flex-col mt-[5rem]">
      <div>
        <h1 className="w-2/3 font-playfairDisplay text-3xl md:text-4xl lg:text-5xl font-bold capitalize tracking-widest border-b-[1px] border-colorThree py-4 dark:text-colorSix">
          Shiham Bin Yousuf
        </h1>
        <p className="lg:w-2/3 md:w-full w-full font-playfairDisplay text-2xl text-colorThree font-semibold leading-10 py-12 dark:text-colorSix dark:opacity-70">
          A passionate individual who always thrives to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>

        {/* icons */}
        <div className="flex justify-start gap-8">
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
        <div className="my-[2rem]">
          <button
            onClick={handleButtonClick}
            className="bg-colorTwo dark:bg-colorFive dark:text-colorTwo hover:dark:bg-transparent dark:border-[1px] dark:border-colorFive dark:hover:text-colorSix text-colorSix px-8 py-4 lg:w-2/5 md:w-2/3 w-full font-playfairDisplay font-bold text-2xl tracking-widest capitalize rounded-lg border-[1px] border-colorTwo hover:bg-transparent hover:text-colorTwo duration-200"
          >
            <div className="flex justify-center items-center gap-8">
              <span>Download Resume</span>
            </div>
          </button>
        </div>
      </div>
      <div>
        <img src={BannerImg} width={1300} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
