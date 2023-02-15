import React from 'react'
import AboutButton from '../AboutButton/AboutButton'
import './IndividualTrail.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

function IndividualTrail() {
  const selectedTrail = useSelector((state) => state.selectedTrail.data.attributes)
  return (
    <div className='IndividualTrail'>
      <h2 className='trail-name'>{selectedTrail.name}</h2>
      <div className='description-top'>
        <div className='description-top-left'>
          <button className="favorite-button" onClick={() => console.log('addToFavorites(props.id)')}>
            <div className="heart-image-container" alt="favorite button" />
          </button>
          <div className='description-top-left-box'>
              <p className='trail-distance'>Distance: {selectedTrail.distance} miles</p>
              <p className='trail-duration'>Duration: {selectedTrail.avg_duration ? selectedTrail.avg_duration : "N/A"}</p>
              <p className='trail-elevation'>Elevation: {selectedTrail.start_elevation}</p>
              <p className='trail-difficulty'>Difficulty: {selectedTrail.difficulty}</p>
          </div>
        </div>
        <div className='description-top-right'>
          <img className='trail-image' alt={selectedTrail.name + ' map'} src={selectedTrail.map_image} />
        </div>
      </div>
      <div className='description-bottom'>
        <p className='trail-overview'>{selectedTrail.description}</p>
      </div>
      <AboutButton />
    </div>
  )
}

export default IndividualTrail