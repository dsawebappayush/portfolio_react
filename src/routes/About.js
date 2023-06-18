import React from 'react'
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar />
       <HeroImg2 heading="ABOUT" text="Im a friendly Front-End Developer."/>
        <AboutContent/>
        
        <Footer/>
    </div>
  )
}

export default About
