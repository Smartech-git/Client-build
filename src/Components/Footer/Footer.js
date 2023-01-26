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
            Lorem ipsum dolor sit amet consectetur. Venenatis purus orci tristique amet nec id sit porttitor.
            <br/> <br/> Morbi cursus enim ut elementum phasellus id aliquam aliquam. Eros purus turpis in at ullamcorper ornare. Facilisi velit maecenas malesuada ac velit.
            </p>
          <div className='Contact'>
            <div className='ContactPhone'>
              <Call width ='14' />
              <span>+234 712 345 6789</span>
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
          <Link className='FooterCenter-Link'  to='./Service' style={{textDecoration: 'none'}}>
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
