import React from 'react'
import './IndividualTrail.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

function IndividualTrail() {
  const selectedTrail = useSelector((state) => state.selectedTrail.data.attributes)
  return (
    <div className='individual-trail'>
      <h2>Individual Trail View</h2>
      <div className='individual-trail-container'>
        <div className='trail-details-container'>
          <div className='trail-name-button-styling'>
            <h2 className='trail-name'>{selectedTrail.name}</h2>
            <button className='trail-button'>❤️</button>
          </div>
          <div className='trail-addl-detail-styling'>
            <p className='trail-distance'>Distance: {selectedTrail.distance} miles</p>
            <p className='trail-duration'>Duration: {selectedTrail.avg_duration ? selectedTrail.avg_duration : "N/A"}</p>
            <p className='trail-elevation'>Elevation: {selectedTrail.start_elevation}</p>
            <p className='trail-difficulty'>Difficulty: {selectedTrail.difficulty}</p>
          </div>
          <div className='trail-overview'>
            <h2 className='trail-overview-title'>Overview</h2>
            <p className='trail-overview-description'>{selectedTrail.description}</p>
          </div>
          <NavLink to='/home'>
          <button className='return-home-button'>Return Home</button>
          </NavLink>
        </div>
        <div className='trail-map-container'>
          <img width='500' src={selectedTrail.map_image} />
        </div>
      </div>
    </div>
  )
}

export default IndividualTrail