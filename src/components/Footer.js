import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons"

  


function Footer() {
    
  return (
    <div className='Footer'>
        <div className='Logo'>
            <h1>Logo</h1>
        </div>
        <div className='Aboutus'>
            <h2>About Us</h2>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p> 
        </div>
        <div className='Contact'>
            <h2>Social</h2>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            
            
        </div>
        
    </div>
  )
}

export default Footer