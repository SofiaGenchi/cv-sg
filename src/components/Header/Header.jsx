import React from 'react'
import './Header.css'
import SocialMedia from '../SocialMedia/SocialMedia'

const Header = () => {
  return (
    <header className='header'>
        <div className='header-content'>
        <div className='header-left'>
            <h1>Web Developer</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, numquam.</p>
        </div>
        {/* <div className='header-right'>
            <p className='logo'>SG</p>
        </div> */}
        </div>
    </header>
  )
}

export default Header