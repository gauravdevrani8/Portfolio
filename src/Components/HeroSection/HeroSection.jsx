import React, { Suspense, lazy } from 'react';
import { Bio } from '../../Data/Data';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import resume from '../../Data/resume.pdf'; 
import { MdFileDownload } from "react-icons/md";
import { TailSpin } from 'react-loader-spinner'; // Example spinner

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <div className="relative border-b border-gray-600 flex flex-col justify-between md:flex-row text-white items-center md:h-[93vh] h-fit md:py-0 overflow-hidden">
      <div className="relative md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left z-20">
        <h1 className="text-4xl font-rajdhani md:text-7xl mb-4">
          Hi, I'm {Bio.name}
        </h1>
        <h2 className="text-xl shine-text md:text-2xl font-semibold mb-8">
          <span className="py-1 font-rajdhani text-3xl md:text-5xl">
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
        <p className="text-lg md:text-xl mb-5 font-rajdhani text-gray-300 max-w-md">
          {Bio.description}
        </p>
        <a href={resume} download="resume.pdf">
          <button className="button s-button border rounded-full flex items-center border-gray-600 text-white hover:text-white hover:scale-95 transition-transform duration-300 ease-in-out py-2 px-4">
            Download Resume
            <span className='border-gray-600 border-2 rounded-full p-2 ml-2 transition-colors duration-300 ease-in-out group-hover:bg-green-500'>
              <MdFileDownload className='animate-bounce text-2xl' />
            </span>
          </button>
        </a>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/gauravdevrani/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin className="text-2xl hover:text-white transition duration-300" />
          </a>
          <a href="https://www.github.com/gauravdevrani8" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub className="text-2xl hover:text-white transition duration-300" />
          </a>
          <a href="mailto:gauravdevrani60@gmail.com" className="icon-link">
            <FaEnvelope className="text-2xl hover:text-white transition duration-300" />
          </a>
        </div>
      </div>

      <div id="spline-section" className="md:w-1/2 w-full h-full">
        <Suspense fallback={<div className="flex justify-center items-center h-full"><TailSpin color="#00BFFF" height={80} width={80} /></div>}>
          <Spline scene="https://prod.spline.design/uFcl6YViSiePvDII/scene.splinecode" />
        </Suspense>
      </div>
    </div>
  );
};

export default HeroSection;
