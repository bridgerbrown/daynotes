import React, { useEffect } from 'react'
import { format } from 'date-fns'
import Image from 'next/image';

export default function DateHeader(props: any) {
  const { prevDay, nextDay, selectedDay, dateDifference, noteActivated } = props;
  const buttonDatesCSS: string = `text-black/60 text-sm font-thin`;
  const buttonCSS: string = `mb-2 bg-gray-400 font-thin text-white w-24 py-2.5 opacity-60 hover:opacity-100 transition-opacity rounded-md text-base`;

  return (
    <section className='flex flex-col items-center w-[8.5in] pt-8 pb-6'>

      <div>
        <p className='text-gray-500 text-sm font-light'>
          {dateDifference}
        </p>
      </div>

      <div className='flex justify-between items-center'>
        <div className='mt-8 flex flex-col justify-center items-center'>
          <button onClick={prevDay}>
            <Image
              src={"/arrow.png"}
              width={124}
              height={224}
              alt="Arrow"
              className='scale-75 invert h-6 w-4 opacity-60 rotate-180'
            />
          </button>
        </div>

        <section className='flex justify-center items-center w-[8.5in] pb-0 '>
          <div className='flex-col flex justify-center items-center'>
            <h2 className='opacity-60 font-thin text-sm'>
            </h2>
            {
              noteActivated
              ?
              <h1 className='text-black font-light text-4xl'>
                  {format((new Date(selectedDay)), 'LLLL dd')}
              </h1>
              :
              <h1 className='text-gray-400 font-light text-4xl'>
                  {format((new Date(selectedDay)), 'LLLL dd')}
              </h1>
            }
          </div>
        </section>
        
        <div className='mt-8 flex flex-col justify-center items-center'>
          <button onClick={nextDay}>
            <Image
              src={"/arrow.png"}
              width={124}
              height={224}
              alt="Arrow"
              className='scale-75 invert h-6 w-4 opacity-60'
            />
          </button>
        </div>
      </div>

    </section>
  )
}
