"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => { 
  return (
    <section className='hero-section'>
      <div className='hero-grid'>
        {/* Text Section */}
        <div className='text-section'>
          <h1 className='hero-heading'>
           <span data-aos="zoom-in-up" className='gradient-text'>Hello,I'm{" "}</span>
           <br/>
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Bilqees Shahid',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Electronic Engineer',
        1000,
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    /></h1>
          <p className='hero-paragraph'>
            This is Bilqees Shahid. I am an enthusiastic Electronic Engineer with a GPA of 3.6. 
            My passion for technology has led me to expand my skill set into web development. </p>
          <div className='button-wrapper'> 
  <button className='hire-me-button'>
    Hire Me
  </button>
  <button className='download-cv-button '>
    <span className='download-cv-span '>
      Download CV
    </span>
  </button>
</div>
   </div>
    {/* Image Section */}
          <div className='image-section'>
          <div className='hero-image-container'>
            <img src="/mypic.jpg"
              alt="hero image"
              className='hero-image'
               />
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HeroSection;