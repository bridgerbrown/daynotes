import React from 'react'
import GameCard from '../game/game-card'
import GameCardSimple from '../game/game-card-simple'
import TextEditor from '../text-editor/text-editor'

export default function Notes() {
  return (
    <div className='shadow-lg mt-6 w-full bg-[#252146] pt-4 border border-[#383163] rounded-md'>
        <header className="flex items-center pb-4 px-6 border-b border-[#2e2d4e]">
            <h2 className="text-white font-semibold tracking-wider text-base uppercase">
                Notes
            </h2>
            <div className='text-[#b3b4ce]/70 flex items-center'>
              <button className='ml-6 text-sm flex items-center justify-center text-center w-6 h-6 pb-0.5 rounded-full border border-[#b3b4ce]/70 '>
                +
              </button>
              <p className=' text-xs pl-2'>
                Add game
              </p>
            </div>
        </header>
        <div className='h-[9in] bg-[#2c2650] pt-8 w-full'>
            <GameCard />
            <ul className='pb-12 pl-24 text-sm pt-2 list-disc text-white/90 space-y-1'>
              <li>Compensating death midgame</li>
              <li>Early CSing</li>
              <li>R usage</li>
            </ul>
            <GameCard />
            <ul className='pl-24 text-sm pt-2 list-disc text-white/90 space-y-1'>
              <li>Compensating death midgame</li>
              <li>Early CSing</li>
              <li>R usage</li>
            </ul>
        </div>
    </div>
  )
}
