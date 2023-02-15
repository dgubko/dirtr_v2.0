import React from 'react'
import './AboutUs.css'
import carGif from '../../assets/images/off-roading.gif'
import { GITHUB_ROUTES } from '../../utilis/constants'

function AboutUs() {
  return (
    <div className='about-us'>
      <h2>About Us</h2>
      <div className='about-us-container'>
        <div>
          <p className='bio-text'>
          At Dirtr, our mission is to deliver a comprehensive and current resource for off-road trails throughout the greater Denver area. Time is precious and we will gather your trail intel so that you can get out there. Adventure awaits.
          </p>
          <div className='team-container'>
            <h2>Our team</h2>
            <div className='fe-team-container'>
              <nav>
                <a href={GITHUB_ROUTES.DANA}><u>Dana Truong</u> | </a>
                <a href={GITHUB_ROUTES.EVAN}><u>Evan Swanson</u> | </a>
                <a href={GITHUB_ROUTES.DMITRII}><u>Dmitrii Gubko</u></a>
              </nav>
            </div>
            <div className='be-team-container'>
              <nav>
                <a href={GITHUB_ROUTES.KENZ}><u>Kenz Leng</u> | </a>
                <a href={GITHUB_ROUTES.ELI}><u>Eli Fuchsman</u> | </a>
                <a href={GITHUB_ROUTES.SHAWN}><u>Shawn Lee</u> | </a>
                <a href={GITHUB_ROUTES.ALEX}><u>Alex Mora</u></a>
              </nav>
            </div>
          </div>
        </div>
        <div className='image-container'>
          <img src={carGif} />
        </div>
      </div>
    </div >
  )
}

export default AboutUs