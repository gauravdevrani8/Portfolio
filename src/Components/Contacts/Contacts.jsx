import React from 'react';
import contactImg from '../../assets/contact.svg';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row lg:gap-24 border-t border-gray-700 items-center justify-center bg-black py-6">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img src={contactImg} alt="Contact Us" className="w-80 md:w-auto h-64 md:h-96" />
      </div>
      
      <div className="w-full max-w-md px-4">
        <form
          className="bg-transparent border border-gray-700 rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4"
          action="https://formspree.io/f/mdoqregy"
          method="POST"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact <span className='text-green-300'>Us</span></h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="Enter your name"
              className="appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-transparent text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              autoComplete="off"
              placeholder="Enter your email address"
              className="appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-transparent text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              placeholder="Enter your message"
              className="appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-transparent text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-600"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="border-2 hover:scale-95 transition-transform duration-300 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
