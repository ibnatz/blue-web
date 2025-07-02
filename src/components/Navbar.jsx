import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent relative'>
        <div>
        <img src={assets.logo} alt="" />
        </div>
        <div className='flex-1 flex justify-center'>
        <ul className='hidden md:flex gap-7 text-black'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400 text-2xl font-sembold'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400 text-2xl font-sembold'>About</a>
          <a href="#Services" className='cursor-pointer hover:text-gray-400 text-2xl font-sembold'>Services</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400 text-2xl font-sembold'>Testimonials</a>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar