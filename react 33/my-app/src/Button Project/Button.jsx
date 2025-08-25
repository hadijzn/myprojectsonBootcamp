import React from 'react'
import style from './common/input/Button.module.css'
export default function Button({varient , buttonType , disabled ,children } ) {
    console.log('varient is ',varient);
    // console.log('buttonType is ', buttonType);
    // console.log('disabled is ',disabled);
    // console.log('children is ',children);
  return (
          // <button className={`${"btn"}
          // ${varient === "primary" && style.primary}
          // ${error === "error" && style.error}
          // ${warning === "warning" && style.warning}
          // ${success === "success" && style.success}
          // `}>  {children} </button>
  //         <button className={`btn ${
  //              varient === "primary" ? style.primary : 
  //              varient === "error" ? style.error :
  //              varient === "warning" ? style.warning :
  //              varient === "success" ? style.success : ""
  // }`}
  <button className={`text-white cursor-pointer rounded-md p-[7px] mx-3 my-2
  ${varient === 'primary' ? "bg-blue-500":""}
  ${varient === 'warning' ? "bg-orange-500":""}
  ${varient === 'error' ? "bg-red-500":""}
  ${varient === 'success' ? "bg-green-500":""}
  ${(buttonType === 'outline' && varient=='primary') ? "border border-blue-500 text-blue-500 " : ""}
  ${disabled ? " bg-gray-500 text-black cursor-not-allowed":""}
  `}>
{children}
  </button>
  )
}
