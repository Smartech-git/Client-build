import React from 'react'
import './Home.css'
import BackgroundImage1 from  '../Assets/BackgroundImage1.png'
import BackgroundImage2 from  '../Assets/BackgroundImage2.png'
import HeroSectionImage from '../Assets/HeroSectionImage.jpg'
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className='Home'>
        <div style={{
           backgroundImage: `url(${BackgroundImage1})`,
          
        }} className="HeroSection">
          <div className='HeroSection-Left'>

            <div className="HeroSection-texts">
              <span>Welcome to Forged</span>
              <h1>Best quality in</h1>
              <h1><span className='bold first'>Innovations</span> and</h1>
              <h1><span className='bold second'>Manufacturing</span></h1>
              <div className='HeroSection-subText'>
                <p>Our commitment to innovation and best quality manufacturing allows us to consistently meet the evolving needs of our customers.</p>
              </div>
            </div>
            <Link style={{textDecoration: 'none'}} to={'/About'}>
              <div className='Action-Button'>
                <span>Learn More</span>
              </div>
            </Link>
            
          </div>
          

          <div className='HeroSection-graphics'>
            <div className = 'Background-effect-display'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='Block-effect'></div>
            <img src={HeroSectionImage} alt="HeroSectionImage"/>
          </div>
        </div>
    </div>
  )
}
