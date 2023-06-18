import React from 'react'
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';


const Contact = () => {
  return (
    <div>
       <Navbar />
       <HeroImg2 heading="CONTACT." text="Lets have a chat"></HeroImg2>
       <Form/>
        <Footer/>
    </div>
  )
}

export default Contact
