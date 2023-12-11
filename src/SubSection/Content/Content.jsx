import { SiTailwindcss, SiSass } from 'react-icons/si';
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNpm } from 'react-icons/fa';
import FullStack from '../../assets/Svg/fullStack.svg';

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-center lg:items-center gap-8 my-[10rem]">
      <div className="w-full md:w-full lg:w-1/2">
        <img src={FullStack} className="object-center" alt="" />
      </div>

      {/* left */}
      <div className="w-full md:w-full lg:w-1/2">
        <h1 className="text-5xl font-playfairDisplay capitalize tracking-widest text-colorTwo dark:text-colorFive border-b-[1px] border-colorTwo dark:border-colorFive w-fit py-4">
          Frontend development
        </h1>

        <div className="flex justify-start gap-8 my-12">
          <FaHtml5 size={70} className="text-[#f1652a]" />
          <FaCss3 size={70} className="text-[#1b73ba]" />
          <SiSass size={70} className="text-[#c95c95]" />
          <FaBootstrap size={70} className="text-[#1d2a72]" />
          <SiTailwindcss size={70} className="text-[#38bdf8]" />
          <FaJs size={70} className="text-[#edd62e]" />
          <FaNpm size={70} className="text-[#e32e37]" />
        </div>
        <p className="w-full md:w-full lg:w-4/5 font-playfairDisplay text-2xl tracking-widest leading-10 text-colorTwo dark:text-colorSix dark:opacity-80">
          Certainly! It seems like there might be a small typo in your request.
          Assuming you meant frontend developer. I&apos;ll be happy to help you
          with some content. Could you please provide more specific information
          about what you need? Are you looking for content for a personal
          portfolio, a resume, or perhaps something else? Let me know so I can
          tailor the content accordingly.
        </p>
        {/* Icons */}
      </div>
    </div>
  );
};

export default Content;
