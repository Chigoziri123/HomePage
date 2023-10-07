import React from 'react'
import {BsFillGiftFill} from 'react-icons/bs'
import patientDoctorChat from '../assets/patient-doctor-consult.jpg'
import { useTranslation } from 'react-i18next';

const Timeline = () =>{

  return (
    <div className='md:px-14 p-4 max-w-s mx-auto'>
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8 bg-gray-200 min-h-screen flex justify-center p-20'>
            
                {/* Image */}
                <div className='md:w-1/2 h-screen flex items-center rounded-full'>
                <img src={patientDoctorChat} alt='a patient consulting a doctor' className='rounded-full'/>
                </div> 
       
                {/* Content */}
                <div className='md:w-2/5'>
                    <h2 className='text-3xl text-primary font-bold lg:w-full mb-7'>How Does It Work?</h2>
                    <ul>
                        <li className='relative flex gap-6 pb-5 items-baseline'>
                            <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-900'>
                            <BsFillGiftFill className='pr-1'/>
                            </div>
                            <div>
                                <p className='text-primary text-2xl font-2xl'>Sign Up</p>
                                <p className='text-tertiary mt-2'>Join the future of healthcare by signing up online.
                                </p>
                            </div>
                        </li>

                        <li className='relative flex gap-6 pb-5 items-baseline'>
                            <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-900'>
                            <BsFillGiftFill className='pr-1'/>
                            </div>
                            <div>
                                <p className='text-primary text-2xl font-2xl'>Consult a Doctor</p>
                                <p className='text-tertiary mt-2'>Connect with a qualified doctor virtually, 
                                sharing your health concerns and symptoms for expert guidance.
                                </p>
                            </div>
                        </li>

                        <li className='relative flex gap-6 pb-5 items-baseline'>
                            <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-900'>
                            <BsFillGiftFill className='pr-1'/>
                            </div>
                            <div>
                                <p className='text-primary text-2xl font-2xl'>Get a Doctor's Medical Report</p>
                                <p className='text-tertiary mt-2'>Receive your tailored medical report electronically into your inbox.
                                </p>
                            </div>
                        </li>

                        <li className='relative flex gap-6 pb-5 items-baseline'>
                            <div className='before:absolute before:left-[5.5px] before:h-24 before:w-[1px] before:bg-gray-900'>
                            <BsFillGiftFill className='pr-1'/>
                            </div>
                            <div>
                                <p className='text-primary text-2xl font-2xl'>Order Your Medication</p>
                                <p className='text-tertiary mt-2'>With a click, order your prescribed medication and have it delivered right to your doorstep.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Timeline

