import React from 'react'
import './Navbar.css'
function Navbar() {
    const buttons=['About','Features','Pricing','How It Works','Contact']
  return (
    <div className="navbar">
      <div className='header'>
          <div className="left-container">
              <img className='fleecard-image' src="http://www.fleecard.com/static/media/Fleecard_beta.4ffac123.png" alt="fleecard" />
          </div>
          <div className="right-container">
              <div className="log-button">
                <button className=' button buttonc'>Login</button>
              </div>
              <div className="other-button">
                <button className="buttonc button">Home</button>
            
                {buttons.map((item)=>{
                    return(
                    <button className="button" >{item}</button>
                    )})}
              </div>  
          </div>
      </div>
    </div>
  )
}
export default Navbar