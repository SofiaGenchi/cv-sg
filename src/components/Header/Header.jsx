import React from 'react'
import './Header.css'
import SocialMedia from '../SocialMedia/SocialMedia'

const Header = () => {
  return (
    <header id='header' className='header'>
      <SocialMedia />
        <div className='header-content'>
        <div className='header-left'>
            <h1>Web Developer</h1>
            <p>I have experience in HTML, CSS, JavaScript, React and MySQL.</p>
        </div>
        </div>
    </header>
  )
}

export default Header