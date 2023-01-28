import React from 'react'
import './AboutSection1.css'
import { useInView } from 'react-intersection-observer';
import {ReactComponent as GridSquare} from '../../../Assets/GridSquare.svg'
import {ReactComponent as Slide1} from '../../../Assets/AboutSection1Slide1.svg'
import {ReactComponent as Slide2} from '../../../Assets/AboutSection1Slide2.svg'
import {ReactComponent as Slide3} from '../../../Assets/AboutSection1Slide3.svg'

export default function AboutSection1() {

  const { ref, inView} = useInView({
    threshold: 0.6,
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
              Lorem ipsum dolor sit amet consectetur. Porta nibh sit nibh pretium varius. Ornare duis gravida non aliquam in. Lacinia diam lectus cum amet eu. Vulputate at ac fringilla quam nisi. Vestibulum semper ac consequat ut. Placerat magna habitant curabitur sodales pellentesque malesuada imperdiet. Quis posuere placerat mus integer interdum pellentesque risus. Eleifend enim nulla id egestas in congue sit.
            </p>
          </div>
          <div className={`About-BlockEffect ${inView ? 'AboutBlockEffect-animate' : ''}`}>
          </div>
          <div className={`About-GridSquare ${inView ? 'AboutGridSquare-animate' : ''}`}>
            <GridSquare width='150' height='fit-content' />
          </div>
          
        </div>
      </div>
      <div className={`AboutSection1-bottom ${inView ? 'AboutSection1Bottom-animate' : ''}`}>
        <Slide1 width='200' height='fit-content'/>
        <Slide2 width='200' height='fit-content'/>
        <Slide3 width='200' height='fit-content'/>
      </div>
    </div>
  )
}
