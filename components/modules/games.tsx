import React from 'react'
import GameCard from '../game/game-card'

export default function Games() {
  return (
    <section className="shadow-lg mt-6 w-full min-h-32 bg-[#252146] pt-4 border border-[#383163] rounded-md">
        <header className="px-6 border-b border-[#2e2d4e]">
            <h2 className="text-white pb-4 font-semibold tracking-wider text-base uppercase">
                Games
            </h2>
        </header>
        <div className='bg-[#2c2650] pb-12 w-full flex flex-col justify-center pt-12'>
                <GameCard />
                <GameCard />
                <GameCard />
        </div>
    </section>
  )
}
