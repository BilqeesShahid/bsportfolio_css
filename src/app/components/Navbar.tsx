"use client"

import Image from 'next/image';
import  React,{useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";


 

 

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed border border-mypink top-0 left-0 right-0 z-10 bg-myindigo opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <div className='text-white font-bold text-xl'><Image src="/mylogo.png" alt="logo" width={75} height={75}/></div>
        
        {/* Desktop Menu */}
        <ul className='lg:text-xl text-lg text-white gap-10 lg:gap-16 hidden md:flex'>
          <li className='menuLink'><a href="/">Home</a></li>
          <li className='menuLink'><a href="#about">About</a></li>
          <li className='menuLink'><a href="#projects">Projects</a></li>
          <li className='menuLink'><a href="#contact">Contact</a></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className='mobile-menu block md:hidden'>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-500 text-slate-100 hover:text-white hover:border-white'
            >
              <FaBars className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-500 text-slate-100 hover:text-white hover:border-white'
            >
              <FaXmark className='h-5 w-5' />
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            navbarOpen ? 'block' : 'hidden'
          } w-full md:hidden transition-all duration-300 ease-in-out`}
        >
          <ul className='flex flex-col items-center mt-4 space-y-4 bg-myindigo text-white py-4'>
            <li className='menuLink'><a href="/" onClick={() => setNavbarOpen(false)}>Home</a></li>
            <li className='menuLink'><a href="#about" onClick={() => setNavbarOpen(false)}>About</a></li>
            <li className='menuLink'><a href="#projects" onClick={() => setNavbarOpen(false)}>Projects</a></li>
            <li className='menuLink'><a href="#contact" onClick={() => setNavbarOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
