import React from 'react'
import './IndividualTrail.css'

function IndividualTrail() {
  return (
    <div className='individual-trail'>
      <h2>Individual Trail View</h2>
      <div className='individual-trail-container'>
        <div className='trail-details-container'>
          <div className='trail-name-button-styling'>
            <h2>Very Scenic Trail</h2>
            <button>❤️</button>
          </div>
        </div>
        <div className='trail-map-container'>
          <img width='500' src='https://i0.wp.com/www.naturetrailsnc.com/wp-content/uploads/Screen_Shot_2019-02-11_at_11.10.23_PM-bb.jpg?ssl=1' />
        </div>
      </div>
    </div>
  )
}

export default IndividualTrail