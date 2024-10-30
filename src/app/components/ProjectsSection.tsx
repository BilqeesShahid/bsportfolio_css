"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'


interface PropsType{
  name: string,
  onClick:boolean,
  isSelected:boolean
}

const ProjectTag: React.FC<PropsType> = ({ name, onClick, isSelected }) => {
  const buttonClass = isSelected ? "project-tag selected" : "project-tag unselected";
  return (
    <button className={buttonClass} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};
 

const projectData = [
  {
    id:1,
    title:"React Portfolio website",
    description:"Project 1 using Next.js & Tailwind Css",
    image:"/profile.webp",
    tag:["All","Web"],
    gitUrl:"https://github.com/BilqeesShahid/bilqeesportfolio",
    previewUrl:"https://bilqeesportfolio.vercel.app/",
  },
  {
    id:2,
    title:"Resume Buider Form",
    description:"Project 2 using HTML,CSS,Typescript",
    image:"/resume1.png",
    tag:["All","Web"],
    gitUrl: "https://github.com/BilqeesShahid/bjbuildresume",
    previewUrl: "https://bjbuildresume.vercel.app",
  },
  {
    id:3,
    title:"Countdown Timer",
    description:"Project 3 using Next.js & React",
    image:"/countdown.jpg",
    tag:["All","Web"],
    gitUrl:"https://github.com/BilqeesShahid/30dayscodingchalleneg/tree/main/app",
    previewUrl:"https://01bilqeescountdowntimer.vercel.app",
  },
  {
    id:4,
    title:"Single Page Ecommerce website",
    description:"Project 4 using Next.js & Tailwind Css",
    image:"/mypro1.jpg",
    tag:["All","Web"],
    gitUrl:"https://github.com/BilqeesShahid/Q201assignment",
    previewUrl:"https://q2my01assignment.vercel.app",
  },
  {
    id:5,
    title:"Figma Template E-com website",
    description:"Project 5 using Next.js & Tailwind Css",
    image:"/SharedScreenshot.jpg",
    tag:["All","Web"],
    gitUrl:"https://github.com/BilqeesShahid/Q2bilqeesfigmatemplate",
    previewUrl:"https://q2bilqeesfigmatemplate.vercel.app",

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
    <div id="projects" className='container'>
    <div data-aos="zoom-in-up" className='project-header'>My Projects</div>
    <div data-aos="zoom-in-up" className='project-tags-row'>
  <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/> 
  <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/> 
  <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>          
    </div>
    <div data-aos="zoom-in-up"  className='projects-grid'>{filteredProjects.map((project) => 
      <ProjectCard key={project.id}
    title={project.title}
    description={project.description}
    imgUrl={project.image}
    gitUrl={project.gitUrl}
    previewUrl={project.previewUrl}
  />)}
    </div>
    </div>
  )
}

export default ProjectsSection;
