import React from 'react'
import { GrSearch, GrFavorite } from 'react-icons/gr'
import logo from '../assets/map-locator-icon-16.png'

const SideNavBar = () => {
    const menu=[
        {
            id:1,
            name: 'search',
            logo: <GrSearch />
        },

        {
            id:2,
            name: 'favorite',
            logo: <GrFavorite />
        }
    ]
 
    return (
    <div className='p-2 items-center flex flex-col w-[100px] space-y-4 shadow-md shadow-purple-400
      top-0 bg-white z-20'>
        <img src= { logo } alt='logo' width='50' height='50'/>

        {menu.map((item) => (
            <div key={item.id} className='w-10 h-10 hover: text-purple-500 hover:bg-purple-100
            p-2 cursor-pointer rounded-lg'> {item.logo} </div>
            
        ))}
    </div>
  )
}

export default SideNavBar