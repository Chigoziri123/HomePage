import React from 'react'

const SpecializationItem = ( {specialization} ) => {
  return (
    <div className='flex flex-col flex-wrap items-center bg-purple-100 p-3 rounded-2xl
    hover:scale-105 transition-all duration-100 cursor-pointer'>
        <img src={specialization.icon}
        alt={specialization.name}
        width={45}
        height={45}/>
        <h2 className='text-[12px] text-purple-700'>{specialization.name}</h2>
    </div>
  )
}

export default SpecializationItem