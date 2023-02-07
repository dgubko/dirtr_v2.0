import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='card'>
      <div className='image-button-container'>
        <img src='https://a.cdn-hotels.com/gdcs/production38/d1782/61e19798-aa84-4cbe-98b4-12e8936c8979.jpg?impolicy=fcrop&w=1600&h=1066&q=medium' />
        <button>❤️</button>
      </div>
      <p className='trail-name'>Scenic Trail</p>
      <p className='county-name'>Random County</p>
      <div className='distance-difficulty-container'>
        <p className='trail-distance'>4 miles</p>
        <p className='trail-difficulty'>Difficult</p>
      </div>
    </div>
  )
}

export default Card