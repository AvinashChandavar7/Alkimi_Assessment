"use client"
import React, { useState } from 'react'
import TitleHeader from './TitleHeader';
import Image from 'next/image';
import { getAccordionData } from '@/constants';

const Accordion = () => {

  const [open, setOpen] = useState<number | null>(null);

  const handleOpenClose = (index: number) => {
    setOpen((prev) => (prev === index ? null : index));
  }

  return (
    <section className=' 2xl:m-12 md:m-10 sm:m-4 sm:p-2'>
      <TitleHeader title='lorem ipsum dolor' />
      <p className='my-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti doloribus ullam quos autem maxime, nobis odit necessitatibus id eos incidunt delectus velit numquam sapiente veniam deleniti ipsum, vitae praesentium repellendus.</p>

      <div className='2xl:m-12 md:m-10 sm:m-4'>
        {
          getAccordionData.map((item, index) => (
            <div key={item.id} className='mb-2 rounded-md'>
              <button
                className={`w-full p-4 flex  justify-between  rounded-md overflow-hidden items-center ${open === index ? "bg-gradient-to-r from-violet-500 to-green-500" : "bg-black"} `}
                onClick={() => handleOpenClose(index)}
              >
                <h3 className="text-lg font-medium uppercase">{item.question}</h3>
                <span>
                  <Image
                    src={open === index ? "/minus.svg" : "/plus.svg"}
                    alt={open === index ? "minus" : "plus"}
                    width={20}
                    height={30}
                    className="object-contain"
                  />
                </span>
              </button>
              {
                open === index && (
                  <div className='p-5'>
                    <p className='text-gray-400'>
                      {item.answer}
                    </p>
                  </div>
                )}
            </div>
          ))}
      </div>

    </section>
  )
}

export default Accordion;



//   <div className="">
//     {props.data.map((item, index) => (
//       <div key={index} className="mb-2 bg-white border rounded-md">
//         <button
//           className="flex items-center justify-between w-full p-4 overflow-hidden bg-black border rounded-md"
//           onClick={() => handleClick(index)}
//         >
//           <h3 className="text-lg font-medium">{item.title}</h3>
//           <span>{activeIndex === index ? "-" : "+"}</span>
//         </button>
//         {activeIndex === index && (
//           <div className="p-4 bg-white">
//             <p className="text-black">{item.des}</p>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// );


