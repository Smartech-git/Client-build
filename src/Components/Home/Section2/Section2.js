import React from 'react'
import './Section2.css'
import {ReactComponent as Call} from '../../../Icons/call.svg';
import {ReactComponent as Slide1} from '../../../Assets/Section2ImageSlide1.svg'
import {ReactComponent as Slide2} from '../../../Assets/Section2ImageSlide2.svg'
import { useInView, InView } from 'react-intersection-observer';
import { IKImage } from 'imagekitio-react';

export default function Section2() {

    const { ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    

  return (
    <div ref={ref} className='Section2'>

        <div className='Section2-Left'>
            <div className="Section2-Texts">
                <div className='Top-Text'>
                    <div></div>
                    <span className={inView ? 'TopText-animate': ''}>About Forged</span>
                </div>
                <h1>In-depth experience in production delivery</h1>
                <p>
                From conducting market research to working with cross-functional teams and tracking product performance, our team has the expertise and experience to deliver exceptional results.
                </p>
            </div>
            <div className="Section2-ActionCall">
                <div className="Icon">
                    <Call width='28' />
                </div>
                <div  className="Texts">
                    <h3>contact for more enquiries</h3>
                    <h3>+234 712 345 6789</h3>
                </div>
            </div>
        </div>

        
        <InView triggerOnce={true} threshold={0.4}>
        {({ inView, ref}) => (
            <div ref={ref} className='Section2-Right'>
                <IKImage path='Section2Image.jpg' alt="Section2Image"/>
                <div className={`Slide1 ${inView ? 'Section2Slide1-animate' : ''}`}>
                    <Slide1 width='160' height="fit-content"/>
                </div>
                <div className = {`Slide2 ${inView ? 'Section2Slide2-animate' : ''}`}>
                <Slide2 width='160' height="fit-content"/> 
                </div> 
            </div>
         
        )}
      </InView>
             
    
        
    </div>
  )
}
