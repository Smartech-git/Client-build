import React from 'react'
import { Link } from "react-router-dom";
import './Logo.css'
import CompanyLogo from '../../Assets/CompanyLogo.png'
import Logo2 from '../../Assets/Logo2.png'

export default function Logo() {
  return (
    <div className="Logo">
    <Link className='LogoLink' style={{textDecoration: 'none'}}  to={'/'}>
        <img src={CompanyLogo} alt='Logo' />
        <img src={Logo2} alt='Logo' />
    </Link>
  </div>
  )
}
