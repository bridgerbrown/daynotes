import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Calendar from '@/components/calendar/calendar'
import GameCard from '@/components/game/game-card'
import Weekly from '@/components/calendar/weekly'
import React, {useState} from 'react'
import { format, startOfToday } from 'date-fns'

export default function Home() {
  let today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)

  return (
    <>
      <Head>
        <title>gNotes</title>
        <meta name="description" content="gNotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-slate-900 relative min-h-screen w-screen">
        <Navbar />
          <section className=''>
            <Weekly selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          </section>
          <section className='pb-60 mt-6 pt-4 px-20 flex flex-col justify-center items-start'>
            <h1 className='pb-4 text-white font-semibold text-3xl'>
              {format(selectedDay, '	E, MMMM d')}
            </h1>
            <h2 className='text-white text-2xl mb-4 '>Games</h2>
            <div>
              <div className='flex justify-center items-center'>
                  <div className='flex justify-center items-center mx-6 h-12 w-12 bg-slate-800 rounded-full'>
                    <h1 className='text-white text-2xl'>
                      1
                    </h1>
                  </div>
                  <GameCard />
                </div>
                <div className='flex justify-center items-center'>
                  <div className='flex justify-center items-center mx-6 h-12 w-12 bg-slate-800 rounded-full'>
                    <h1 className='text-white text-2xl'>
                      2
                    </h1>
                  </div>
                  <GameCard />
                </div>
                <div className='flex justify-center items-center'>
                  <div className='flex justify-center items-center mx-6 h-12 w-12 bg-slate-800 rounded-full'>
                    <h1 className='text-white text-2xl'>
                      3
                    </h1>
                  </div>
                  <GameCard />
                </div>
            </div>
          </section>
          {/* <section className='flex flex-col justify-center items-center'>
            <GameCard />
          </section> */}
        <Footer />
      </main>
    </>
  )
}
