import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contacts/Contacts';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import './App.css'; 
import bgVideo from './assets/bg3.mp4'; // Adjust the path as needed

const App = () => {

  return (
    <div className="relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bgVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative  z-10">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
