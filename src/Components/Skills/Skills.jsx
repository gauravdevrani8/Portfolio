import React from 'react';
import { HoverEffect } from '../ui/Skillshover';
import { skills } from '../../Data/Data';

export default function Skills() {
  return (
    <div className=" pt-14 text-center mx-auto px-10 relative">
      <h2 className="text-3xl md:text-4xl font-poppins font-extrabold mb-12 relative">
        <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-gray-600">
          SKILLS
        </span>
      </h2>
      <HoverEffect items={skills} />
    </div>
  );
}
