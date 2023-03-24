import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Calendar from '@/components/calendar/calendar-card'
import GameCard from '@/components/game/game-card'
import Weekly from '@/components/calendar/weekly'
import React, {useState} from 'react'
import { format, startOfToday, startOfYesterday, add } from 'date-fns'
import Quill from '@/components/modules/text-editor'
import dynamic from 'next/dynamic'
import LearningObjectives from '@/components/modules/goals'
const TextEditor = dynamic(() => import("../components/modules/text-editor"), { ssr: false })

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
      <main className="bg-stone-200 relative min-h-screen w-screen">
        <Navbar />
          {/* <section className='mb-16'>
            <Weekly selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          </section> */}
          <div className='absolute left-8 top-60'>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={prevDay}
                className="mb-2 bg-sky-700/60 font-light text-white w-24 py-2 rounded-md text-lg"
              >
                Prev
                </button>
              <h3 className='text-slate-900/60 text-sm'>
                {format(yesterday, 'E, MMMM d')}
              </h3>
            </div>
          </div>
          <div className='absolute right-8 top-60'>
            <div className='flex flex-col justify-center items-center'>
              <button onClick={nextDay}
                className="mb-2 bg-sky-700/60 font-light text-white w-24 py-2 rounded-md text-lg"
              >
                Next
                </button>
              <h3 className='text-slate-900/60 text-sm'>
                {format(tomorrow, 'E, MMMM d')}
              </h3>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='min-h-[100vh] mt-12 mb-32 shadow-xl bg-white w-9/12 rounded-lg py-6'>
              <section className='mb-16 mt-8 pt-4 flex flex-col justify-center items-center'>
                <div className='w-10/12'>
                  <header className='pb-10'>
                    <h1 className='pb-2 text-slate-700 font-semibold text-4xl'>
                      {format(selectedDay, '	E, MMMM d')}
                    </h1>
                    <div className='flex items-center'>
                      <h2 className=' text-slate-800 font-base tracking-wide text-sm'>
                        Today
                      </h2>
                      <div className='w-1 h-1 bg-slate-800 rounded-full mx-2 mt-0.5'></div>
                      <p className='text-sm text-slate-600 font-base'>
                        4 games
                      </p>
                    </div>
                  </header>
                  <div className='mb-12'>
                    <LearningObjectives />
                  </div>
                  <header className='pl-6 mb-6'>
                    <h2 className='font-semibold text-sky-800 text-2xl'>
                      Notes
                    </h2>
                  </header>
                  {/* <div className='editorContainer'>
                    <TextEditor />
                  </div> */}
                  <div className='px-6 w-full'>
                    <TextEditor />
                  </div>
                </div>
              </section>
              <section className='pl-6 py-20 flex flex-col justify-center items-center'>
                <div className='mt-12 w-10/12'>
                  <h2 className='text-sky-800 font-semibold text-2xl pb-6'>Games</h2>
                      <div className='flex justify-left items-center'>
                        <div className='flex justify-center items-center mr-6 h-12 w-12 bg-sky-600 rounded-full'>
                          <h1 className='text-white text-2xl'>
                            1
                          </h1>
                        </div>
                        <GameCard />
                      </div>
                      <div className='flex justify-left items-center'>
                        <div className='flex justify-center items-center mr-6 h-12 w-12 bg-sky-600 rounded-full'>
                          <h1 className='text-white text-2xl'>
                            2
                          </h1>
                        </div>
                        <GameCard />
                      </div>
                      <div className='flex justify-left items-center'>
                        <div className='flex justify-center items-center mr-6 h-12 w-12 bg-sky-600 rounded-full'>
                          <h1 className='text-white text-2xl'>
                            3
                          </h1>
                        </div>
                        <GameCard />
                      </div>
                </div>
              </section>
            </div>
          </div>
        <Footer />
      </main>
    </>
  )
}

