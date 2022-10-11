import React from 'react'
import {BsWhatsapp} from "react-icons/bs"
function ButtonC(props) {
  return (
    <>
    <a  href='https://wa.me/917001911814?text=' className={`${props.classItem} mt-[-5px] duration-500 rounded-lg  py-1 lg:py-2 px-6 flex justify-center items-center md:text-xl`}><BsWhatsapp className="mr-2"/> Connect</a>
              
    </>
  )
}

export default ButtonC