"use client"
import { useTransition, useState } from 'react'
import Image from 'next/image'
import React from 'react'
import TabButton from './TabButton'


const Tab_Data= [
  {
  title:"Skills", 
  id:"skills",
  content:(
    <ul  data-aos="zoom-in-up" className='text-myblue font-bold list-disc pl-2'>
      <li data-aos="zoom-in-up">HTML</li>
      <li data-aos="zoom-in-up">CSS</li>
      <li data-aos="zoom-in-up">JavaScript</li>
      <li data-aos="zoom-in-up">Next.JS</li>
      <li data-aos="zoom-in-up">React</li>
      <li data-aos="zoom-in-up">Shadcn</li>
      <li data-aos="zoom-in-up">TailwindCss</li>
   </ul>
  )},
  {
    title:"Education",
    id:"education",
    content:(
      <ul className='text-myblue font-bold list-disc pl-2'>
        <li data-aos="zoom-in-up">Electronics Engineering.</li>
        <li data-aos="zoom-in-up">Full stack web development,</li>
        
         
     </ul>
    )},
    {
      title:"Certification",
      id:"certification",
      content:(
        <ul className='text-myblue font-bold list-disc pl-2'>
          <li data-aos="zoom-in-up">BE-Electronics,</li>
          <li data-aos="zoom-in-up">Mehran University of Engineering.</li>
          <li data-aos="zoom-in-up">Doing certification of web development</li>
           
       </ul>
      )},
]



const AboutSection = () => {
  const [tab ,setTab]= useState("skills");
  const [isPending,startTransition]= useTransition();
  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(()=> {
      setTab(id)
    });
  }
  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/about.jpg" alt="About Me" width={500} height={500}/> 
<div className='mt-4 md:mt-0 text-left flex flex-col h-full '> 
  
  <h1 data-aos="zoom-in-up" className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700'>About Me!</h1>
<p  data-aos="zoom-in-up" className='text-base lg:text-xl text-myblue'>
  I am a full stack developer with a passion for creating interactive and responsive web application. 
  I have experience working with HTML, CSS, JAVASCRIPT, React, Redux, Next.js and Git. 
  I am quick learner and I am always looking to expand my knowledge and skill set. I am a team player and
  I am excited to work with others to create amazing applications.
</p>
<div className="flex flex-row justify-start mt-8">
  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
    {" "}Skills{" "}
  </TabButton>

  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
    {" "}Education{" "}
  </TabButton>

  <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
    {" "}Certification{" "}
  </TabButton>
   
</div>
<div className='mt-8'>{Tab_Data.find((t) => t.id === tab)?.content}</div>
      </div>
          </div>
                 </section>
  )
}

export default AboutSection