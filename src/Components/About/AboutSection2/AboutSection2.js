import React from 'react'
import './AboutSection2.css'
import BackgroundImage1 from '../../../Assets/BackgroundImage1.png'
import {ReactComponent as Manufac} from '../../../Icons/Manufac-Logo.svg'
import {ReactComponent as MechEng} from '../../../Icons/MechEng-Logo.svg'
import {ReactComponent as Repairs} from '../../../Icons/Repairs-Logo.svg'
import { useInView } from 'react-intersection-observer';

export default function AboutSection2() {

    const { ref, inView} = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

  return (
    <div ref={ref} style={{ backgroundImage: `url(${BackgroundImage1})` }} className='AboutSection2'>
        <div  className={`AboutSection2-Info ${inView ? 'AboutSection2Info-animate' : ''}`} >
            <div className={`VerticalLine ${inView ? 'VerticalLine-animate' : ''}`}></div>
            <div className='FirstInfoContents'>
                <div className='FirstInfoContent-top'>
                    <MechEng width="50" height=" fit-content" />
                    <span>Materials engineering</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Diam sed quisque mattis arcu. Viverra elementum massa vulputate at integer diam ut sit blandit. Vitae ut ac penatibus aliquam eu congue pellentesque duis.
                </p>
            </div>
        </div>
        <div className={`AboutSection2-Info ${inView ? 'AboutSection2Info-animate' : ''}`}>
            <div  className={`VerticalLine ${inView ? 'VerticalLine-animate' : ''}`}></div>
            <div className='FirstInfoContents'>
                <div className='FirstInfoContent-top'>
                    <Repairs width="50" height=" fit-content" />
                    <span>Repairs</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Diam sed quisque mattis arcu. Viverra elementum massa vulputate at integer diam ut sit blandit. Vitae ut ac penatibus aliquam eu congue pellentesque duis.
                </p>
            </div>
        </div>
        <div className={`AboutSection2-Info ${inView ? 'AboutSection2Info-animate' : ''}`}>
            <div  className={`VerticalLine ${inView ? 'VerticalLine-animate' : ''}`}></div>
            <div className='FirstInfoContents'>
                <div className='FirstInfoContent-top'>
                    <Manufac width="50" height=" fit-content" />
                    <span>Manufacturing</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Diam sed quisque mattis arcu. Viverra elementum massa vulputate at integer diam ut sit blandit. Vitae ut ac penatibus aliquam eu congue pellentesque duis.
                </p>
            </div>
        </div>
    </div>
  )
}
