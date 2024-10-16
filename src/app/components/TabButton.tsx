import React from 'react'

interface PropsType{
  active:any,
  selectTab:any,
  children:any

}

 const TabButton: React.FC<PropsType> = ({active,selectTab, children}) => {

  const buttonClasses= active ? 'text-myindigo border-b  border-mypink' : 'text-myblue border-b border-purple-500'
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-mypink ${buttonClasses}`}>
      {children}
      </p>
     </button>
  )
}

export default TabButton;