import React from 'react'
import GameCard from '../game/game-card'
import GameCardSimple from '../game/game-card-simple'
import TextEditor from '../text-editor/text-editor'

export default function Notes() {
  return (
    <div className='shadow-lg mt-6 w-full bg-moduleHeaderBg pt-4 pb-12 border border-moduleBorder/20 rounded-md'>
        <header className="bg-moduleHeaderBg flex items-center pb-4 px-6 border-b border-moduleHeaderBorder/20">
            <h2 className="text-moduleHeader/70 font-semibold tracking-wider text-xl uppercase">
                Notes
            </h2>
            <div className='text-moduleHeader/50 flex items-center'>
              <button className='ml-6 text-sm flex items-center justify-center text-center w-6 h-6 pb-0.5 rounded-full border border-moduleHeader/50'>
                +
              </button>
              <p className=' text-xs pl-2'>
                Add game
              </p>
            </div>
        </header>
        <div className='h-[9in] text-black font-light bg-moduleContentBg pt-8 w-full'>
            <h2 className='pl-8 font-semibold text-lg'>
              GAME 1: [ FIZZ vs TALIYAH, 4/2/7 WIN ]
            </h2>
            <ul className='pb-12 pl-16 text-base pt-2 list-disc space-y-1'>
              <li>Compensating death midgame</li>
              <li>Early CSing</li>
              <li>R usage</li>
            </ul>
            <h2 className='pl-8 font-semibold text-lg'>
              GAME 2: [ FIZZ vs TALIYAH, 4/2/7 WIN ]
            </h2>
            <ul className='pl-16 text-base pt-2 list-disc space-y-1'>
              <li>Compensating death midgame</li>
              <li>Early CSing</li>
              <li>R usage</li>
            </ul>
        </div>
    </div>
  )
}
