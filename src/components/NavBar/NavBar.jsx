import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <span>Sofia Genchi</span>
        </div>
        <div className='right'>
            <a href="#home" className='link'>Home</a>
            <a href="#portfolio" className='link'>Portfolio</a>
            <a href="#about" className='link'>About</a>
        </div>
    </div>
  )
}

export default NavBar