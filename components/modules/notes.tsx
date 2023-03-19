import React from 'react'
import TextEditor from '../text-editor/text-editor'

export default function Notes() {
  return (
    <div className='mt-6 w-full bg-[#252146] pt-4 border border-[#383163] rounded-md'>
        <header className="px-6 border-b border-[#2e2d4e]">
            <h2 className="text-white pb-4 font-semibold tracking-wider text-sm uppercase">
                Notes
            </h2>
        </header>
        <div className='pb-48 bg-[#2c2650] pt-8 px-6 w-full'>
            <TextEditor />
        </div>
    </div>
  )
}
