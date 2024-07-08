import React from 'react';
import { HoverEffect } from '../ui/Skillshover';
import { skills } from '../../Data/Data';
export default function Skills() {
  return (
    <div className="bg-transparent pt-14 text-center mx-auto px-10">
      <h1 className='text-white underline -rotate-3 font-bold font-satisfy text-4xl'>S <span className='text-green-300'>kills</span></h1>
      <HoverEffect items={skills} />
      
    </div>
  );
}
