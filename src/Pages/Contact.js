import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {

    let location= useLocation()
    
    useEffect(() => {
      window.scrollTo(0,0)
    }, [location])

  return (
    <div>Contact</div>
  )
}
