import Head from 'next/head'
import Navbar from './Navcomponent'

import {AiOutlineArrowRight,AiOutlineForm} from 'react-icons/ai'
import Image from 'next/image'

import Team from './Team'
import Contact from './Contact'

import hero from '../public/dev-ed-wave.png';
import ScrollButton from './ScrollButton'
import {BsWhatsapp} from "react-icons/bs"
import left from '../public/left_bg_landing_header.png'
import development from "../public/development.png"
import illustration from "../public/illustration.png"
import webDevelopment from "../public/web-development.png"

export default function Home() {



  return (
    <div className=''>
      <Head>
        <title>Corelabs</title>
        <meta name="description" content="Generated by Corelabs" />
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="CoreLabs IT Services is an online web service portal offering several services to aid the online growth and development of an individual or organisation. We intend to dedicate our services to help you make a mark of your passion with an effective online presence.
Choose from our multifarious services to provide a user-friendly, highly technical and end-to-end secure experience for your precious clientele. We care for your growth and benefit from a fruittful and cooperative association with our firm. Join with us today to start creating your online identity!"/>
<meta property="og:title" content="CoreLabs IT Services"/>
<meta property="og:description" content="CoreLabs IT Services is an online web service portal offering several services to aid the online growth and development of an individual or organisation. We intend to dedicate our services to help you make a mark of your passion with an effective online presence.
Choose from our multifarious services to provide a user-friendly, highly technical and end-to-end secure experience for your precious clientele. We care for your growth and benefit from a fruittful and cooperative association with our firm. Join with us today to start creating your online identity!"/>
<meta property="og:url" content="https://thecorelabs.in/"/>
<meta property="og:type" content="website"></meta>
      </Head>

      <main  className="transition-all duration-300">
        {/* Navbar  */}
        <Navbar  />

        {/* Hero Section  */}
        <section className='py-8 mt-[-18px]  lg:py-0 max-h-screen h-[100vh] lg:px-20 md:px-10 px-6 w-full bg-[#A460ED] ' >

          <div className='grid  auto-rows-auto md:grid-cols-2 lg:gap-24  '>
              <div className='w-full  flex flex-col items-center lg:items-start justify-center  
              leading-loose'>
                <h2 className='tracking-wide py-2 text-lg font-semibold text-gray-600'>We are a Tech Startup</h2>
                <h1 className='text-4xl lg:text-[72px] font-bold text-center lg:text-start  tracking-wide leading-none  text-[#EEEEEE]'> Make your life simplier with </h1>
                <span className='text-[#F07DEA] text-3xl lg:text-5xl font-bold py-5'>Corelabs</span>

                <div className='flex'>
                <a  href='https://wa.me/917001911814?text=' className="bg-green-400 hover:bg-green-800 duration-500 text-white rounded-lg lg:mt-6 py-2 px-6 flex justify-center items-center text-sm md:text-xl mr-6 "> <BsWhatsapp className="mr-2"/> Connect</a>
                <a  href='https://form.jotform.com/222825920072452' className="bg-white text-gray-800 font-semibold hover:bg-gray-200 duration-500 text-white rounded-lg lg:mt-6 text-sm py-2 px-6 flex justify-center items-center md:text-xl "> <AiOutlineForm className="mr-2"/> Contact Form</a>
                </div>
                
              
              </div>

              <div className='relative w-full mt-10 lg:mt-0 '>
              <div className='relative bg-gradient-to-b from-[#8119b8] rounded-full w-64 h-64  mt-8  lg:mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
              <Image alt='hero' src={hero} layout="fill" objectFit='cover' className='mb-10'/>
            </div>
              </div>

          </div>

        </section>

        {/* About us  */}
        <section className='lg:px-20 py-10 md:px-10 px-6 w-full  '>
        <h1 className='text-center text-5xl text-[#A460ED] font-bold  '>About us </h1>
        <div  className='h-[2px] w-[70px] mx-auto mt-5 bg-[#A460ED]'></div>


          <div className='flex md:flex-row  lg:justify-center gap-16  flex-col py-10'>
              <div className=' w-full lg:w-[60%] h-fit' >
                  <div className='relative '>
                    <div className=' lg:px-16 '>
                      <Image src={left} alt="left" width={1064} height={832}/>
                    </div>
                    
                  </div>
               </div>

               <div className='lg:w-[40%] w-full h-full'>
                  <p className='lg:text-xl font-semibold text-gray-600 leading-relaxed text-center md:text-start'>
                  CoreLabs IT Services is an online web service portal offering several services to aid the online growth and development of an individual or organisation. We intend to dedicate our services to help you make a mark of your passion with an effective online presence.
Choose from our multifarious services to provide a user-friendly, highly technical and end-to-end secure experience for your precious clientele. We care for your growth and benefit from a fruittful and cooperative association with our firm. Join with us today to start creating your online identity!
                  </p>
                  <a href="https://form.jotform.com/222825920072452" className=' w-[180px] mt-8 text-lg py-4 flex justify-center px-4 bg-transparent rounded-lg text-black border border-purple-600 hover:bg-purple-400 hover:text-white duration-200 flex items-center'>Know More <AiOutlineArrowRight className="ml-2"/> </a>
                  
               </div>
          </div>



        </section> 


        {/* Services Section  */}

        <section className='lg:px-20 py-16 md:px-10 px-6 w-full  bg-[#A460ED] '>
        <h1 className='text-center text-5xl text-[#fff] font-bold  '>Services We Offer </h1>
        
        <div  className='h-[2px] w-[140px] mx-auto mt-5 bg-[#fff]'></div>
        <p className='text-center py-4 text-xl mx-auto lg:w-[80%] text-white'>Choose from our multifarious services to provide a user-friendly, highly technical and end-to-end secure experience for your precious clientele.</p>
        
        <div className='flex pt-10 lg:w-[80%] mx-auto  flex-col lg:flex-row gap-16 px-10 lg:py-24'>
          {/* card 1 */}
          <div  className=' w-full lg:basis-1/3 h-full lg:h-[420px] px-2 border border-white rounded-xl shadow-lg hover:mt-[-1rem] hover:mr-[1rem] '>
              <div className='grid auto-rows-auto'>
                  <div className='mx-auto'>
                    <div className='h-36 w-36 pt-6'>
                      <Image src={development} alt="development"/>
                    </div>
                  
                  </div>
                  <div className='flex  flex-col items-center justify-center py-10'>
                    <h1 className='text-xl font-bold text-white'>App Development</h1>
                    <p className='py-10 text-center text-white px-4'>App development is the process in which we create an application to be used on smartphones, tablets and other mobile devices. </p>
                  </div>
              </div>
          </div>

          {/* card 2 */}
          <div  className=' w-full lg:basis-1/3 h-full lg:h-[420px] px-2 border border-white rounded-xl shadow-lg hover:mt-[-1rem] hover:mr-[1rem]'>
              <div className='grid auto-rows-auto'>
                  <div className='mx-auto h-36 w-36 pt-6'>
                    <Image src={illustration} alt="illustrations"/>
                  
                  </div>
                  <div className='flex  flex-col items-center justify-center py-10'>
                    <h1 className='text-xl font-bold text-white'>Graphic Design</h1>
                    <p className='py-10 text-center text-white '>Graphic design can be used by companies to promote and sell products through advertising, by websites to convey complicated information in a digestible way through infographics,</p>
                  </div>
              </div>
          </div>
          {/* card 3 */}
          <div  className=' w-full lg:basis-1/3 lg:h-[420px] px-2 border border-white rounded-xl shadow-lg hover:mt-[-1rem] hover:mr-[1rem]'>
              <div className='grid auto-rows-auto'>
                  <div className='mx-auto h-36 w-36 pt-6'>
                    <Image src={webDevelopment} alt="web development"/>
                  
                  </div>
                  <div className='flex  flex-col items-center justify-center py-10'>
                    <h1 className='text-xl font-bold text-white'>Web Development</h1>
                    <p className='py-10 text-center text-white '>Full-stackers take care of both the front-end and the back-end, and need to know how the web works on all levels, in order to determine how the client- and server-sides will relate.</p>
                  </div>
              </div>
          </div>
        </div>
        </section>


        {/* team section  */}

        <section className=' lg:px-20 py-16 md:px-10 px-6 w-full'>
        

        <Team/>


        </section>

         {/* Contact Us Section   */}

         <section className='lg:px-20 py-16 md:px-10 px-6 w-full bg-[#A460ED]'>
            <Contact/>
         </section>
          <footer className='py-4 text-lg lg:px-20 bg-sky-800 md:px-10 px-6 w-full'>
            <p className='text-white'>Made with  ❤️ || For any query please contact us : <a href="https://form.jotform.com/222825920072452" className='text-blue-600 px-2 font-bold'>Contact Form</a> </p>
          </footer>
        <ScrollButton/>

       </main>
      
     </div>
  )
}
