import SectionTitle from '../../SubSection/SectionTitle/SectionTitle';

const DegreeSection = () => {
  return (
    <div>
      <SectionTitle title="Degrees Received" />

      <div className="border-[1px] border-colorTwo rounded-lg my-12">
        <div className="bg-[#84b7d5] p-12 rounded-t-lg">
          <h1 className="font-playfairDisplay text-colorTwo text-3xl font-semibold flex justify-between">
            Kayamut Ullah govt collage{' '}
            <span className="text-2xl">2016-2020</span>
          </h1>
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            In Higher secondary school certificate (HSC)
          </p>
        </div>

        <div className="py-12 px-20">
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            I have studied here biology chemistry physics
          </p>
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            GPA : 4.17
          </p>
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            In Science Department
          </p>
        </div>
      </div>

      <div className="border-[1px] border-colorTwo rounded-lg my-12">
        <div className="bg-[#84b7d5] p-12 rounded-t-lg">
          <h1 className="font-playfairDisplay text-colorTwo text-3xl font-semibold flex justify-between">
            Backshigonj govt high school{' '}
            <span className="text-2xl">2013-2015</span>
          </h1>
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            Secondary School Certificate (SSC)
          </p>
        </div>

        <div className="py-12 px-20">
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            I have studied here biology chemistry physics
          </p>
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            GPA : 4.17
          </p>
          <p className="font-playfairDisplay text-colorTwo text-xl font-semibold my-4">
            In Science Department
          </p>
        </div>
      </div>
    </div>
  );
};

export default DegreeSection;
