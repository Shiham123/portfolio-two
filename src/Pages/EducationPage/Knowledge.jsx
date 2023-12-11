import SectionTitle from '../../SubSection/SectionTitle/SectionTitle';

import DataStructure from '../../assets/11668546_20943629-removebg-preview.png';
import Algorithms from '../../assets/algorithm.png';

const Knowledge = () => {
  const youtubeLink = `https://www.youtube.com/@Codevolution/videos`;

  return (
    <div>
      <SectionTitle title="Knowledge" />

      <div className="flex flex-col justify-center items-center gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-12 my-[10rem]">
        {/* one */}
        <div className="border-[1px] border-colorTwo shadow-lg shadow-colorTwo p-8 rounded-lg h-full hover:scale-110 duration-300">
          <div className="w-full object-contain">
            <img
              src={DataStructure}
              width={500}
              className="w-full object-contain"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-playfairDisplay text-center my-12 text-colorTwo">
              Data Structure JS
            </h1>
            <p className="text-2xl font-playfairDisplay text-center my-4 text-colorTwo">
              From YouTuber{' '}
              <span className="font-extrabold">
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                  Codevolution
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* two */}
        <div className="border-[1px] border-colorTwo shadow-lg shadow-colorTwo p-8 rounded-lg h-full hover:scale-110 duration-300">
          <div className="w-full object-contain">
            <img
              src={Algorithms}
              width={500}
              className="w-full object-contain"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-3xl font-playfairDisplay text-center my-12 text-colorTwo">
              Algorithms JS
            </h1>
            <p className="text-2xl font-playfairDisplay text-center my-4 text-colorTwo">
              From YouTuber{' '}
              <span className="font-extrabold">
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                  Codevolution
                </a>
              </span>
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Knowledge;
