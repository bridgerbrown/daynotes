import React from 'react'
import { format } from 'date-fns'
import Image from 'next/image';

export default function DateHeader(props: any) {
  const { tomorrow, yesterday, monthView, setMonthView, prevDay, nextDay, selectedDay, dateDifference, noteActivated } = props;

  return (
    <section className='flex flex-col items-center w-[8.5in] pt-8 pb-3'>

      <div>
        <p className='text-gray-500 text-sm font-light pb-2'>
          {dateDifference}
        </p>
      </div>

      <div className='w-[8.5in] flex justify-between items-center'>
        <div className='mt-4 flex flex-col justify-center items-start'>
          <button onClick={prevDay}>
            <Image
              src={"/arrow.png"}
              width={124}
              height={224}
              alt="Arrow"
              className='scale-75 invert h-6 w-4 opacity-40 hover:opacity-70 transition-opacity rotate-180'
            />
          </button>
          <p className='w-max mt-2 text-gray-500 text-xs font-light'>
            {format(( new Date(yesterday)), 'LLLL dd')}
          </p>
        </div>

        <section className='flex justify-center items-center w-[8.5in] pb-8 '>
          <div className='flex-col flex justify-center items-center'>
            {
              noteActivated
              ?
              <h1 className='cursor-pointer text-black font-light text-3xl'
                onClick={() => setMonthView(!monthView)}
              >
                  {format((new Date(selectedDay)), 'LLLL d')}
              </h1>
              :
              <h1 className='cursor-pointer text-gray-400 font-light text-4xl'
                onClick={() => setMonthView(!monthView)}
              >
                  {format((new Date(selectedDay)), 'LLLL dd')}
              </h1>
            }
          </div>
        </section>
        
        <div className='mt-4 flex flex-col justify-center items-end'>
          <button onClick={nextDay}>
            <Image
              src={"/arrow.png"}
              width={124}
              height={224}
              alt="Arrow"
              className='scale-75 invert h-6 w-4 opacity-40 hover:opacity-70 transition-opacity'
            />
          </button>
          <p className='mt-2 w-max text-gray-500 text-xs font-light'>
            {format(( new Date(tomorrow)), 'LLLL dd')}
          </p>
        </div>
      </div>

    </section>
  )
}
