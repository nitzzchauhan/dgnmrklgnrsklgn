import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Contact() {
  return (
    <div>
        <h2>Contact Page</h2>
        <button ><Link to="contact-us">Call or mail us</Link></button>
        <button>Drop a letter</button>
        <Outlet/>
    </div>
  )
}
