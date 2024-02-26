import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { FaHeart } from "react-icons/fa";

export default function Navigation({authenticated}) {
    
    return (
        <header>
                <Link to="/"><h1 className="name-logo">ECOTHREAD</h1></Link>
                <nav>
                    <NavLink to="/" 
                    className='navigation-link'
                    style={({ isActive }) => isActive ? {textDecoration: "underline"} : null}
                    >Home</NavLink>
                    <NavLink to="/shop" 
                    className='navigation-link'
                    style={({ isActive }) => isActive ? {textDecoration: "underline"} : null}
                    >Shop</NavLink>
                    <NavLink to="/about" 
                    className='navigation-link'
                    style={({ isActive }) => isActive ? {textDecoration: "underline"} : null}
                    >About Us</NavLink>
                    <NavLink to="/contact" 
                    className='navigation-link'
                    style={({ isActive }) => isActive ? {textDecoration: "underline"} : null}
                    >Contact</NavLink>
                </nav>
                <div className="login">
                <Link to="favorites" className='favorite-icon'><FaHeart /></Link>
                <Link to="/cart" className='login-link'>My cart</Link>

                  {authenticated ?
                  <Link to="/login" className='register-link btn'>Your account</Link>
                  :
                  <Link to="/login" className='register-link btn'>Login</Link>}
                </div>
            </header>
    )
}