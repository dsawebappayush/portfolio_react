import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import React1 from "../assets/intro-image.jpeg"
const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
      <p>
         I am Undergarduate Student at IIT KGP in the Department of Mathematics involved in its course of Mathematics and Computing
      </p>
      <Link to="/contact">
      <button className="btn">Contact</button>
      </Link>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stacktop">
          <img src={React1} className="img" alt="true"/>
        </div>
        <div className="img-stacktop">
          <img src={React1} className="img" alt="true"/>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default AboutContent;
