import "./FooterStyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";
const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
        <div>
        <p>123 Housing Society</p>
        <p>India</p>
        </div>
        </div>
        <div className="phone">
      <h4><FaPhone size={20} style={{ color:"#fff",marginRight : "2rem"}}/>1-2323-343-23</h4>
        </div>
        <div className="email">
      <h4><FaMailBulk size={20} style={{ color:"#fff",marginRight : "2rem"}}/>ayush1856@gmail.com</h4>
        </div>
        </div>
        <div className="right">
            <h4><p>he great thing about sweet good morning texts is that you can get creative. You can keep them cute and flirty with s</p></h4>
        <div className="social">
        <FaFacebook size={20}
         style={{ color:"#fff",
         marginRight : "1rem"}}/>
        <FaTwitter size={20}
         style={{ color:"#fff",
         marginRight : "1rem"}}/>
         <FaLinkedin size={20}
         style={{ color:"#fff",
         marginRight : "1rem"}}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default footer
