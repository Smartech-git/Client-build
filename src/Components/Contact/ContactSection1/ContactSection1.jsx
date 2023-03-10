import React from 'react'
import './ContactSection1.css'
import {ReactComponent as GridSquare} from '../../../Assets/GridSquare.svg'
import ContactPageImage from '../../../Assets/ContactPageImage.png'
import {ReactComponent as Call} from '../../../Icons/call.svg'
import {ReactComponent as Email} from '../../../Icons/email.svg'
import { useInView } from 'react-intersection-observer';
import { IKImage } from 'imagekitio-react';

export default function ContactSection1() {

    const { ref, inView} = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

  return (
    <div ref={ref} className="ContactSection1">

        <div className='ContactSection1-First'>
            <div className='ContactSection1-Left '>
                <div className='ContactSection1-TopText'>
                    <div></div>
                    <span className={inView ? 'TopText-animate': ''}>Contact Us</span>
                </div>
                <p>
                    Our team of experienced engineers is ready to assist you. Please don't hesitate to contact us for any technical inquiries or project consultation. <br/><br/>
                    We will respond promptly to help you with your engineering needs.
                </p>
            </div>

            <div className="ContactSection1-Right">
                <div className='ContactPageImage'>
                   <IKImage path='ContactPageImage.png' alt="ContactPageImage" fetchpriority="high" /> 
                </div>
                
                <div className= {`ContactPage-GridSquare ${inView ? 'ContactPageGridSquare-animate' : ''}`}>
                   <GridSquare width='150' height='fit-content' />  
                </div>
               
            </div>
           
        </div>

        <div className='ContactSection2-Second'>
            <div className="Contact-Details">
                <div>
                    <Call width='28' height = 'fit-content'/>
                </div>
                <span>+234 814 0235 206</span>
            </div>
            <div className='Contact-Details'>
                <div>
                    <Email width='28' height='fit-content' />
                </div>
                <span>contact@comapany.com</span>
            </div>
        </div>

    </div>
  )
}
