import React from 'react'
import { format } from 'date-fns'
import Image from 'next/image';

export default function DateHeader(props: any) {
  const { prevDay, nextDay, selectedDay } = props;
  const buttonDatesCSS: string = `text-black/60 text-sm font-thin`;
  const buttonCSS: string = `mb-2 bg-gray-400 font-thin text-white w-24 py-2.5 opacity-60 hover:opacity-100 transition-opacity rounded-md text-base`;

  return (
    <section className='flex justify-between items-center w-[8.5in] pt-4 pb-2 '>

      <div className='flex flex-col justify-center items-center'>
        <button onClick={prevDay}>
          <Image
            src={"/arrow.png"}
            width={124}
            height={224}
            alt="Arrow"
            className='invert h-7 w-4 opacity-40 rotate-180'
          />
        </button>
      </div>

      

      <section className='mb-4 flex justify-center items-center w-[8.5in] pb-0 '>
        <div className='flex-col flex justify-center items-center'>
          <h2 className='opacity-60 font-thin text-sm'>
            TODAY
          </h2>
          <h1 className='text-black font-light text-3xl'>
              {format((new Date(selectedDay)), 'EEE, LLLL dd')}
          </h1>
        </div>
      </section>
      
      <div className='flex flex-col justify-center items-center'>
        <button onClick={nextDay}>
          <Image
            src={"/arrow.png"}
            width={124}
            height={224}
            alt="Arrow"
            className='invert h-7 w-4 opacity-40'
          />
        </button>
      </div>
    </section>
  )
}
