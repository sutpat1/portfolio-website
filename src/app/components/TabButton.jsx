import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active 
    ? "text-white border-b border-rose-600" 
    : 'text-[#ADB7Be]';
  
return (
    <button onClick={selectTab} >
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
        </p>
    
    </button>
  )
}

export default TabButton