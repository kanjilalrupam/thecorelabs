import React, {useState} from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';


const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};
if (typeof window !== "undefined"){
window.addEventListener('scroll', toggleVisible);
}
return (
	<button className={`${visible ? 'fixed' : 'none'} z-30 text-gray-200 shadow-md shadow-[#a460ed] bg-[#a460ed] rounded-md bottom-10 right-6 `}>
	<BsFillArrowUpSquareFill className='h-[50px] w-[50px] ' onClick={scrollToTop} />
	</button>
);
}

export default ScrollButton;
