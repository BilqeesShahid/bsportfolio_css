import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
     <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'> 
        <div className='col-span-7 place-self-center'> 
      <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello I'm Bilqees Shahid</h1>
      <p className='text-gray-900 text-lg mb-6 lg:text-xl'>This is Bilqees Shahid.I am an enthusiastic Electronic Engineer with a GPA of 3.6. My passion for technology has led me to expand my skill set into web development, where I am currently learning at GIAIC. I have acquired strong foundational skills in HTML, CSS, JavaScript, TypeScript, and Next.js, and I am excited to apply my engineering mindset to solving complex problems in the web development space.
      </p>
      <div>
        <button>button</button>
      </div>
      </div>

      <div className='col-span-7 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-pink-400 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'> 
        <Image src="/testi.jpg" 
        alt="hero image"
      className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2'
        width={250}
      
        height={250}/>
      </div>
      </div>
      </div>
     </section>
  )
}

export default HeroSection