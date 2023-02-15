import React from 'react'
import { Link } from 'react-router-dom'
import './BadUrl.css'

const BadUrl = () => {
  return (
    <div className="bad-url-container">
      <div className="bad-url-message-container">
        <h2 className="bad-url-msg">Oops! You are too far off the grid.</h2>
      </div>
      <Link to="/home">
        <button className="return-home-button">Return Home</button>
      </Link>
    </div>
  )
}

export default BadUrl