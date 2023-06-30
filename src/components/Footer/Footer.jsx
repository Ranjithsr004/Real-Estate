import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className='footer-wrap'>
        <div className='footer-container'>
            <div className='footer-left'>
                <img src="./logoreal_estate.png" alt="" width={120}/>
                <span className='secondaryText'>
                Our mission is to create the perfect living environment for everyone, 
                <br />ensuring that each individual finds their best place to call home.
                </span>
            </div>
            <div className='footer-right'>
                <span className='primaryText'>Information</span>
                <span>3/14, Unjalur, Erode - Tamilnadu</span>
                <div className='footer-menu'>
                    <a href='#Content'>Property</a>
                    <a href='#Residencies'>Services</a>
                    <a href='#OurValue'>Products</a>
                    <a href='#Contactus'>About Us</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer