import React  from 'react'
import './Home.css'
import { Link} from "react-router-dom";
import Section2 from '../Components/Home/Section2/Section2'
import Section3 from '../Components/Home/Section3/Section3';
import Section4 from '../Components/Home/Section4/Section4'
import { IKImage } from 'imagekitio-react';

const BackgroundImage1 = 'https://ik.imagekit.io/trams/ClientBuild/BackgroundImage1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677543155402'

export default function Home() {

  return (
    <div className='Home'>
      
        <div style={{ backgroundImage: `url(${BackgroundImage1})` }} className="HeroSection Section1">
          <div className='HeroSection-Left'>

            <div className="HeroSection-texts">
              <span>Welcome to Union Foundry</span>
              <h1>Best quality in</h1>
              <h1><span className='bold first'>Innovations</span> and</h1>
              <h1><span className='bold second'>Manufacturing</span></h1>
              <div className='HeroSection-subText'>
                <p>Our commitment to innovation and best quality manufacturing allows us to consistently meet the evolving needs of our customers.</p>
              </div>
            </div>
            <Link className='ActionButton-link' style={{textDecoration: 'none'}} to={'/About'}>
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
              <IKImage className='HeroSection-SecondImage' path='HeroSectionImage2.jpg' alt ="HerSectionImage2" fetchpriority="high" />
             <IKImage className='HeroSection-FirstImage' path='HeroSectionImage.png' alt="HeroSectionImage" fetchpriority="high"/>
          </div>
        </div>
        
        <Section2/>
        <Section3/>
        <Section4/>

    </div>
  )
}
