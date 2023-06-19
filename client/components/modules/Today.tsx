import React from 'react'
import { format } from 'date-fns'

export default function Today(props: any) {
  const { selectedDay } = props;
  const buttonDatesCSS: string = `text-black/60 text-md`;
  const buttonCSS: string = `mb-2 bg-button/60 font-light text-white w-24 py-3 rounded-md text-base`;

  return (
    <section className='bg-gray-100 flex justify-center items-center w-[8.5in] pt-12 pb-0 '>
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
