"use clients"
import { getBannerData } from '@/constants';
import React from 'react'

const Banner = () => {

  return (
    <div className='flex items-center w-full h-10 overflow-hidden bg-gradient-to-r from-violet-500 to-green-500'>
      <div className='whitespace-nowrap animate-marquee '>
        <p className='font-extrabold uppercase'>
          {getBannerData}
        </p>
      </div>
    </div>
  )
}

export default Banner;







