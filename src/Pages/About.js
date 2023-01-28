import React, {useEffect} from 'react'
import './About.css'
import AboutSection1 from '../Components/About/AboutSection1/AboutSection1.js'
import AboutSection2 from '../Components/About/AboutSection2/AboutSection2'
import { useLocation } from 'react-router-dom';

export default function About() {

  let location = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
  
  return (
    <div className='About'>
      <AboutSection1/>
      <AboutSection2/>
    </div>
  )
}
