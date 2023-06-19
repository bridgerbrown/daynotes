import React from 'react'
import { format } from 'date-fns'

export default function DateHeader(props: any) {
  const { prevDay, nextDay, selectedDay } = props;
  const buttonDatesCSS: string = `text-black/60 text-sm font-thin`;
  const buttonCSS: string = `mb-2 bg-gray-400 font-thin text-white w-24 py-2.5 opacity-60 hover:opacity-100 transition-opacity rounded-md text-base`;

  return (
    <section className='flex justify-between items-center w-full px-8 pt-6 pb-2 '>

      <div className='flex flex-col justify-center items-center'>
        <button onClick={prevDay}
          className={buttonCSS}
        >
          Prev
          </button>
        <h3 className={buttonDatesCSS}>
          {format((new Date(selectedDay)), 'EEE, LLLL dd')}
        </h3>
      </div>

      <section className='mb-6 flex justify-center items-center w-[8.5in] pb-0 '>
        <div className='flex-col flex justify-center items-center'>
          <h2 className='opacity-60 font-thin text-sm'>
            TODAY
          </h2>
          <h1 className='text-black font-regular text-3xl'>
              {format((new Date(selectedDay)), 'EEE, LLLL dd')}
          </h1>
        </div>
      </section>
      
      <div className='flex flex-col justify-center items-center'>
        <button onClick={nextDay}
          className={buttonCSS}
        >
          Next
          </button>
        <h3 className={buttonDatesCSS}>
          {format((new Date(selectedDay)), 'EEE, LLLL dd')}
        </h3>
      </div>
    </section>
  )
}
