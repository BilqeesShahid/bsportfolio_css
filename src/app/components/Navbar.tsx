"use client";
import  React,{useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='logo'><img src="/logo24.png" alt="logo"/></div>
        
        {/* Desktop Menu */}
        <ul className='navbar-menu'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        
      {/* Mobile Menu Button */}
<div className="mobile-menu-button">
  <button onClick={() => setNavbarOpen(!navbarOpen)} className="icon-button">
    <FaBars className={`icon ${navbarOpen ? 'hidden' : ''}`} />
    <FaXmark className={`icon ${navbarOpen ? '' : 'hidden'}`} />
  </button>
</div>

{/* Mobile Dropdown Menu */}

<div className={`${navbarOpen ? 'dropdown-open' : 'dropdown-closed'}`}>
  <ul className='mobile-dropdown'>
    <li><a href="/" onClick={() => setNavbarOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setNavbarOpen(false)}>About</a></li>
    <li><a href="#projects" onClick={() => setNavbarOpen(false)}>Projects</a></li>
    <li><a href="#contact" onClick={() => setNavbarOpen(false)}>Contact</a></li>
  </ul>
</div>
</div>
      
    </nav>
  );
} 

export default Navbar;
