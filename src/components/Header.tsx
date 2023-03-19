import React from 'react'
import '../styles/Header.css'

const Header = () => {


  return (
    <div className="header">
        <div className="headerBlock">
            <h1>Online courses</h1>
            <p>Get all lesson videos together with theory classes and recipes with each subscription. Cancel anytime   </p>
        </div>
        <div className="cta-container">
            <div className="cta">
                <div className="btn month">Monthly</div>
                <div className="btn year">Annually*</div>
            </div>
            <div><p>*50% off if you choose annual subscription</p></div>
        </div>
        
    </div>
  )
}

export default Header;