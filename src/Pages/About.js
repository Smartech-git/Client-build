import React from 'react'
import './About.css'
import AboutSection1 from '../Components/About/AboutSection1/AboutSection1.js'
import AboutSection2 from '../Components/About/AboutSection2/AboutSection2'

export default function About() {

  return (
    <div className='About'>
      <AboutSection1/>
      <AboutSection2/>
    </div>
  )
}
