import React from 'react';
import mapImage from '../assets/maponphone.jpg';
import mapMarker from '../assets/mapmarker.png';



const BasicMap = () => {

  return (
    <div className='md:px-14 rounded:lg p-4 max-w-s mx-auto py-10 my-16 bg-gray-400 w-[90%]'>
      <h2 className='text-center md:text-3xl text-3xl py-2 font-bold text-white mb-5 leading-normal'>Find a doctor near you.</h2>
      <div className='flex md:flex-row md:items-center md:justify-center'>

        <div className='mb-4 md:mb-0 md:mr-4'>
            <img src={mapImage} className='h-96 w-full md:w-96 rounded-full' alt='a map screenshot' />
          </div>

          <div className='md:block ml-[-150px] mb-56'>
            <img src={mapMarker} className='h-40 w-40 rounded-full' alt='a map marker' />
          </div>
       

       
       
      </div>

    </div>
  );
};

export default BasicMap;
