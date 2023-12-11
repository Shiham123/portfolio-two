import BannerImg from '../../assets/Svg/banner.svg';

import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const BannerSection = () => {
  return (
    <div className="bg-colorOne dark:bg-colorFour flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 md:flex md:flex-col mt-[5rem]">
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
          <FaGithub
            size={50}
            color="black"
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <FaLinkedin
            color="#6c99e3"
            size={50}
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <FaGoogle
            color="#326c03"
            size={50}
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <FaTwitter
            color="#6c99e3"
            size={50}
            className="cursor-pointer hover:scale-110 duration-300"
          />
          <FaFacebook
            color="#1877f2"
            size={50}
            className="cursor-pointer hover:scale-110 duration-300 "
          />
          <FaInstagram
            color="#e4405f"
            size={50}
            className="cursor-pointer hover:scale-110 duration-300"
          />
        </div>
        <div className="my-[2rem]">
          <button className="bg-colorTwo dark:bg-colorFive dark:text-colorTwo hover:dark:bg-transparent dark:border-[1px] dark:border-colorFive dark:hover:text-colorSix text-colorSix px-8 py-4 lg:w-2/5 md:w-2/3 w-full font-playfairDisplay font-bold text-2xl tracking-widest capitalize rounded-lg border-[1px] border-colorTwo hover:bg-transparent hover:text-colorTwo duration-200">
            <div className="flex justify-center items-center gap-8">
              <FaArrowRight />
              <span>My github</span>
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
