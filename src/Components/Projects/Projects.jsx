import React from 'react';
import { projects } from '../../Data/Data';

const Projects = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-36 text-white">
      
      <div className="container mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-satisfy underline -rotate-3">Pro <span className='text-green-300'>jects</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className=" p-4 rounded-bl-full rounded-tr-full rounded-br-full bg-[#121316] shadow-lg border border-gray-700 hover:border-gray-400 transition-colors duration-300">
              <img src={project.image} alt={project.title} className="w-full hover:scale-95 transition-transform duration-700 h-40 object-cover mb-4 " />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.date}</p>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-black border text-white px-3 py-1 rounded border-gray-700 text-sm">{tag}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-blue-300 transition-colors duration-300">GitHub</a>
                <a href={project.webapp} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
