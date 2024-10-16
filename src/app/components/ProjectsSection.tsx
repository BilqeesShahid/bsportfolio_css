"use client"

import React,{useRef, useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
  {
    id:1,
    title:"React Portfolio website",
    description:"Project 1 using Next.js & Tailwind Css",
    image:"/profile.webp",
    tag:["All","Web"],
    gitUrl:"/",
    previewUrl:"/",
  },
  {
    id:2,
    title:"Resume Buider Form",
    description:"Project 2 using HTML,CSS,Typescript",
    image:"/resume1.png",
    tag:["All","Web"],
    gitUrl: "https://github.com/BilqeesShahid/Q2Milestone5/tree/main/milestone5",
    previewUrl: "https://q2milestone5sharable.vercel.app",
  },
  {
    id:3,
    title:"Countdown Timer",
    description:"Project 3 using Next.js & React",
    image:"/countdown.jpg",
    tag:["All","Web"],
    gitUrl:"https://github.com/BilqeesShahid/30dayscodingchalleneg/tree/main/app",
    previewUrl:"01bilqeescountdowntimer.vercel.app",
  },
  {
    id:4,
    title:"Single Page Ecommerce website",
    description:"Project 4 using Next.js & Tailwind Css",
    image:"/mypro1.jpg",
    tag:["All","Web"],
    gitUrl:"https://github.com/BilqeesShahid/Q201assignment",
    previewUrl:"q2my01assignment.vercel.app",
  },
  {
    id:5,
    title:"Figma Template Ecommerce website",
    description:"Project 5 using Next.js & Tailwind Css",
    image:"/SharedScreenshot.jpg",
    tag:["All","Web"],
    gitUrl:"https://github.com/BilqeesShahid/Q2bilqeesfigmatemplate",
    previewUrl:"q2bilqeesfigmatemplate.vercel.app",

  }
]
const ProjectsSection = () => {
  const [tag, setTag] =useState("All");
  const handleTagChange= (newTag: React.SetStateAction<string>) => {
    setTag(newTag);

  };
  const filteredProjects= projectData.filter((project) => 
    project.tag.includes(tag)
  )
  return (
    <>
    <div id="projects"data-aos="zoom-in-up" className='text-center text-2xl lg:text-5xl font-bold 
    text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  mt-4 mb-6'>My Projects</div>
    <div className='text-white flex flex-row items-center justify-center gap-2  py-6'>
  <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/> 
  <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/> 
  <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>          
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filteredProjects.map((project) => 
      <ProjectCard key={project.id}
    title={project.title}
    description={project.description}
    imgUrl={project.image}
    gitUrl={project.gitUrl}
    previewUrl={project.previewUrl}
  />)}
    </div>
    </>
  )
}

export default ProjectsSection