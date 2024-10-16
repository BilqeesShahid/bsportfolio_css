"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => { 
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        {/* Text Section */}
        <div className='col-span-12 lg:col-span-8 place-self-center order-2 sm:text-left lg:order-1'>
          <h1 className='text-myindigo mb-4 text-4xl sm:text-6xl lg:text-5xl font-extrabold'>
           <span data-aos="zoom-in-up" className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello,I'm{" "}</span>
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
    />
  
          </h1>
          <p className='text-myblue text-base sm:text-lg mb-6 lg:text-xl'>
            This is Bilqees Shahid. I am an enthusiastic Electronic Engineer with a GPA of 3.6. 
            My passion for technology has led me to expand my skill set into web development. 
            
        
          </p>
          <div className='flex flex-col sm:flex-row sm:space-x-4'> 
  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 sm:mb-0 bg-gradient-to-br from-blue-500
   via-purple-500 to-pink-500 text-white transition duration-300 ease-in-out hover:opacity-90'>
    Hire Me
  </button>
  
  <button className='px-1 py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 mt-3
   bg-gradient-to-br from-blue-500
   via-purple-500 to-pink-500 hover:opacity-90
    text-white transition duration-300 ease-in-out'>
    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 transition duration-300 ease-in-out'>
      Download CV
    </span>
  </button>
</div>



        </div>

        {/* Image Section */}
        <div className='col-span-12 lg:col-span-4 place-self-center order-1 lg:order-2 mt-4 lg:mt-0'>
          <div className='relative rounded-full overflow-hidden bg-mygray w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] shadow-lg shadow-white'>
            <Image
              src="/testi12.png"
              alt="hero image"
              className='w-full h-full object-cover'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HeroSection