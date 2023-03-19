import { FC } from 'react'
import '../styles/Header.css'

interface Props {
  isMonthly: boolean;
  handlePriceChange: () => void;
}

const Header: FC<Props> = ({ isMonthly, handlePriceChange }) => {
  return (
    <div className="header">
        <div className="headerBlock">
            <h1>Online courses</h1>
            <p>Get all lesson videos together with theory classes and recipes with each subscription. Cancel anytime   </p>
        </div>
        <div className="cta-container">
            <div className="cta">
                <div className={`btn ${isMonthly ? 'active' : ''}`} onClick={handlePriceChange}>Monthly</div>
                <div className={`btn ${!isMonthly ? 'active' : ''}`} onClick={handlePriceChange}>Annually*</div>
            </div>
            <div><p>*50% off if you choose annual subscription</p></div>
            
        </div>
        
    </div>
  )
}


export default Header;