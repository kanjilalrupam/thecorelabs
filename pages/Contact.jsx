import React, { useState } from 'react'
import {AiOutlineForm} from 'react-icons/ai';

export default function Contact() {

    const [formState,setFormState] = useState({});




    const changeHandler= (event) =>{
        setFormState({...formState,[event.target.name]: event.target.value})
    }

    const submitHandler=(e) =>{
        e.preventDefault();

        const config = {
       
            SecureToken:"0aa30c06-7222-4e6d-8d92-c8b8924b17cd",
            To : 'rupam.kanjilaliem@gmail.com',
            From : formState.email,
            Subject : `Message from ${formState.name}`,
            Body : formState.message
        }
        if(window.Email){
            window>Email.send(config).then(()=>alert("Email Sent"));
        }
    }
  return (
    <>
    <section class="bg-[#A460ED] py-6  overflow-hidden relative z-10 px-10 flex justify-center items-center flex-col gap-8">
      <h1 className='text-4xl text-white font-bold mt-[-2rem]'>Contact us</h1>
      <p className='text-white text-lg font-semibold text-center'>Fill up the form below, so that we can get in touch with you ASAP!</p>
      <a className='bg-white h-auto w-[auto] text-2xl font-bold py-2 px-4  text-center rounded-lg flex  items-center '  href="https://form.jotform.com/222825920072452"> <AiOutlineForm className="mr-2"/> Contact Form</a>
      </section>
    
    </>
  )
}
