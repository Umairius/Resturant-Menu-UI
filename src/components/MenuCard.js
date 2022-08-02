import React from 'react';
import './MenuCard.css';

const items = ["Biryani","Takatak"]

function MenuCard() {
  return (
    <div>
        <div className='MenuCard'>

                {items.map(item =>
                  <div className='item'>
                  
                    <p>{item}</p>
                    <button className='Menubutton'>+</button>
                    
                  </div>)}
               
                
                
              </div>
    </div>
  )
}

export default MenuCard