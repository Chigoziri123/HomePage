import React from 'react'
import { GrSearch } from 'react-icons/gr'

const SearchBar =() => {
  return (
    <div className='flex gap-3 bg-purple-100 p-3 rounded-xl'>
        <GrSearch className='w-6 h-6 text-purple-400'/>
        <input type='text' 
        placeholder='Search' 
        onKeyDown={(e)=>e.key=='Enter'}
        className='bg-transparent outline-none w-full text-[17px]
        placeholder-purple-400'/>
    </div>
  )
 
}

export default SearchBar