import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import { TfiInstagram } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";


export default function App() {
    return (
          <BrowserRouter>
            <header>
                <h1 className="name-logo">ECOTHREAD</h1>
                <nav>
                    <NavLink to="/" className='navigation-link'>Home</NavLink>
                    <NavLink to="/shop" className='navigation-link'>Shop</NavLink>
                    <NavLink to="/about" className='navigation-link'>About Us</NavLink>
                    <NavLink to="/contact" className='navigation-link'>Contact</NavLink>
                </nav>
                <div className="login">
                  <Link className='login-link'>Login</Link>
                  <Link className='register-link btn'>Register</Link>
                </div>
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />}>Contact</Route>
            </Routes>
            <footer>
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
              
            </footer>
          </BrowserRouter>
        )
      
}