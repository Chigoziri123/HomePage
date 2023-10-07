import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

import emzor from '../assets/Emzor.png'
import gsk from '../assets/GSK-logo-vector.png'
import ifitness from '../assets/ifitness-logo.png'
import healthyfood from '../assets/HealthyFoods.jpg'
import wemabank from '../assets/wemabank.jpg'
import { useTranslation } from 'react-i18next'

const PartnerList = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 1000;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollRight = slider.scrollRight + 1000;
    }

  return (
   <>
        <div>
            {/* Heading */}
            <div className='w-full object-cover'>
                <h2 className='text-3xl text-primary font-bold lg:w-full ml-4'>Our Partners:</h2>
            </div>
            {/* Images */}
            <div className='relative flex items-center'>
                <MdChevronLeft onClick={slideLeft} size={40} />
                <div id='slider'className='w-full h-full'>
                    <img src={ emzor } className='w-[220px] inline-block p-2 
                    cursor-pointer hover:scale-105 ease-in-out duration-300'/>
                    <img src={gsk } className='w-[220px] inline-block p-2 
                    cursor-pointer hover:scale-105 ease-in-out duration-300'/>
                    <img src={ healthyfood } className='w-[220px] inline-block p-2 
                    cursor-pointer hover:scale-105 ease-in-out duration-300'/>
                    <img src={ wemabank } className='w-[220px] inline-block p-2 
                    cursor-pointer hover:scale-105 ease-in-out duration-300'/>
                    <img src={ ifitness } className='w-[220px] inline-block p-2 
                    cursor-pointer hover:scale-105 ease-in-out duration-300'/>
                </div>
                <MdChevronRight onClick={slideRight} size={40} />
            </div>
        </div>
   </>
  )
}

export default PartnerList