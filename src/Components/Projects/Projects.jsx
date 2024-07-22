import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from '../../Data/Data';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.2, 
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top bottom-=100px', 
          end: 'bottom top',
          toggleActions: 'play none none reverse' 
        }
      }
    );
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 lg:px-36 text-white">
      <div className="container text-center mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-satisfy relative inline-block text-gray-800">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
    PROJECTS
  </span>
  <div className="absolute inset-0 w-full h-full border border-gray-300 rounded-lg -z-10 transform rotate-2"></div>
</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative p-6 lg:p-2 font-syncopate rounded-xl bg-[#1b1c202e] shadow-xl  transition-all duration-300 project-card"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-60 lg:h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-65 opacity-0 hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.date}</p>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-4 justify-center">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-black border text-white px-4 py-2 rounded-full border-gray-700 text-sm lg:text-base">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-red-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.webapp} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
