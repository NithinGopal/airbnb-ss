import React from 'react'

const Footer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxury</p>
        </div>
        
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessiblity</p>
            <p>This is not a real site</p>
            <p>Its a clone</p>
            <p>Referral Accepted</p>
            <p>Practice</p>
        </div>

        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Papa React</p>
            <p>Presents</p>
            <p>Zero to Full Stack Hero</p>
            <p>Hundred of Pros</p>
            <p>Join Now</p>
        </div>

        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold'>Support</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Say Hi</p>
            <p>Easter Eggs</p>
            <p>Insert Comment</p>
        </div>
        
    </section>
  )
}

export default Footer