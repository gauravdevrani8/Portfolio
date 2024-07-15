import React from 'react';
import Spline from '@splinetool/react-spline';
import { Bio } from '../../Data/Data';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import resume from '../../Data/resume.pdf'; 
import { MdFileDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row text-white items-center md:h-[93vh] h-fit px-10 py-10 md:py-0">
      {/* Left Side Content */}
      <div className="relative md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 z-20">
        <h1 className="text-4xl  md:text-8xl font-semibold mb-4">
          <span className='font-satisfy'>Hi, I'm </span> <span className="font-satisfy text-[#368075]">{Bio.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold font-syncopate mb-8">
          A{' '}
          <span className="text-[#9c71f8]  text-3xl">
            <Typewriter
              words={Bio.roles}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-md">
          {Bio.description}
        </p>
        <a href={resume} download="resume.pdf">
          <button className="button s-button border-2 flex border-indigo-500 text-indigo-500 hover:scale-95 hover:duration-700 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded">
            Download CV <MdFileDownload className='text-2xl ml-2' />
          </button>
        </a>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/gauravdevrani/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin className="text-2xl text-indigo-500 hover:text-white transition duration-300" />
          </a>
          <a href="https://www.github.com/gauravdevrani8" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub className="text-2xl text-indigo-500 hover:text-white transition duration-300" />
          </a>
          <a href="mailto:gauravdevrani60@gmail.com" className="icon-link">
            <FaEnvelope className="text-2xl text-indigo-500 hover:text-white transition duration-300" />
          </a>
        </div>
      </div>

      <div className="relative md:w-1/2 md:h-full h-96 p=6 w-screen md:p-0 flex justify-center items-center z-10">
      <Spline scene="https://prod.spline.design/pJcfqg2Rz-MVLWpT/scene.splinecode" />
      </div>
    </div>
  );
};

export default HeroSection;
