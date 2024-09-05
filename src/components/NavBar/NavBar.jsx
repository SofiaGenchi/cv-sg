import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <span>Sofia Genchi</span>
        </div>
        <div className='right'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/portfolio" className='link'>Portfolio</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/cv" className='link'>CV</Link>
        </div>
    </div>
  )
}

export default NavBar