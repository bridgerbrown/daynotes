import React from 'react'
import { format } from 'date-fns'

export default function PrevNextButtons(props: any) {
  const { prevDay, nextDay, selectedDay } = props;
  const buttonDatesCSS: string = `mb-2 text-black/60 text-sm`;
  const buttonCSS: string = `mb-2 bg-green-600 font-light text-white w-24 py-3 rounded-md text-base`;

  return (
    <section className='bg-gray-100 flex justify-between items-center w-[8.5in] pt-0 pb-0 '>

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
