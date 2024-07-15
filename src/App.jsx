import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contacts/Contacts';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Spinner/Spinner';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      setLoading(false);
    };

    // Simulate a delay to demonstrate the loader
    setTimeout(handleLoading, 2000);

    return () => clearTimeout(handleLoading);
  }, []);

  return (
    <div className='bg-[#121316]'>
      {loading && <Loader />}
      {!loading && (
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
      )}
    </div>
  );
};

export default App;
