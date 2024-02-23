import React from 'react'
import { Link } from "react-router-dom"
import { TfiInstagram } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";


export default function Footer() {
    return (<footer>
    <h1 className="name-logo-footer">ECOTHREAD</h1>
    <div className="nav-footer">
          <Link to="/" className='navigation-link-footer'>Home</Link>
          <Link to="/shop" className='navigation-link-footer'>Shop</Link>
          <Link to="/about" className='navigation-link-footer'>About Us</Link>
          <Link to="/contact" className='navigation-link-footer'>Contact</Link>
    </div>
    <div className="copyright-socials">
      <p className="copyright">© 2024 Ecothread, All Rights Reserved.</p>
      <div className="social-media">
      <a><TfiInstagram className="socials-icon"/></a>
      <a><TfiFacebook className="socials-icon"/></a>
      <a><TfiTwitter className="socials-icon" /></a>

      </div>

    </div>
    
  </footer>)
}