import React,{useEffect, useState} from 'react'
import { Link, useLocation} from "react-router-dom";
import {ReactComponent as Call} from '../../Icons/call.svg'
import  {ReactComponent as Email} from  '../../Icons/email.svg'
import  {ReactComponent as Facebook} from  '../../Icons/facebook.svg'
import  {ReactComponent as Linkedin} from  '../../Icons/linkedin.svg'
import  {ReactComponent as Twitter} from  '../../Icons/twitter.svg'
import Logo from '../Logo/Logo';
import './Header.css'

export default function Header() {
  let location = useLocation();
  const [currentLocation, setCurrentLocation]  = useState('/')

  useEffect(()=> {
    console.log(location)
    setCurrentLocation(location.pathname)
  }, [location])

  return (
    <div className='Header'>
      <div className='TopHeader'>

        <div className='Contact'>
          <div className='Contact-Header'>
            <Call width ='14' />
            <span>+234 712 345 6789</span>
          </div>
          <div className='Contact-Header'>
            <Email width ='14'/>
            <span>contact@company.com</span>
          </div>  
        </div>

        <div className='Socials'>
          <Twitter width='14'/>
          <Facebook width='14'/>
          <Linkedin width='14'/>
        </div>
      </div>

      <div className='BottomHeader'>
        <Logo/>

        <div className='Nav'>
          <Link className='NavLink' style={{textDecoration: 'none'}} to={'/'}>
            <div className='NavContent'>
              <span>Home</span>
              <div className={`underline ${currentLocation === '/' ? 'animate' : ''}`}></div>
            </div>
          </Link>
          <Link className='NavLink' style={{textDecoration: 'none'}} to ={'About'}>
              <div className='NavContent'>
                <span>About</span>
                <div className={`underline ${currentLocation === '/About' ? 'animate' : ''}`}></div>
              </div>
          </Link>
         <Link className='NavLink' style={{textDecoration: 'none'}} to ={'Contact'}>
            <div className='NavContent'>
              <span>Contact Us</span>
              <div className={`underline ${currentLocation === '/Contact' ? 'animate' : ''}`}></div>
            </div>
         </Link>
          
        </div>
      </div>
        
    </div>
  )
}
