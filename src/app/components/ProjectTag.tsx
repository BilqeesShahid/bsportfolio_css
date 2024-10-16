import React from 'react'


interface PropsType{
  name: string,
  onClick:any,
  isSelected:boolean
}

const ProjectTag:React.FC<PropsType>= ({name,onClick,isSelected}) => {
  const buttonStyles= isSelected ? "text-white bg-purple-500": "text-blue-400 bg-slate-600 hover:border-white"
  return (
    <button className={`${buttonStyles} rounded-full border-2 
    px-6 py-3 text-xl cursor-pointer`}
    onClick={() => onClick(name)}>
      {name}
      </button>
  )
}

export default ProjectTag