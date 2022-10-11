
import logo1 from '../public/Logo2.png';
import Image from "next/image";
import ButtonC from "./ButtonC"
import { useState } from 'react';


export default function Navcomponent() {
  
  const [navBar,setNavBar] = useState(false);

  if (typeof window !== "undefined") {
    // Client-side-only code
  window.onscroll = function() {scrollFunction()};

  }

  function scrollFunction() {
    if (document.body.scrollTop > 10|| document.documentElement.scrollTop > 10) {
      setNavBar(true);
    }
    else{
      setNavBar(false);
    }
  }

    
    return (
        // <nav  className={navbar ? "w-full bg-white shadow sticky top-0  transition-all duration-300 py-4": "w-full bg-white shadow py-6"}>
        <nav  className={ navBar=== true ?  "w-full bg-purple-400 shadow-lg z-20 py-4 fixed top-0 ": "w-full bg-[#a460ed] z-20 py-6 " }>
          <div className=" flex justify-between items-center  pr-6 md:px-10 lg:px-20">
            <div className='relative h-[fit] w-[150px] py-2'>
            <Image src={logo1} className="" alt='corelabs'  objectFit='cover' />
            </div>
            <div>
              <ButtonC classItem={navBar ? "bg-[#5bff6f] hover:bg-[#44be53] text-white shadow-md ":"bg-white hover:bg-gray-200 duration-500 shadow-md shadow-gray-200"}/>
            </div>
          </div>  
            
        </nav>
    );
}