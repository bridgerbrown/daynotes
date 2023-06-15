import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import DayHeader from '@/components/modules/day-header';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Goals from '@/components/modules/goals';
import { format, subDays, addDays, startOfDay } from 'date-fns'
const TextEditorNoSSR = dynamic(() => import('../../components/modules/text-editor'), { ssr: false })
import clientPromise from '@/lib/mongodb';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuth } from '@/components/context/AuthContext';

export default function DayNote({note}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const { id: documentId } = router.query
  let today = format(startOfDay(new Date()), 'MM-dd-yyyy')
  const [selectedDay, setSelectedDay] = useState(format(startOfDay(new Date()), 'MM-dd-yyyy'))
  const yesterday = format(subDays(new Date(selectedDay), 1), 'MM-dd-yyyy')
  const tomorrow = format(addDays(new Date(selectedDay), 1), 'MM-dd-yyyy')
  const [noteLoaded, setNoteLoaded] = useState<boolean>(true)

  const { user } = useUser();
  let usersEmail = user?.email;

  const prevDay = () => {
    setSelectedDay(yesterday)
    {
      user !== undefined && (
        router.push(`/${usersEmail}/${yesterday}`)
      )
    }
  }

  const nextDay = () => {
    setSelectedDay(tomorrow)
    {
      user !== undefined && (
        router.push(`/${usersEmail}/${tomorrow}`)
      )
    }
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
                {yesterday}
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
                {tomorrow}
              </h3>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='min-h-[100vh] mt-0 mb-32 w-8/12 rounded-lg py-6'>
              <div className='mb-16 pt-4 flex flex-col justify-center items-center'>
                <DayHeader selectedDay={selectedDay} />
                <Goals />
                {
                  noteLoaded ?
                  <TextEditorNoSSR documentId={documentId} selectedDay={selectedDay} />
                  :
                  <div></div>
                }
              </div>
            </div>
          </div>
        <Footer />
      </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => { 
  const { user, date } = context.params;

  try {
    const client = await clientPromise;
    const db = client.db("notes-db");
    const documentData = await db.collection('notes').findOne({ user, date });

    return {
        props: { 
          documentData: JSON.parse(JSON.stringify(documentData)),
      },
    };
  } catch (e) {
    console.error("Error fetching MongoDB doc", e);
    return {
      props: {
        documentData: null,
      }
    }
  } 
}


// {
//   noteActivated ?
//   <TextEditorNoSSR documentId={documentId} noteActivated={noteActivated} selectedDay={selectedDay} />
//   :
//   <div className='shadow-lg mt-6 w-full bg-moduleHeaderBg pt-4 pb-12 border border-moduleBorder/20 rounded-md'>
//   <header className="bg-moduleHeaderBg flex items-center pb-4 px-6 border-b border-moduleHeaderBorder/20">
//       <h2 className="text-moduleHeader/70 font-semibold tracking-wider text-xl uppercase">
//           Notes
//       </h2>
//       <div className='text-moduleHeader/50 flex items-center'>
//       </div>
//   </header>
//   <div className='h-[3in] flex justify-center items-center text-black font-light bg-moduleContentBg/60 w-full'>
//       <button className='ml-2 text-gray-400 text-sm flex items-center justify-center text-center w-12 h-12 pb-0.5 rounded-full border-2 font-bold border-gray-400'
//         onClick={activateNote}
//       >
//           +
//       </button>
//   </div>
// </div>
// }
