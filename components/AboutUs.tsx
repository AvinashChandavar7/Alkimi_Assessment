import React from 'react'
import TitleHeader from './TitleHeader'
import Image from 'next/image'
import { lorem } from '@/constants'


const AboutUs = () => {
  return (
    <section className="h-[859px]  justify-center items-center px-16 py-4 hidden 2xl:flex">
      <div className='h-[662px]   flex flex-row '>

        <div className='relative z-0 flex-1 p-10 m-0 '>
          <Image width={100} height={100}
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full opacity-0 z--10 hover:opacity-100 "
            src='/background.png' alt="mainAboutusImage"
          />

          <div>
            <TitleHeader title={"About"} />
            <TitleHeader title={"us"} />
            <p className='text-gray-500 '>Lorem</p>
            <p className='text-gray-500 '>Lorem</p>

            <Image width={400} height={400}
              className="absolute pointer-events-none bottom-20 left-1/3 -z-50 "
              src='/background1.png'
              alt="background1"
            />
          </div>
        </div>

        <div className='flex items-center justify-center flex-1 '>
          <p className='p-12 opacity-60'>{lorem} </p>
        </div>

      </div>
    </section>
  )
}

export default AboutUs