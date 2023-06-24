import { TitleHeaderProps } from '@/types'
import React from 'react'

const TitleHeader = ({ title, title1 }: TitleHeaderProps) => {
  return (<>
    <h1 className=' 2xl:text-[120px] sm:text-[60px] text-[30px] font-bold uppercase' >{title}</h1>
    <h1 className='2xl:text-[34px]  text-[20px] font-semibold uppercase' >{title1}</h1>
  </>
  )
}

export default TitleHeader;