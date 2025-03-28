import React from 'react'
import '../App.css'
import logo from '../logo/CodeWorldLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
    return (
        <div className='header-menu'>
            <div className="header-left">
                <img className='header-logo' src={logo} alt="CodeWorld" />
            </div>
            <div className='header-right'>
            <ul className='header-links'>
                <li><a href="">Ana Səifə</a></li>
                <li><a href="">Haqqımızda</a></li>
                <li><a href="">Kurslar</a></li> 
                <li><a href="">Əlaqə</a></li>
                
            </ul>
            <div className='mobile-menu'><GiHamburgerMenu style={{ 
        color: "#FFF",
        fontSize: "1.5em",
        cursor: "pointer"
      }} /></div>
            </div>
        </div>
    )
}

export default Header