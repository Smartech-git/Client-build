import React from 'react'
import './Footer.css'
import Logo from '../Logo/Logo'
import {ReactComponent as Call} from '../../Icons/call.svg'
import {ReactComponent as  Email} from '../../Icons/email.svg'
import {ReactComponent as Facebook } from '../../Icons/facebook.svg'
import {ReactComponent as Twitter } from '../../Icons/twitter.svg'
import {ReactComponent as Linkedin } from '../../Icons/linkedin.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='Footer'>
      <div style={{height: 'fit-content'}}>
        <Logo/>
      </div>
      <div className='Footer-Details'>
        <div className='Footer-Left'>
            <p>
            A world-class provider of cast metal products and services. Our foundry has been a trusted leader in the industry for many years, delivering high-quality products and unparalleled customer service.
            <br/> <br/> With state-of-the-art equipment, skilled technicians, and a commitment to sustainability.
            </p>
          <div className='Contact-Footer'>
            <div className='ContactPhone'>
              <Call width ='14' />
              {/* <span>+234 814 0235 206</span> */}
              <span>+234 123 4567 206</span>
            </div>
            <div className='ContactEmail'>
              <Email width ='14'/>
              <span>contact@company.com</span>
            </div>  
          </div>
        </div>
        <div className='Footer-Center'>
          <Link className='FooterCenter-Link' to='./' style={{textDecoration: 'none'}}>
            <span>Home</span>
          </Link>
          <Link className='FooterCenter-Link'  to='./About' style={{textDecoration: 'none'}}>
            <span>About</span>
          </Link>
          <Link className='FooterCenter-Link'  to='./Contact' style={{textDecoration: 'none'}}>
            <span>Contact Us</span>
          </Link>
        </div>
        <div className='Footer-Right'>
          <div className='Socials'>
            <Twitter width='14'/>
            <Facebook width='14'/>
            <Linkedin width='14'/>
          </div>
          <div className="Terms-Conditions">
            <h3>Terms and Conditions</h3>
            <h3>Private Policy</h3>
          </div>
        </div>
      </div>

        
    </div>
  )
}
