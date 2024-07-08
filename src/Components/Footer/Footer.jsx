import React from "react";
const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold">Let's Connect</h2>
              <p className="mt-2 text-lg">Feel free to reach out to me on any of my social media platforms or via email.</p>
            </div>
            <div className="flex text-white space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 my-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2024 Gaurav Devrani All rights reserved.</p>
            <p>Designed & Built by Gaurav Devrani</p>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
  