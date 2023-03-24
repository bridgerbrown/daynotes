import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { v4 as uuidV4 } from 'uuid'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import DayHeader from '@/components/modules/day-header';
import Notes from '@/components/modules/notes';
import Goals from '@/components/modules/goals';
import { format, startOfToday, startOfYesterday, add } from 'date-fns'

const EditorNoSSR = dynamic(() => import('../../components/text-editor/text-editor'), { ssr: false })

export default function Test() {
  const router = useRouter()
  let today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const yesterday = add(selectedDay, { days: -1})
  const tomorrow = add(selectedDay, { days: 1})
  const { id: documentId } = "user-" + format(selectedDay, 'M-d-y')

  const prevDay = () => {
    setSelectedDay(yesterday)
    router.push(`/note/${format(yesterday, 'M-d-y')}`)
  }

  const nextDay = () => {
    setSelectedDay(tomorrow)
    router.push(`/note/${format(tomorrow, 'M-d-y')}`)
  }


  return (
    <main className="font-SansPro bg-gray-200 relative min-h-screen w-screen">
        <Navbar />
          <div className='absolute left-8 top-60'>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={prevDay}
                className="mb-2 bg-button/30 font-light text-white w-24 py-3 rounded-md text-base"
              >
                Prev
                </button>
              <h3 className='text-black/40 text-sm'>
                {format(yesterday, 'E, MMMM d')}
              </h3>
            </div>
          </div>
          <div className='absolute right-8 top-60'>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={nextDay}
                className="mb-2 bg-button/30 font-light text-white w-24 py-3 rounded-md text-base"
              >
                Next
                </button>
              <h3 className='text-black/40 text-sm'>
                {format(tomorrow, 'E, MMMM d')}
              </h3>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='min-h-[100vh] mt-0 mb-32 w-8/12 rounded-lg py-6'>
              <div className='mb-16 pt-4 flex flex-col justify-center items-center'>
                <DayHeader selectedDay={selectedDay} />
                <Goals />
                <Notes documentId={documentId} />
              </div>
            </div>
          </div>
        <Footer />
      </main>
  )
}
