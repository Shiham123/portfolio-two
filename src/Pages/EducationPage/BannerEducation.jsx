import Education from '../../assets/Svg/education.svg';

const BannerEducation = () => {
  return (
    <div className="flex justify-center items-center gap-8 mt-20">
      <div className="w-1/2">
        <img src={Education} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfairDisplay text-colorTwo dark:text-colorOne py-12 text-center">
          Education
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-playfairDisplay text-colorTwo dark:text-colorOne py-4 text-center">
          Basic education and certification
        </p>
      </div>
    </div>
  );
};

export default BannerEducation;
