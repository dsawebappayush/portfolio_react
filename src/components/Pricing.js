import { Link } from "react-router-dom"
import "./Pricing.css"
import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages -</p>
            <p>- 3 Featured -</p>
            <p>- Responsive Desgin -</p>
            <Link to="/contact"className="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="btc">$ 200</p>
            <p>- 5 Days -</p>
            <p>- 8 Pages -</p>
            <p>- 4 Featured -</p>
            <p>- Interactive Desgin -</p>
            <Link to="/contact"className="btn">PURCHASE NOW</Link>
        </div>
        <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc">$ 500</p>
            <p>- 10 Days -</p>
            <p>- 15 Pages -</p>
            <p>- 5 Featured -</p>
            <p>- Perfection -</p>
            <Link to="/contact"className="btn">PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default Pricing
