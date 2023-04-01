import React, { useEffect, useState, MouseEvent } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import DayHeader from '@/components/modules/day-header';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Goals from '@/components/modules/goals';
import { format, startOfToday, startOfYesterday, add } from 'date-fns'
const TextEditorNoSSR = dynamic(() => import('../../components/modules/text-editor'), { ssr: false })
import clientPromise from '@/lib/mongodb';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuth } from '@/components/context/AuthContext';

export default function Day({notes}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { user } = useUser()
  const { setUsersId, usersId } = useAuth()
  const router = useRouter()
  const { id: documentId } = router.query
  let today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const yesterday = add(selectedDay, { days: -1})
  const tomorrow = add(selectedDay, { days: 1})
  const [noteActivated, setNoteActivated] = useState<boolean>(false)

  useEffect(() => {
    notes.length ? setNoteActivated(true) : setNoteActivated(false)
    getUserDocument(user?.email)
  }, [selectedDay, router.query])

  const prevDay = () => {
    setSelectedDay(yesterday)
    {
      user !== undefined && (
        router.push(`/note/${usersId}_${format(yesterday, 'M-d-y')}`)
      )
    }
  }

  const nextDay = () => {
    setSelectedDay(tomorrow)
    {
      user !== undefined && (
        router.push(`/note/${usersId}_${format(tomorrow, 'M-d-y')}`)
      )
    }
  }

  const activateNote = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setNoteActivated(true)
}

async function getUserDocument(email: any){
  let res = await fetch("http://localhost:3000/api/users")
  const data = await res.json();
  const arr = []
  for(var i in data){
    arr.push(data[i]);
  }
  const users = arr[1].filter((item: any) => item.email == email)
  setUsersId(users[0]._id)
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
                {
                  noteActivated ?
                  <TextEditorNoSSR documentId={documentId} noteActivated={noteActivated} />
                  :
                  <div className='shadow-lg mt-6 w-full bg-moduleHeaderBg pt-4 pb-12 border border-moduleBorder/20 rounded-md'>
                  <header className="bg-moduleHeaderBg flex items-center pb-4 px-6 border-b border-moduleHeaderBorder/20">
                      <h2 className="text-moduleHeader/70 font-semibold tracking-wider text-xl uppercase">
                          Notes
                      </h2>
                      <div className='text-moduleHeader/50 flex items-center'>
                      </div>
                  </header>
                  <div className='h-[3in] flex justify-center items-center text-black font-light bg-moduleContentBg/60 w-full'>
                      <button className='ml-2 text-gray-400 text-sm flex items-center justify-center text-center w-12 h-12 pb-0.5 rounded-full border-2 font-bold border-gray-400'
                        onClick={activateNote}
                      >
                          +
                      </button>
                  </div>
              </div>
                }
              </div>
            </div>
          </div>
        <Footer />
      </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => { 
    try {
      const client = await clientPromise;
      const db = client.db("notes-db");

      const notes = await db
          .collection("notes")
          .find({})
          .toArray();

      const foundNote = notes.filter((item: any) => item.name === context.query.id ? item : null)
      return {
          props: { notes: JSON.parse(JSON.stringify(foundNote)) },
      };
    } catch (e) {
      console.error(e);
      return {
        props: { notes: [] }
      }
  } 
}

