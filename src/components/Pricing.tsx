import React from 'react';
import img1 from '../styles/image1.png';
import '../styles/pricing.css';


function Pricing() {
  return (
    <div className="priceSection">
    <div className="priceCard">
        <img src={img1}></img>
        <div className="course">
            <h2>Beginner</h2>
            <p className="description">Perfect for if you are just starting out in your pastry journey, understand different pastrys and methods </p>
            <div className="price">£8</div>
            <div className="btn try">Try for free</div>
            <div className="smallPrint">Try for 7 days free then for £8/month</div>
        </div>    
    
        <div className="details">
            <p className="description">What you will learn</p>
                <ul>
                    <li>Basic sponges</li>
                    <li>Different types of pastry bases</li>
                    <li>Creams</li>
                    <li>Custards</li>
                    <li>Simple baked cakes</li>
                    <li>...and more</li>
                </ul>
            </div>
    </div>
    </div>
  )
}

export default Pricing