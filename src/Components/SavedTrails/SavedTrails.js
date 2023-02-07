import React from 'react'
import './SavedTrails.css'
import Card from '../Card/Card'

function SavedTrails() {
  return (
    <div className='saved-trails'>
      <h2 className='saved-trails-title'>Saved Trails</h2>
      <div className='saved-trails-card-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default SavedTrails