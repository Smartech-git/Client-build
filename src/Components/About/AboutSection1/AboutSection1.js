import React from 'react'
import './AboutSection1.css'
import { useInView, InView } from 'react-intersection-observer';
import {ReactComponent as GridSquare} from '../../../Assets/GridSquare.svg'
import {ReactComponent as Slide1} from '../../../Assets/AboutSection1Slide1.svg'
import {ReactComponent as Slide2} from '../../../Assets/AboutSection1Slide2.svg'
import {ReactComponent as Slide3} from '../../../Assets/AboutSection1Slide3.svg'

export default function AboutSection1() {

  const { ref, inView} = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });


  return (
    <div ref={ref} className='AboutSection1'>
      <div className='AboutSection1-TopText'>
        <div></div>
        <span className={inView ? 'TopText-animate': ''} >About Us</span>
      </div>
      <div className='AboutSection1-Middle'>
        <div className='AboutText-Container'>
          <div className='AboutText'>
            <p>
            A world-class provider of cast metal products and services. Our foundry has been a trusted leader in the industry for many years, delivering high-quality products and unparalleled customer service. With state-of-the-art equipment, skilled technicians, and a commitment to sustainability, we are dedicated to exceeding our customers' expectations. <br/><br/>
             Our goal is to be your partner in success, delivering the products and services you need to achieve your goals. Contact us today to learn more about our foundry and how we can help you succeed.
            </p>
          </div>
          <div className={`About-BlockEffect ${inView ? 'AboutBlockEffect-animate' : ''}`}>
          </div>
          <div className={`About-GridSquare ${inView ? 'AboutGridSquare-animate' : ''}`}>
            <GridSquare width='150' height='fit-content' />
          </div>
          
        </div>
      </div>
      <InView triggerOnce={true} threshold={0.2}>
        {({ inView, ref}) => (
          <div ref={ref} className={`AboutSection1-bottom ${inView ? 'AboutSection1Bottom-animate' : ''}`}>
            <Slide1 width='200' height='fit-content'/>
            <Slide2 width='200' height='fit-content'/>
            <Slide3 width='200' height='fit-content'/>
          </div>
        )}
      </InView>
      
    </div>
  )
}
