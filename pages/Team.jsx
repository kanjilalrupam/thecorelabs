import React from 'react'
import {BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs'
import Image from 'next/image'

import rupam from '../public/rupam.jpeg'
import raja from '../public/raja_mishra.jpeg'


function Team() {
  return (
    <>
    <div className="container flex justify-center mx-auto pt-10">
          <div>
              
              <h1 className="xl:text-4xl text-3xl text-center text-[#A460ED]  font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto mt-[-50px]">The Talented People Behind the Scenes of the Organization</h1>
          </div>
      </div><div className="w-full bg-gray-100px-10 pt-10">
              <div className="container mx-auto">
                  <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-center lg:gap-16 flex-wrap md:justify-around sm:justify-around ">

                        {/* MEMBER 1 */}
                      <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                          <div className="rounded overflow-hidden shadow-md bg-white"> 
                              <div className="absolute -mt-20 w-full flex justify-center">
                                  <div className="h-32 w-32 ">
                                    <div className='rounded-full object-cover h-full w-full shadow-md'>
                                    <Image src={rupam} alt="Rupam Kanjilal" className='rounded-full'/>
                                    </div>
                                     
                                  </div>
                              </div>
                              <div className="px-6 mt-16">
                                  <h1 className="font-bold text-black text-3xl text-center mb-1">Rupam Kanjilal</h1>
                                  <p className="text-gray-800  text-sm text-center">Web Developer</p>
                                  <p className="text-center text-gray-800  text-base pt-3 font-normal">Innovative, task-driven professional for web design and development across
diverse industries. Equipped with a record of success in consistently identifying and providing the
technological needs of companies through ingenious innovation.</p>
                                  <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="https://www.facebook.com/abhijit.sarkar.7564129" className="mx-5">
                                          <div aria-label="Facebook" role="img">
                                              <BsFacebook/>
                                          </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                          <div aria-label="Instagram" role="img">
                                              <BsInstagram/>
                                          </div>
                                      </a>
                                      <a href="https://www.linkedin.com/in/rupam-kanjilal-735592160/" className="mx-5">
                                          <div aria-label="Linkedin" role="img">
                                              <BsLinkedin/>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* MEMBER 2 */}
                      <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                          <div className="rounded overflow-hidden shadow-md bg-white"> 
                              <div className="absolute -mt-20 w-full flex justify-center">
                                  <div className="h-32 w-32">
                                  <div className='rounded-full object-cover h-full w-full shadow-md'>
                                    <Image src={raja} alt="Raja Mishra" className='rounded-full'/>
                                    </div>
                                  </div>
                              </div>
                              <div className="px-6 mt-16">
                                  <h1 className="font-bold text-black text-3xl text-center mb-1">Raja Mishra</h1>
                                  <p className="text-gray-800  text-sm text-center">Graphic Designer</p>
                                  <p className="text-center text-gray-800  text-base pt-3 font-normal">Creative graphic designer with innovative ideas and a unique approach to visuals. Years of experience developing designs for print media, online websites, video, and advertising. Solid understanding of marketing principles and advertising techniques.</p>
                                  <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="https://www.facebook.com/raja.mishra.777" className="mx-5">
                                          <div aria-label="Facebook" role="img">
                                              <BsFacebook/>
                                          </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                          <div aria-label="Instagram" role="img">
                                              <BsInstagram/>
                                          </div>
                                      </a>
                                      <a href="https://www.linkedin.com/in/rajamishra53/" className="mx-5">
                                          <div aria-label="Linkedin" role="img">
                                              <BsLinkedin/>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div></>

    
  )
}

export default Team