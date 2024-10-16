"use client";
import { useState } from 'react';
//ed6f5847-3d77-4390-a179-e2b8a96e3b56
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
const EmailSection = () => {
  const [result, setResult] = useState("Send Message");

  const sendMessage = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ed6f5847-3d77-4390-a179-e2b8a96e3b56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

   return (
    <section id="contact"className='grid md:grid-cols-2 my-12 py-24 px-8 md:px-24 gap-8 relative'>
       
      {/* First Column (Text & Social Links) */}
      <div className='z-10'>
        <h5  data-aos="zoom-in-up" className='text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 my-2'>Let's Connect</h5>
        <p  data-aos="zoom-in-up" className='text-myblue text-lg lg:text-xl mb-4 max-w-md'>
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I will try my best to get back to you.
        </p>
        <div  data-aos="zoom-in-up" className='socials flex flex-row gap-4'>
          <Link href="https://github.com" target="_blank"> 
            <FaGithub className='text-2xl text-purple-700 hover:text-mypink' />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className='text-2xl text-myblue hover:text-mypink' />
          </Link>
          </div>
          <div>
      <div  data-aos="zoom-in-up" className='mt-3 text-myblue'>
        <AiOutlineMail className="text-green-700" size={30}/>bilqeesshahis@gmail.com
      
      <div  data-aos="zoom-in-up" className='mt-3 text-myblue'>
        <BsTelephone className='text-green-700' size={30}/> (021) 000-0000
      </div>
      </div>
</div>
</div>


      {/* Second Column (name) */}
      <div>
        <form onSubmit={sendMessage} className='text-xl max-w-3xl border-2 p-6'>
          <div className='mb-6'> 
          <label data-aos="zoom-in-up"className='text-myindigo block mb-2 text-sm font-medium'>
            Name
          </label>
          <input
          name="name"
            type="text"
            id="name"
            required
            className='bg-white border border-gray-300 placeholder-slate-400 text-black rounded-lg block w-full p-2.5'
            placeholder='Enter your name..'
          />
          </div>
          {/*subject of email*/ }
          <div className='mb-6'> 
          <label  data-aos="zoom-in-up" htmlFor="subject" className='text-myindigo block mb-2 text-sm font-medium'>
            Email
          </label>
          <input
          name="email"
            type="text"
            id="email"
            required
            className='bg-white border border-gray-300 placeholder-slate-400 text-black rounded-lg block w-full p-2.5'
            placeholder='Enter your email...'
          />
          </div>
          {/*text area*/ }
          <div className='mb-6'> 
          <label data-aos="zoom-in-up" className='text-myindigo block mb-2 text-sm font-medium'>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className='bg-white border border-gray-300 placeholder-slate-400 text-black rounded-lg block w-full p-2.5'
            placeholder="Enter your message..."
          />
          </div>
         <button 
         type="submit"  data-aos="zoom-in-up"
         className='bg-mypink hover:bg-mygray opacity-100
          text-myindigo font-medium py-2.5 px-5 rounded-lg w-full'>{result}</button>
          
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
