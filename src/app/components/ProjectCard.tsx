import Link from 'next/link';
import React from 'react'
import { HiCodeBracket } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";

 

interface CardPropsType {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<CardPropsType> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
    <div className='project-card'data-aos="zoom-in-up"
       style={{background: `url(${imgUrl})`,backgroundSize:"cover"}}>
        <div className="group position-relative">
        <div className="overlay flex-center">
          <Link href={gitUrl} className='link'>
          <HiCodeBracket className='card-icon'/>
          </Link>
          <Link href={previewUrl} className='link'>
          <FaEye className='card-icon'/>
          </Link>
         </div>
         </div>
        </div>
        <div className='custom-class'>
          <h5 className='project-card-title'>{title}</h5>
          <p className='project-card-description '>{description}</p>
        </div>
        </div>
  )
}

export default ProjectCard;