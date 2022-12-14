import React from 'react'
import Image from 'next/image'

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className='relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image alt={title} src={img} fill sizes='100%' style={{ objectFit: 'cover'}} />
        </div>
        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl font-semibold mb-3 w-64'>{title}</h3>
            <p className='text-gray-800'>{description}</p>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard