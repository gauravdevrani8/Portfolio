import React from 'react';
import { Bio } from '../../Data/Data';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import lottieAnimation from '../../assets/Animation.json'; 
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import resume from '../../Data/resume.pdf'; 
import { MdFileDownload } from "react-icons/md";
import backgroundVideo from '../../assets/background3.mp4'; // Import the video file

const HeroSection = () => {
  return (
    <div className="relative flex flex-col w-full md:flex-row bg-black  text-white items-center h-[93vh] px-10 py-10 md:py-0">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>
      
      <div className="relative md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 z-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-[#FFBE98]">{Bio.name}</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-light mb-8">
          A{' '}
          <span className="text-indigo-500 font-bold text-3xl">
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
      <div className="relative md:w-1/2 flex justify-center items-center md:items-end z-20">
        <Lottie animationData={lottieAnimation} className="w-80 h-80 md:w-[70vw] md:h-[70vh]" />
      </div>
    </div>
  );
};

export default HeroSection;
