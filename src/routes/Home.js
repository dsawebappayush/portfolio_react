import React from 'react'
import Navbar from '../components/navbar';
import HeroImg from '../components/hero';
import Footer from "../components/footer";
import Work from "../components/work.js";
const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroImg />
        <Work/>
        <Footer/>
    </div>
  )
}
export default Home
