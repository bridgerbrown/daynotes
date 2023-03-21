import React from 'react'
import format from 'date-fns/format'
import Image from 'next/image'

export default function DayHeader(props: any) {
  const champIcon: string = `w-10 rounded-full border border-[#2e2d4e]`

  return (
    <section className='w-full h-40 flex flex-col'>
        <div className='w-10/12 pt-4'>
            <header className='pb-4'>
            <h1 className='pb-2 text-moduleHeader/70 font-semibold text-3xl'>
                {format(props.selectedDay, '	E, MMMM d')}
            </h1>
            <div className='flex items-center'>
                <h2 className='text-moduleHeader/50 font-base tracking-wide text-sm'>
                Today
                </h2>
                <div className='w-1 h-1 bg-[#b3b4ce] rounded-full mx-2 mt-0.5'></div>
                <p className='text-sm text-moduleHeader/60 font-base'>
                4 games
                </p>
            </div>
            </header>
        </div>
        <div className='flex space-x-3'>
          <Image 
              src="/fizz-icon.webp"
              width={100}
              height={100}
              alt="champ icon"
              className={champIcon}
          />
          <Image 
              src="/anivia-icon.jpg"
              width={100}
              height={100}
              alt="champ icon"
              className={champIcon}
          />
          <Image 
              src="/anivia-icon.jpg"
              width={100}
              height={100}
              alt="champ icon"
              className={champIcon}
          />
          <Image 
              src="/fizz-icon.webp"
              width={100}
              height={100}
              alt="champ icon"
              className={champIcon}
          />
        </div>
    </section>
  )
}
