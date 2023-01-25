import React from 'react'
import './Section4.css'
import Section4Image from '../../../Assets/Section4Image.jpg'
import {ReactComponent as Section4Slide2} from '../../../Assets/Section4Slide2.svg'
import {ReactComponent as GridSquare } from '../../../Assets/GridSquare.svg'
import ProfilePic from '../../../Assets/ProfilePic.png'
import { useInView } from 'react-intersection-observer';

export default function Section4() {

  
  const { ref, inView} = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className='Section4'>
        <div className='Section4-Left'>
            <img src ={Section4Image} alt="Section4Image" />
            <div className={`Section4-Slide ${inView ? 'Section4Slide-Animate' : ''}`}>
               <Section4Slide2 width="250"  height="fit-content" /> 
            </div>
            <div className={`Section4-GridSquare ${inView ? 'Section4GridSquare-Animate' : ''}`}>
                <GridSquare width='200' height='fit-content' />
            </div>
        </div>

        <div className='Section4-Right'>
          <div className='Section4-TopText'>
            <div></div>
            <span className={inView ? 'TopText-animate': ''} >Vision</span>
          </div>

          <h1>Company’s Vision</h1>
          <p>orem ipsum dolor sit amet consectetur. Gravida eget sagittis ornare ac etiam eu bibendum molestie. 
            Senectus venenatis.Lorem ipsum dolor sit amet consectetur. Gravida eget sagittis ornare Lo. <br/><br/> rem ipsum dolor sit amet consectetur.
             Gravida eget sagittis ornare ac etiam eu bibendum molestie. Senectus venenatis.
          </p>
          <div className="Section4-Profile">
            <div className='Profile-Pic'>
              <img src={ProfilePic} alt="ProfilePic" />
            </div>
            <div className='Profile-Details'>
              <h1>bibendum molestie</h1>
              <span>CEO</span>
            </div>
          </div>
        </div>
    </div>
  )
}
