import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <div>
        
          <ul>
                <h1>A Very fancy resturant</h1>
            
              <li>
                <button className='carouselButton'>Appetizer</button>
                 
              </li>
              
              <li>
              <button className='carouselButton'>Entree</button>

              </li>
              <li>
              <button className='carouselButton'>Main Course</button>

              </li>
              <li>
              <button className='carouselButton'>Desert</button>

              </li>

          </ul>
      </div>
      
    )
  }
}

export default Header