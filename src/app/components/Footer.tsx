import Image from 'next/image'
import React from 'react'


    const Footer = () => {
      return (
        <footer className='fixed border border-mypink bottom-0 left-0 right-0 z-10 bg-myindigo opacity-100'>
          <div className='flex items-center justify-center container text-base font-medium text-white lg:py-6 flex-wrap gap-2 mx-auto px-4 py-2'>
          <Image src="/mylogo.png" alt="logo" width={50} height={50}/>
          All Rights Reserved.
        
          </div>
        </footer>
  
  
    

  )
}

export default Footer