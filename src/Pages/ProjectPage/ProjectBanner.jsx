import Project from '../../assets/Svg/projects_image.svg';

import { DiMongodb, DiNodejs } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const ProjectBanner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex md:flex-col lg:flex lg:flex-row justify-center items-center gap-8 mt-20">
        <div className="lg:w-1/2 md:w-full w-full">
          <img src={Project} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-full w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfairDisplay text-colorTwo dark:text-colorOne py-12 text-center">
            Projects
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-playfairDisplay text-colorTwo dark:text-colorOne py-4 text-center">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create Data Science projects and deploy them
            to web applications using cloud infrastructure.
          </p>
        </div>
      </div>

      {/* Projects */}

      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 my-[10rem]">
        {/* one */}
        <div className="bg-colorThree p-4 rounded-lg h-full">
          <h1 className="font-playfairDisplay text-2xl text-colorOne font-semibold capitalize">
            <span className="border-b-[1px]">Title :</span> Job website
          </h1>
          <p className="font-playfairDisplay text-xl text-colorOne leading-10 my-4 capitalize">
            <span className="border-b-[1px]">Description : </span>this is a full
            stack job app. user can add job post job and create job and applied
            in job to be hired and job creator able to hired developer.
          </p>

          <div className="flex flex-col justify-center items-center gap-8">
            <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize">
              Created on : <span className="font-bold">2023-12-11</span>
            </p>
            <div className="flex gap-4">
              <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize bg-colorTwo hover:bg-transparent border-2 border-colorTwo duration-300 hover:text-colorFive px-6 py-2 rounded-lg">
                <a
                  rel="noopener noreferrer"
                  href="https://assignment-11-26ced.firebaseapp.com/"
                  target="_blank"
                >
                  Live Link
                </a>
              </p>
              <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize bg-colorTwo hover:bg-transparent border-2 border-colorTwo duration-300 hover:text-colorFive px-6 py-2 rounded-lg">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Shiham123/assignment-11-client"
                  target="_blank"
                >
                  Code Link
                </a>
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-playfairDisplay text-2xl text-colorOne font-semibold capitalize">
              Using tech
            </h1>
            <div className="flex justify-center items-center border-2 border-colorTwo m-4 p-4 rounded-lg gap-4">
              <DiMongodb size={70} className="text-[#5bae4a]" />
              <SiExpress size={70} className="text-[#edd62e]" />
              <FaReact size={70} className="text-[#149eca]" />
              <DiNodejs size={70} className="text-[#edd62e]" />
            </div>
          </div>
        </div>

        {/* Two */}
        <div className="bg-colorThree p-4 rounded-lg h-full">
          <h1 className="font-playfairDisplay text-2xl text-colorOne font-semibold capitalize">
            <span className="border-b-[1px]">Title :</span> Tech Website
          </h1>
          <p className="font-playfairDisplay text-xl text-colorOne leading-10 my-4 capitalize">
            <span className="border-b-[1px]">Description : </span>this is a full
            this is full stack based on authentication and also nodejs and
            expressjs
          </p>

          <div className="flex flex-col justify-center items-center gap-8">
            <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize">
              Created on : <span className="font-bold">2023-12-11</span>
            </p>
            <div className="flex gap-4">
              <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize bg-colorTwo hover:bg-transparent border-2 border-colorTwo duration-300 hover:text-colorFive px-6 py-2 rounded-lg">
                <a
                  rel="noopener noreferrer"
                  href="https://tech-project-4435d.web.app/"
                  target="_blank"
                >
                  Live Link
                </a>
              </p>
              <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize bg-colorTwo hover:bg-transparent border-2 border-colorTwo duration-300 hover:text-colorFive px-6 py-2 rounded-lg">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Shiham123/assignment-10-client"
                  target="_blank"
                >
                  Code Link
                </a>
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-playfairDisplay text-2xl text-colorOne font-semibold capitalize">
              Using tech
            </h1>
            <div className="flex justify-center items-center border-2 border-colorTwo m-4 p-4 rounded-lg gap-4">
              <DiMongodb size={70} className="text-[#5bae4a]" />
              <SiExpress size={70} className="text-[#edd62e]" />
              <FaReact size={70} className="text-[#149eca]" />
              <DiNodejs size={70} className="text-[#edd62e]" />
            </div>
          </div>
        </div>

        {/* three */}
        <div className="bg-colorThree p-4 rounded-lg h-full">
          <h1 className="font-playfairDisplay text-2xl text-colorOne font-semibold capitalize">
            <span className="border-b-[1px]">Title :</span> Survey Website
          </h1>
          <p className="font-playfairDisplay text-xl text-colorOne leading-10 my-4 capitalize">
            <span className="border-b-[1px]">Description : </span>this is survey
            website based on mern stack project. user can visit survey like or
            dislike survey add survey add delete survey
          </p>

          <div className="flex flex-col justify-center items-center gap-8">
            <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize">
              Created on : <span className="font-bold">2023-12-11</span>
            </p>
            <div className="flex gap-4">
              <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize bg-colorTwo hover:bg-transparent border-2 border-colorTwo duration-300 hover:text-colorFive px-6 py-2 rounded-lg">
                <a
                  rel="noopener noreferrer"
                  href="https://assignment-12-fa47e.web.app/"
                  target="_blank"
                >
                  Live Link
                </a>
              </p>
              <p className="font-playfairDisplay text-xl text-colorOne leading-10 capitalize bg-colorTwo hover:bg-transparent border-2 border-colorTwo duration-300 hover:text-colorFive px-6 py-2 rounded-lg">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/Shiham123/assignment-12-client"
                  target="_blank"
                >
                  Code Link
                </a>
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-playfairDisplay text-2xl text-colorOne font-semibold capitalize">
              Using tech
            </h1>
            <div className="flex justify-center items-center border-2 border-colorTwo m-4 p-4 rounded-lg gap-4">
              <DiMongodb size={70} className="text-[#5bae4a]" />
              <SiExpress size={70} className="text-[#edd62e]" />
              <FaReact size={70} className="text-[#149eca]" />
              <DiNodejs size={70} className="text-[#edd62e]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
