import React, { useEffect, useRef } from 'react';
import { Bio } from '../../Data/Data';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import resume from '../../Data/resume.pdf'; 
import { MdFileDownload } from "react-icons/md";
import { gsap } from 'gsap';
import bgImage from '../../assets/01.png'; // Adjust the path as needed

const HeroSection = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descriptionRef = useRef(null);
  const resumeRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 }, // Same start position as descriptionRef
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" } // Same duration and ease as descriptionRef
    );
    gsap.fromTo(
      roleRef.current,
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      resumeRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.9, ease: "power3.out" }
    );
    gsap.fromTo(
      socialIconsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className="relative mt-8 md:mt-0 bg-black flex flex-col justify-start md:justify-center items-center text-white h-screen overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 text-center px-4 md:px-8 mt-8 md:mt-0">
        <h1
          ref={nameRef}
          className="text-4xl font-extrabold md:text-7xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-gray-500"
        >
          Hi, I'm {Bio.name}
        </h1>
        <h2
          ref={roleRef}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          <span className="py-1 shine-text">
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
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl mb-6 font-light text-gray-300 max-w-lg mx-auto"
        >
          {Bio.description}
        </p>
        <a ref={resumeRef} href={resume} download="resume.pdf">
          <button className="flex items-center justify-center py-3 px-6 mx-auto border border-gray-600 rounded-full text-white bg-transparent hover:scale-105 transform transition-transform duration-300 ease-in-out">
            Download Resume
            <span className='ml-3 border border-gray-600 rounded-full p-2 transition-colors duration-300 ease-in-out group-hover:bg-green-500'>
              <MdFileDownload className='text-2xl animate-bounce' />
            </span>
          </button>
        </a>
        <div ref={socialIconsRef} className="flex justify-center space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/gauravdevrani/" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/gauravdevrani8" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-white transition duration-300">
            <FaGithub />
          </a>
          <a href="mailto:gauravdevrani60@gmail.com" className="text-3xl text-gray-300 hover:text-white transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
