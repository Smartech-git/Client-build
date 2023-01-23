import React,  {useState} from 'react'
import './Section3.css'
import BackgroundImage2 from  '../../../Assets/BackgroundImage2.png'
import {ReactComponent as Manufac} from '../../../Icons/Manufac-Logo.svg'
import {ReactComponent as MechEng} from '../../../Icons/MechEng-Logo.svg'
import {ReactComponent as Repairs} from '../../../Icons/Repairs-Logo.svg'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'
import {ReactComponent as ArrowDirect} from '../../../Icons/ArrowDirect.svg'

export default function Section3() {
    const [arrowState1, setArrowState1] = useState();
    const [arrowState2, setArrowState2] = useState();
    const [arrowState3, setArrowState3] = useState();

    const { ref, inView, entry } = useInView({
        threshold: 0.6,
        triggerOnce: true,
    });

    const handleOnMouseEnter = (setState) => {
      setState("Arrow-Slide")
    }
    const handleOnMouseLeave = (setState) => {
        setState("")
    }

  return (
    <div  ref={ref} style={{ backgroundImage: `url(${BackgroundImage2})` }} className='Section3'>
        <div className= 'Section3-Texts'>
            <div className='Section3-TopText'>
                <div></div>
                <span className={inView ? 'TopText-animate': ''}>Core Services</span>
            </div>
            <h1>Our services and solutions</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur. Gravida eget sagittis ornare ac ipsum dolor sit amet.
            </p>
        </div>
        <div className="Section3-Cards">
            <Link className={`CardLink ${inView ? 'CardEntry' : ''}`} to="/About" >
               <div onMouseEnter={()=> { handleOnMouseEnter(setArrowState1)}} onMouseLeave ={()=> handleOnMouseLeave(setArrowState1)} className={`Section3-Card`}>
                    <h3>Mechanical Engineering</h3>
                    <div>
                    <MechEng width="70" height=" fit-content" /> 
                    </div>
                    
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Interdum non non eu felis aliquam tincidunt suspendisse. 
                    </p>
                    <ArrowDirect className={`Arrow-Right ${arrowState1}`} width="24" height="fit-content"/>
                </div>
                
            </Link>
            
            <Link className={`CardLink ${inView ? 'CardEntry' : ''}`}  to="/About" >
                <div onMouseEnter={()=> { handleOnMouseEnter(setArrowState2)}} onMouseLeave ={()=> handleOnMouseLeave(setArrowState2)} className={`Section3-Card`}>
                    <h3>Manufacturing</h3>
                    <div>
                        <Manufac width="70" height=" fit-content"/>
                    </div>
                    
                    <p>
                    Lorem ipsum dolor sit amet consectetur.  Lorem ipsum dolor sit amet consectetur Interdum non non eu felis . 
                    </p>
                    <ArrowDirect className={`Arrow-Right ${arrowState2}`}  width="24" height="fit-content"/>
                </div> 
            </Link>
           
           <Link className={`CardLink ${inView ? 'CardEntry' : ''}`}  to="/About" >
                <div onMouseEnter={()=> { handleOnMouseEnter(setArrowState3)}} onMouseLeave ={()=> handleOnMouseLeave(setArrowState3)} className={`Section3-Card`}>
                    <h3>Repairs</h3>
                    <div>
                    <Repairs width="70" height=" fit-content"/> 
                    </div>
                    
                    <p>
                    Tincidunt suspendisse Lorem ipsum dolor sit amet consectetur. Interdum non non eu felis aliquam tincidunt. 
                    </p>
                    <ArrowDirect className={`Arrow-Right ${arrowState3}`}  width="24" height="fit-content"/>
                </div>
           </Link>
            
        </div>

    </div>
  )
}
