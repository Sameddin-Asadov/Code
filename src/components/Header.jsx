import React, { useState } from 'react'
import '../App.css'
import logo from '../logo/CodeWorldLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function Header() {
    const [open,setOpen]=useState(false)
    const toggleDrawer = () => () => {
        setOpen(newOpen);
      };
      // const links=["Ana Səifə","Haqqımızda","Kurslar","Əlaqə"]
      const links= [
        {title:"Ana Səifə",href:'#'},
      {title:"Haqqımızda",href:'#'},
      {title:"Kurslar",href:'#'},
      {title:"Əlaqə",href:'#'}]
    return (
        <div className='header-menu'>
            <div className="header-left">
                <img className='header-logo' src={logo} alt="CodeWorld" />
            </div>
            <div className='header-right'>
            <ul className='header-links'>
              {links && links.map((link)=>(
                <li key={link.title} ><a href={link.href}>{link.title}</a></li>
              ))}
                
            </ul>
            <div className='mobile-menu'>
      <Button onClick={toggleDrawer(true)}><GiHamburgerMenu style={{ 
        color: "#FFF",
        fontSize: "1.5em",
        cursor: "pointer"
      }} /></Button>
<Drawer open={open} onClose={toggleDrawer(false)}>
</Drawer></div>
            </div>
        </div>
    )
}

export default Header