import Link from 'next/link';
import React from 'react'
import { HiCodeBracket } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";

interface PropsType{
  imgUrl:any,
  title: string,
  description:string,
  gitUrl:string,
  previewUrl:string,
}

const ProjectCard  : React.FC<PropsType> = ({imgUrl, title,description,gitUrl,previewUrl}) => {
  return (
    <div>
      <div className='h-52 md:h-72 rounded-t-xl relative group'data-aos="zoom-in-up"
       style={{background: `url(${imgUrl})`,backgroundSize:"cover"}}>
        <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full
         bg-slate-600 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 
         transition-all duration-500'>
          <Link href={gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-blue-400 hover:border-white group/link'>
          <HiCodeBracket className='h-10 w-10 text-blue-300
           absolute top-1/2 left-1/2 transform -translate-x-1/2 
           -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
          </Link>
          <Link href={previewUrl} className='h-14 w-14 border-2 relative 
          rounded-full border-blue-400 hover:border-white group/link'>
          <FaEye className='h-10 w-10 text-blue-300
           absolute top-1/2 left-1/2 transform -translate-x-1/2 
           -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
          </Link>
         </div>
        </div>
        <div className='text-white rounded-b-xl mt-3 bg-slate-400 py-6 px-4'>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-myindigo'>{description}</p>
        </div>
        </div>
  )
}

export default ProjectCard