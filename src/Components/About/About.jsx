import React from 'react';
import Animation from '../../assets/Animation2.json';
import Lottie from 'lottie-react';
import { education } from '../../Data/Data';
const About = () => {
  return (
    <div className="min-h-96 flex flex-col md:flex-row pt-16 justify-between items-center bg-black text-white">
      <div className="w-full md:w-1/2 hidden md:flex justify-center items-center mb-8 md:mb-0">
        <Lottie animationData={Animation} className="w-80 h-80 md:w-[60vw] md:h-[60vh]" />
      </div>
      <div className="w-full md:w-1/2 max-w-3xl py-8 md:pl-10 space-y-6">
        <h1 className="text-4xl font-bold  mb-4 ">About <span className='text-[#FFBE98]'>Me</span></h1>
        <p className="text-lg leading-relaxed">
          I'm a frontend developer skilled in crafting responsive design, ensuring seamless experiences across all devices and optimized websites.
        </p>
        <div className="border-t border-gray-600"></div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">My <i className='text-red-500'> Learnings</i></h2>
          <ul className="list-disc list-inside space-y-5 text-lg leading-relaxed">
            <li>Familiar with modern frontend technologies such as SASS, Material-UI, CSS-in-JS, Framer Motion, Three.js, and Webpacks.</li>
            <li>Basic knowledge of UI/UX design using tools like Figma, Adobe XD, and Canva.</li>
            <li>Strong understanding of APIs for building dynamic and interactive web applications.</li>
          </ul>
        </div>
        <div className="border-t border-gray-600 mt-8"></div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">My<i className='text-red-500'> Education</i></h2>
          <ul className="list-none space-y-4 text-lg leading-relaxed">
            {education.map((edu, index) => (
              <li key={index}>
                <h3 className="text-xl font-bold">{edu.college}</h3>
                <p className="text-gray-400">{edu.date}</p>
                <p>{edu.degree}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
