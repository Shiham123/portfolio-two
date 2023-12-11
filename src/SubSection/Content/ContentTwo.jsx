import { DiMongodb, DiNodejs } from 'react-icons/di';
import { SiExpress, SiPostman, SiPowershell, SiFirebase } from 'react-icons/si';
import { RiPassValidFill } from 'react-icons/ri';
import { FaDatabase } from 'react-icons/fa';
import Backend from '../../assets/backend.png';

const ContentTwo = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-center lg:items-center gap-8 my-[10rem]">
      <div className="w-full md:w-full lg:w-1/2">
        <img src={Backend} className="object-center" alt="" />
      </div>

      {/* left */}
      <div className="w-full md:w-full lg:w-1/2">
        <h1 className="text-5xl font-playfairDisplay capitalize tracking-widest text-colorTwo dark:text-colorFive border-b-[1px] border-colorTwo dark:border-colorFive w-fit py-4">
          Backend development
        </h1>

        <div className="flex justify-start gap-8 my-12">
          <DiMongodb size={70} className="text-[#5bae4a]" />
          <DiNodejs size={70} className="text-[#edd62e]" />
          <SiExpress size={70} className="text-[#edd62e]" />
          <SiPostman size={70} className="text-[#ff6c37]" />
          <FaDatabase size={70} className="text-[#00000]" />
          <SiPowershell size={70} className="text-[#3e3e3e]" />
          <SiFirebase size={70} className="text-[#ffcc31]" />
          <RiPassValidFill size={70} className="text-green-900" />
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

export default ContentTwo;
