import React from 'react'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contacts/Contacts'
import HeroSection from '../HeroSection/HeroSection'


const Home = () => {
  return (<>
  
<div className='bg-black'></div>
    <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </>
  )
}

export default Home