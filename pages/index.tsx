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
import LearningObjectives from '@/components/learning-objectives'
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
          {/* <section className='mb-16'>
            <Weekly selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          </section> */}
          <div className='flex flex-col justify-center items-center'>
            <div className='w-11/12 rounded-lg py-6'>
              <section className='mb-16 mt-6 pt-4 flex flex-col justify-center items-center'>
                <div className='w-10/12'>
                  <h1 className='pb-1 text-blue-200 font-semibold text-4xl'>
                    {format(selectedDay, '	E, MMMM d')}
                  </h1>
                  <h2 className='pb-10 text-white/90 font-light tracking-wide text-lg'>Today</h2>
                  <div className='mb-12'>
                    <LearningObjectives />
                  </div>
                  <header className='pl-6 mb-6 text-white'>
                    <h2 className='font-semibold text-slate-200 text-2xl'>
                      Daily Notes
                    </h2>
                  </header>
                  {/* <div className='editorContainer'>
                    <TextEditor />
                  </div> */}
                  <div className='px-12 w-full'>
                    <TextEditor />
                  </div>
                </div>
              </section>
              {/* <section className='pl-6 pb-60 flex flex-col justify-center items-center'>
                <div className='w-10/12'>
                  <h2 className='text-slate-200 text-2xl pb-6'>Games</h2>
                      <div className='flex justify-left items-center'>
                        <div className='flex justify-center items-center mr-6 h-12 w-12 bg-slate-600 rounded-full'>
                          <h1 className='text-white text-2xl'>
                            1
                          </h1>
                        </div>
                        <GameCard />
                      </div>
                      <div className='flex justify-left items-center'>
                        <div className='flex justify-center items-center mr-6 h-12 w-12 bg-slate-600 rounded-full'>
                          <h1 className='text-white text-2xl'>
                            2
                          </h1>
                        </div>
                        <GameCard />
                      </div>
                      <div className='flex justify-left items-center'>
                        <div className='flex justify-center items-center mr-6 h-12 w-12 bg-slate-600 rounded-full'>
                          <h1 className='text-white text-2xl'>
                            3
                          </h1>
                        </div>
                        <GameCard />
                      </div>
                </div>
              </section> */}
            </div>
          </div>
        <Footer />
      </main>
    </>
  )
}

