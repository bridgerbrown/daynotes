import React from 'react'

export default function Today(props: any) {
  const { prevDay, nextDay, tomorrow, yesterday, selectedDay } = props;
  const buttonDatesCSS: string = `text-black/60 text-md`;
  const buttonCSS: string = `mb-2 bg-button/60 font-light text-white w-24 py-3 rounded-md text-base`;

  return (
    <section className='bg-gray-100 flex justify-center items-center w-[8.5in] pt-12 pb-0 '>
      <div className='flex-col flex justify-center items-center'>
        <h1 className='text-black font-light text-5xl mb-1'>
            {selectedDay}
        </h1>
        <h2 className='font-regular text-sm'>
          TODAY
        </h2>
      </div>
    </section>
  )
}
