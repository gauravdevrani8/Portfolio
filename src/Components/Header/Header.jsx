import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiBracketsCurlyLight } from "react-icons/pi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className=" fixed top-0 left-0 w-[100%] z-50 backdrop-blur-md  shadow-md text-gray-50">
        <nav className="container mx-auto px-4 md:px-28 py-3 md:py-4 flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <h1 className="text-start  "> <span className=" text-3xl text-green-400 "><PiBracketsCurlyLight />
            </span></h1>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex">
            {isOpen ? (
              <FaTimes className="text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu} />
            ) : (
              <FaBars className="text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu} />
            )}
          </div>

          {/* Navigation Links for Large Screens */}
          <ul className="hidden md:flex space-x-10 lg:space-x-16">
            <li className="flex items-center">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="flex items-center">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="flex items-center">
              <Link to="/skills" className="nav-link">Skills</Link>
            </li>
            <li className="flex items-center">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="flex items-center">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          {/* Navigation Links for Small Screens */}
          <ul className={`md:hidden space-y-2 absolute top-16 left-0 w-full bg-black bg-opacity-95 transition-transform duration-300 ${isOpen ? 'block' : 'hidden'}`}>
            <li className="flex items-center justify-center py-2">
              <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="flex items-center justify-center py-2">
              <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            </li>
            <li className="flex items-center justify-center py-2">
              <Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
            </li>
            <li className="flex items-center justify-center py-2">
              <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="flex items-center justify-center py-2">
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>

          {/* Contact Button for Large Screens */}
          <Link to="/contact" className="hidden md:block">
            <button className="border hover:bg-[#368075]  transition duration-300 rounded-full font-poppins text-white py-2 px-6">
              Contact
            </button>
          </Link>
        </nav>
      </header>
      {/* Add padding for the header */}
      <div className="pt-16 md:pt-16"></div>
    </>
  );
}

export default Header;
