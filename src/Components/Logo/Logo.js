import React from 'react'
import { Link } from "react-router-dom";
import './Logo.css'
import CompanyLogo from '../../Assets/CompanyLogo.png'

export default function Logo() {
  return (
    <div className="Logo">
    <Link style={{textDecoration: 'none'}}  to={'/'}>
        <img src={CompanyLogo} alt='Logo' />
    </Link>
  </div>
  )
}
