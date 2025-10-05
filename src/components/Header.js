import React from 'react'
import herophoto from "./assets/herophoto.png"
import './Header.scss'
function Header() {
  return (
    <div className='header-site'>
        <div className='header-container'>
            <div className='left-header-profile-and-name'>
                <img src={herophoto} alt='hero-photo' className='hero-photo'/>
                <span>SHRI MUTHU KUMARAN</span>
            </div>

            <nav className='nav-flex'>
                <a href='#about'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#project'>Projects</a>
                <a href='#contact'>Contact</a>
                <a className='btn' href='\resume\Shrimuthukumaran-Resume.pdf' target='_blank' rel='noreferrer'> Resume</a>
            </nav>
        </div>
    </div>
  );
}

export default Header