import React from 'react'
import './AboutSection2.css'
import BackgroundImage1 from '../../../Assets/BackgroundImage1.png'
import {ReactComponent as Manufac} from '../../../Icons/Manufac-Logo.svg'
import {ReactComponent as MechEng} from '../../../Icons/MechEng-Logo.svg'
import {ReactComponent as Repairs} from '../../../Icons/Repairs-Logo.svg'
import { useInView } from 'react-intersection-observer';

export default function AboutSection2() {

    const { ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

  return (
    <div ref={ref} style={{ backgroundImage: `url(${BackgroundImage1})` }} className='AboutSection2'>
        <div  className={`AboutSection2-Info ${inView ? 'AboutSection2Info-animate' : ''}`} >
            <div className={`VerticalLine ${inView ? 'VerticalLine-animate' : ''}`}></div>
            <div className='FirstInfoContents'>
                <div className='FirstInfoContent-top'>
                    <MechEng width="50" height=" fit-content" />
                    <span>Materials <br/> engineering</span>
                </div>
                <p>
                Our material engineering services provide cutting-edge solutions that utilize advanced materials and techniques to enhance product performance and meet the specific needs of our clients in various industries.
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
                    Offering comprehensive solutions for fixing and maintaining products, utilizing expert technicians and cutting-edge techniques to restore products to optimal functioning.
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
                Provide efficient and cost-effective production solutions, utilizing state-of-the-art equipment and techniques to deliver high-quality products to meet the demands of our clients.
                </p>
            </div>
        </div>
    </div>
  )
}
