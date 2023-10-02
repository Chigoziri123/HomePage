import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import doctor1 from '../assets/doctor1.jpg'
import doctor2 from '../assets/doctor2.jpg'
import doctor3 from '../assets/doctor3.jpg'
import doctor4 from '../assets/doctor4.jpg'
import doctor5 from '../assets/doctor5.avif'

const DoctorDetails = () =>{
  return (
    <div className='flex gap-4 p-3 border-b-[1px] border-purple-300 mb-4 items-center '>
        <img src={doctor1} alt='a doctor' width={90} height={90} className='rounded-xl
        object-cover h-[100px] w-[100px]'/>

        <div>
            <h2 className='text-[20px] font-semibold'>Doctor Name</h2>
            <h2 className='text-[15px] font-gray-700'>Specialization</h2>
            <h2 className='text-[15px] text-gray-500'>Address</h2>
            <div className='flex gap-2 items-center'>
                <BsFillStarFill className='w-4 h-4 text-yellow-500'/>
                <h2>4.2</h2>
            </div>
        </div>
    </div>


   
  )
}

export default DoctorDetails