import React from 'react'
import Image from 'next/image'

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 p-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        {/* image */}
        <div className='relative h-16 w-16'>
            <Image alt={location} src={img} fill sizes='100%' className='rounded-lg' />
        </div>
        {/* text */}
        <div>
            <h2 className='text-gray-800 font-semibold'>{location}</h2>
            <h3 className='text-gray-500 text-sm'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard