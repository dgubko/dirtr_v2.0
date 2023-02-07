import React from 'react'
import './IndividualTrail.css'

function IndividualTrail() {
  return (
    <div className='individual-trail'>
      <h2>Individual Trail View</h2>
      <div className='individual-trail-container'>
        <div className='trail-details-container'>
          <div className='trail-name-button-styling'>
            <h2 className='trail-name'>Very Scenic Trail</h2>
            <button className='trail-button'>❤️</button>
          </div>
          <div className='trail-addl-detail-styling'>
            <p className='trail-distance'>Distance: 12 miles</p>
            <p className='trail-duration'>Duration: 6 hours</p>
            <p className='trail-elevation'>Elevation: 3 miles</p>
            <p className='trail-difficulty'>Difficulty: Shmedium</p>
          </div>
          <div className='trail-overview'>
            <h2 className='trail-overview-title'>Overview</h2>
            <p className='trail-overview-description'>Kinda lengthy, but not too lengthy. Kinda easy, but not too easy. Ramble ramble ramble.</p>
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