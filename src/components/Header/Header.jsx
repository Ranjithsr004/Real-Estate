import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const[menuOpen,setMenuOpen] = useState(false)
  const getMenuStyles = (menuOpen) => {
    if(document.documentElement.clientWidth<=800)
    {
      return {right: !menuOpen && "-100%"}
    }
  }
  return (
    <section className='wrap'>
        <div className='header-container'>
            <img src="./logoreal_estate.png" alt='logo' width={100}/>
            <h1>RANJITH REAL ESTATE</h1>
            <OutsideClickHandler 
            onOutsideClick={() => {
              setMenuOpen(false)
            }}  
            >
            <div className='header-menu'
            style={getMenuStyles(menuOpen)}>
                <a href='#Residencies'>Residencies</a>
                <a href='#OurValues'>Our Value</a>
                <a href='#Contactus'>Contact Us</a>
                <a href='#GetStarted'>Get Started</a>
                <button className='button' >
                    <a href=''>Contact</a>
                </button>
            </div>
            </OutsideClickHandler>
            <div className='menu-icon' onClick={() => setMenuOpen((prev)=> !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
    </section>
  )
}

export default Header