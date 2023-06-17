import React from 'react'
import format from 'date-fns/format'
import Image from 'next/image'

export default function DayHeader(props: any) {
  const { prevDay, nextDay, tomorrow, yesterday } = props;
  const buttonDatesCSS: string = `text-black/60 text-md`;
  const buttonCSS: string = `mb-2 bg-button/60 font-light text-white w-24 py-3 rounded-md text-base`;

  return (
    <section className='bg-gray-100 flex justify-between items-center w-[8.5in] pt-4 pb-4 '>
      <div className='flex flex-col justify-center items-center'>
        <button onClick={prevDay}
          className={buttonCSS}
        >
          Prev
          </button>
        <h3 className={buttonDatesCSS}>
          {yesterday}
        </h3>
      </div>
      
      <div className='flex-col flex justify-center items-center'>
        <h1 className='text-black font-semibold text-4xl mb-1'>
            {props.selectedDay}
        </h1>
        <h2 className='font-regular'>
          TODAY
        </h2>
      </div>
      
      <div className='flex flex-col justify-center items-center'>
        <button onClick={nextDay}
          className={buttonCSS}
        >
          Next
          </button>
        <h3 className={buttonDatesCSS}>
          {tomorrow}
        </h3>
      </div>
    </section>
  )
}
