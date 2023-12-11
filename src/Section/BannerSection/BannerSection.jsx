import BannerImg from '../../assets/Svg/banner.svg';

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const BannerSection = () => {
  return (
    <div className="bg-colorOne flex justify-between items-center gap-4 mt-[5rem]">
      <div>
        <h1 className="w-2/3 font-playfairDisplay text-3xl md:text-4xl lg:text-5xl font-bold capitalize tracking-widest border-b-[1px] border-colorThree py-4">
          Shiham Bin Yousuf
        </h1>
        <p className="w-2/3 font-playfairDisplay text-2xl text-colorThree font-semibold leading-10 py-12">
          A passionate individual who always thrives to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>

        {/* icons */}
        <div>
          <FaGithub />
          <FaLinkedin />
          <FaGoogle />
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
      <div>
        <img src={BannerImg} width={1300} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
