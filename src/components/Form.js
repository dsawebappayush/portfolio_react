import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Your Phone</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="text"></input>
        <label>Your Message</label>
        <textarea rows="6" placeholder="Type your message"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
