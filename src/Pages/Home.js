import React from 'react'
import './Home.css'
import BackgroundImage1 from  '../Assets/BackgroundImage1.png'
import HeroSectionImage from '../Assets/HeroSectionImage.jpg'
import HeroSectionImage2 from '../Assets/HeroSectionImage2.jpg'
import { Link } from "react-router-dom";
import Section2 from '../Components/Home/Section2/Section2'
import Section3 from '../Components/Home/Section3/Section3';

export default function Home() {

  return (
    <div className='Home'>
      
        <div style={{ backgroundImage: `url(${BackgroundImage1})` }} className="HeroSection Section1">
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
          

          <div className='HeroSection-Right'>
            <div className = 'Background-effect-display'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='Block-effect'></div>
              <img className='HeroSection-SecondImage' src={HeroSectionImage2} alt ="HerSectionImage2" />
             <img className='HeroSection-FirstImage' src={HeroSectionImage} alt="HeroSectionImage"/>
          </div>
        </div>
        
        <Section2/>
        <Section3/>

    </div>
  )
}
