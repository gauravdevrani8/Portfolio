import React from 'react';
import contactImg from '../../assets/contact.svg';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row lg:gap-24 items-center justify-center py-6">
      <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
        <img src={contactImg} alt="Contact" className="w-2/3 h-auto object-contain" />
      </div>
      
      <div className="w-full max-w-3xl px-4">
        <form
          className="bg-transparent shadow-lg px-6 md:px-12 pt-8 pb-12 mb-4"
          action="https://formspree.io/f/mdoqregy"
          method="POST"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-extrabold mb-12 relative text-center md:text-left">
            <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-gray-600">
              CONTACT US
            </span>
          </h2>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-gray-300 text-base font-semibold mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="Enter your name"
              className="appearance-none border rounded-full text-center border-gray-600 w-full py-4 px-4 bg-transparent text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-600 text-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-300 text-base font-semibold mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              autoComplete="off"
              placeholder="Enter your email address"
              className="appearance-none border border-gray-600 rounded-full text-center w-full py-4 px-4 bg-transparent text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-600 text-lg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-300 text-base font-semibold mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              placeholder="Enter your message"
              className="appearance-none border text-center border-gray-600 rounded-full w-full py-4 px-4 bg-transparent text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-600 text-lg"
              rows="1"
            ></textarea>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <button
              type="submit"
              className="border border-gray-700 rounded-full hover:scale-95 transition-transform duration-300 text-white font-semibold py-4 px-8 focus:outline-none focus:shadow-outline text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
