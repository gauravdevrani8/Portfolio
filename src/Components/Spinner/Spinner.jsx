// Components/Loader/Loader.js

import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#121316] z-50">
     <HashLoader color="#ffffff" 
     size={150} />
    </div>
  );
};

export default Loader;
