import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Calendar from '@/components/calendar/calendar'
import GameCard from '@/components/game/game-card'
import Weekly from '@/components/calendar/weekly'
import React, {useState} from 'react'
import { format, startOfToday, startOfYesterday, add } from 'date-fns'
import Quill from '@/components/text-editor/text-editor'
import dynamic from 'next/dynamic'
import LearningObjectives from '@/components/modules/goals'
import DayHeader from '@/components/modules/day-header'
import Notes from '@/components/modules/notes'
import Games from '@/components/modules/games'
const TextEditor = dynamic(() => import("../components/text-editor/text-editor"), { ssr: false })

export default function Home() {
  let today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const yesterday = add(selectedDay, { days: -1})
  const tomorrow = add(selectedDay, { days: 1})

  const prevDay = () => {
    setSelectedDay(yesterday)
  }

  const nextDay = () => {
    setSelectedDay(tomorrow)
  }

  return (
    <>
      <Head>
        <title>gNotes</title>
        <meta name="description" content="gNotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[#141234] relative min-h-screen w-screen">
        <Navbar />

          <div className='absolute left-8 top-60'>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={prevDay}
                className="mb-2 bg-[#2c2650] font-light text-white w-24 py-2 rounded-md text-lg"
              >
                Prev
                </button>
              <h3 className='text-[#6b6888] text-sm'>
                {format(yesterday, 'E, MMMM d')}
              </h3>
            </div>
          </div>
          <div className='absolute right-8 top-60'>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={nextDay}
                className="mb-2 bg-[#2c2650] font-light text-white w-24 py-2 rounded-md text-lg"
              >
                Next
                </button>
              <h3 className='text-[#6b6888] text-sm'>
                {format(tomorrow, 'E, MMMM d')}
              </h3>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='min-h-[100vh] mt-12 mb-32 w-8/12 rounded-lg py-6'>
              <div className='mb-16 mt-8 pt-4 flex flex-col justify-center items-center'>
                <DayHeader selectedDay={selectedDay} />
                <LearningObjectives />
                <Notes />
                <Games />
              </div>
            </div>
          </div>
        <Footer />
      </main>
    </>
  )
}

