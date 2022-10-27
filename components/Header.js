import React from 'react'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/24/solid'

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
        {/* middle-search bar  */}
        <div>
            <input type="text" placeholder='Start your search' />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
</svg>

        </div>
        {/* right */}
        <div></div>
    </header>
  )
}

export default Header