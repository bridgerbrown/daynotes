import React from 'react'
import format from 'date-fns/format'

export default function DayHeader(props: any) {
  return (
    <section className='w-full h-28 flex'>
        <div className='w-10/12 py-4'>
            <header className='pb-10'>
            <h1 className='pb-2 text-white font-semibold text-3xl'>
                {format(props.selectedDay, '	E, MMMM d')}
            </h1>
            <div className='flex items-center'>
                <h2 className='text-[#b3b4ce] font-base tracking-wide text-sm'>
                Today
                </h2>
                <div className='w-1 h-1 bg-[#b3b4ce] rounded-full mx-2 mt-0.5'></div>
                <p className='text-sm text-[#6b6888] font-base'>
                4 games
                </p>
            </div>
            </header>
        </div>
    </section>
  )
}
