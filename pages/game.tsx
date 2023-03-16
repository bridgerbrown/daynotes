import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Calendar from '@/components/calendar/calendar'
import GameCard from '@/components/game/game-card'
import Weekly from '@/components/calendar/weekly'
import React, {useState} from 'react'
import { format, startOfToday } from 'date-fns'
import Quill from '@/components/text-editor/text-editor'
import dynamic from 'next/dynamic'
const TextEditor = dynamic(() => import("../components/text-editor/text-editor"), { ssr: false })

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
          <section className='pb-60 mt-6 pt-4 px-20 flex flex-col justify-center items-start'>
            <h1 className='pb-4 text-white font-semibold text-3xl'>
              {format(selectedDay, '	E, MMMM d')}
            </h1>
            <h2 className='text-white text-2xl mb-8 '>Game #1</h2>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='mb-8 flex justify-center items-center'>
                  <GameCard />
                </div>
                <TextEditor />
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
