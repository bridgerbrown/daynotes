import React from 'react'
import { format } from 'date-fns'

export default function Today(props: any) {
  const { selectedDay } = props;

  return (
    <section className='bg-gray-100 flex justify-center items-center w-[8.5in] pt-8 pb-0 '>
      <div className='flex-col flex justify-center items-center'>
        <h1 className='text-black font-light text-4xl mb-2'>
            {format((new Date(selectedDay)), 'EEE, LLLL dd')}
        </h1>
        <h2 className='font-regular text-md'>
          TODAY
        </h2>
      </div>
    </section>
  )
}
