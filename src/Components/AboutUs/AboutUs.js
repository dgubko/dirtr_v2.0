import React from 'react'
import './AboutUs.css'
import carGif from '../../assets/images/off-roading.gif'
import { GITHUB_ROUTES } from '../../utilis/constants'

function AboutUs() {
  return (
    <div className='about-us'>
      <h2>About Us View</h2>
      <div className='about-us-container'>
        <div>
          <p className='bio-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquet nec ullamcorper sit amet. Dui vivamus arcu felis bibendum ut tristique et egestas quis.
          </p>
          <div className='team-container'>
            <h2>Our team</h2>
            <div className='fe-team-container'>
              <nav>
                <a href={GITHUB_ROUTES.DANA}>Dana Truong</a> |
                <a href={GITHUB_ROUTES.EVAN}>Evan Swanson</a> |
                <a href={GITHUB_ROUTES.DMITRII}>Dmitrii Gubko</a>
              </nav>
            </div>
            <div className='be-team-container'>
              <nav>
                <a href={GITHUB_ROUTES.KENZ}>Kenz Leng</a> |
                <a href={GITHUB_ROUTES.ELI}>Eli Fuchsman</a> |
                <a href={GITHUB_ROUTES.SHAWN}>Shawn Lee</a> |
                <a href={GITHUB_ROUTES.ALEX}>Alex Mora</a>
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