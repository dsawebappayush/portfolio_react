import React from 'react'
import HeroImg2 from '../components/HeroImg2';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Pricing from '../components/Pricing';
import Work from '../components/work';
const Project = () => {
  return (
    <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
        <Work/>
        <Pricing/>

        <Footer/>
    </div>
  )
}

export default Project
