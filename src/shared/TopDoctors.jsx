import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import DoctorDetails from './DoctorDetails'
const TopDoctors = () => { 
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2 className='text-[20px] mt-3 font-bold mb-3 flex items-center justify-between'>Doctors Near You
            <span className='flex'>
                {count> 0? <BsChevronLeft onClick={()=>setCount(count-1)} className='w-10 h-10 p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-100 cursor-pointer rounded-lg' />:null}
                <BsChevronRight onClick={()=>setCount(count+1)} className='w-10 h-10 p-2 text-gray-400 hover:text-purple-400 hover:bg-purple-100 cursor-pointer rounded-lg' />
            </span>
        </h2>

        <div>
            <DoctorDetails />
        </div>
    </div>
  )
}

export default TopDoctors