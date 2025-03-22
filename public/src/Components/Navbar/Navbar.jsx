import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll';
import './Navbar.css';
import MindSprout from '../../assets/MindSprout.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  const [drag,setDrag]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setDrag(true):setDrag(false);
    })
  },[])

  const toggleMenu=()=>{
    setToggle(!toggle);
  }
  return (
    <nav className={`container ${drag?'dark-nav':''}`}>
        <img src={MindSprout} className='logo'/>
        <ul className={`${toggle?'mobile-menu':''}`}>
          <li className='links'><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li className='links'><Link to="programs" smooth={true} offset={-260} duration={500}>Programs</Link></li>
          <li className='links'><Link to="about" smooth={true} offset={-260} duration={500}>About Us</Link></li>
          <li className='links'><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
