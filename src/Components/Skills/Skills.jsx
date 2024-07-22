import React from 'react';
import { HoverEffect } from '../ui/Skillshover';
import { skills } from '../../Data/Data';
export default function Skills() {
  return (
    <div className="bg-transparent border-b border-gray-600 pt-14 text-center mx-auto px-10">
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-satisfy relative inline-block text-gray-800">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
    SKILLS
  </span>
  <div className="absolute inset-0 w-full h-full border border-gray-300 rounded-lg -z-10 transform rotate-2"></div>
</h2>
      <HoverEffect items={skills} />
      
    </div>
  );
}
