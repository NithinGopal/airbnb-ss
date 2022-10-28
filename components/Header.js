import React from 'react'
import Image from 'next/image'
import { BiSearch, BiUser } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* left-logo  */}
        <div className='relative flex items-center h-10 w-32 cursor-pointer my-auto'>
            <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                alt='logo' 
                fill 
                object-fit="contain" 
                position="obsolute" 
            />
        </div>
        {/* middle-search */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input type="text" placeholder='Start your search' className='flex-grow pl-2 bg-transparen outline-none text-sm text-gray-600 placeholder-gray-400 ml-1' />
            <BiSearch className='hidden md:inline-flex h-8 w-8 p-2 bg-red-400 rounded-full text-white cursor-pointer md:mx-2' size={12}/>
        </div>
        {/* right-become host-lang globe-menu profile icon */}
        <div className='flex items-center justify-end space-x-4'>
          <p className='hidden md:inline text-gray-500 cursor-pointer'>Become a Host</p>
          <BsGlobe className='text h-6 text-gray-500 cursor-pointer' size={20} />
          <div className='flex items-center space-x-1 border-2 rounded-full p-1 border-gray-300'>
            <AiOutlineMenu className='text-gray-500 cursor-pointer' size={20}/>
            <FaUserCircle className='text-gray-500 cursor-pointer' size={24}/>
          </div>
        </div>
    </header>
  )
}

export default Header