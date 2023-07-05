import React, { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { parse, isAfter, isBefore, parseISO, isSameDay, subDays, addDays, startOfToday, differenceInDays, differenceInWeeks, differenceInMonths, toDate } from 'date-fns'
import { ParsedUrl } from 'query-string';
import "quill/dist/quill.snow.css"
import { io } from 'socket.io-client'
import { useUser } from "@auth0/nextjs-auth0/client";
import CalendarModule from '@/components/modules/calendar/CalendarModule';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Image from 'next/image';

const TextEditorNoSSR = dynamic(() => import('../../components/modules/TextEditor'), { ssr: false })
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import DateHeader from '@/components/modules/DateHeader';

export default function DayNote({userCtxt}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()

  const [selectedDay, setSelectedDay] = useState<any>(startOfToday())
  const [userId, setUserId] = useState<string>("");
  const [socket, setSocket] = useState<any>();
  const [quill, setQuill] = useState<any>();
  const [monthView, setMonthView] = useState<boolean>(false);
  const [usersNotes, setUsersNotes] = useState<any[]>([]);
  const [noteActivated, setNoteActivated] = useState<boolean>(false);
  const [dateDifference, setDateDifference] = useState<string>("Today");
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState<boolean>(false);
  
  const yesterday = subDays(new Date(selectedDay), 1)
  const tomorrow = addDays(new Date(selectedDay), 1)
  const SAVE_INTERVAL_MS = 1000;
  const { user } = useUser();
  const usersEmail = userCtxt.email;

  const parseDateFromUrl = (url: string) => {
    const splitUrl = url.split('/');
    const date = splitUrl[2];
    const decodedDateString = new Date(decodeURIComponent(date));
    return decodedDateString
  }

  const activateNote = async () => {
    setDeleteConfirmed(false);
    setNoteActivated(true);
    await new Promise(resolve => setTimeout(resolve, 100));
    getUsersNotes(userId);
  };

  const deleteNote = async () => {
    await socket.emit("delete-note", userId, selectedDay);
    setNoteActivated(false);
    await new Promise(resolve => setTimeout(resolve, 500));
    getUsersNotes(userId);
  };

  const getDateDifference = useMemo(() => {
    const today = startOfToday();
    const diffInDays = Math.abs(differenceInDays(today, selectedDay));
    const diffInWeeks = Math.abs(differenceInWeeks(today, selectedDay));
    const diffInMonths = Math.abs(differenceInMonths(today, selectedDay));

    if(diffInDays == 0){
      setDateDifference("Today");
    } else if (diffInWeeks == 0) {
        if(isAfter(selectedDay, today)) { 
          diffInDays == 1 ? setDateDifference("1 day from now") : setDateDifference(`${diffInDays} days from now`);
        }
        else {
          diffInDays == 1 ? setDateDifference("1 day ago") : setDateDifference(`${diffInDays} days ago`);
        }
    } else if (diffInWeeks >= 1 && diffInMonths == 0){
        if(isAfter(selectedDay, today)) {
          diffInWeeks == 1 ? setDateDifference("1 week from now") : setDateDifference(`${diffInWeeks} weeks from now`);
        }
        else if(isBefore(selectedDay, today)) {
          diffInWeeks == 1 ? setDateDifference("1 week ago") : setDateDifference(`${diffInWeeks} weeks ago`);
        }
    } else if (diffInMonths >= 1) {
        if(isAfter(selectedDay, today)) {
          diffInMonths == 1 ? setDateDifference("1 month from now") : setDateDifference(`${diffInMonths} months from now`);
        }
        else if(isBefore(selectedDay, today)) {
          diffInMonths == 1 ? setDateDifference("1 month ago") : setDateDifference(`${diffInMonths} months ago`);
        }
    }
  }, [selectedDay]);

  const prevDay = () => {
    setSelectedDay(yesterday);
    {
      user !== undefined && (
        router.push(`/${usersEmail}/${yesterday}`)
      )
    }
  }

  const nextDay = () => {
    setSelectedDay(tomorrow);
    {
      user !== undefined && (
        router.push(`/${usersEmail}/${tomorrow}`)
      )
    }
  }


 const checkNoteExists = (data: any) => {
    const userNotesDates = data
      .map((note: any) => parseISO(note.date))
      .filter((date: any) => isSameDay(date, selectedDay));
    userNotesDates.length ? setNoteActivated(true) : setNoteActivated(false);
  };

  async function getUserIdAndNotes(email: any){
    await fetch(`http://localhost:3000/api/users?email=${email}`)
      .then(response => response.json())
      .then(data => { 
        setUserId(data.data) 
        getUsersNotes(data.data)
        console.log(data.data)
    })
  }

  async function getUsersNotes(userId: string){
    await fetch(`/api/notes?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setUsersNotes(data.data)
        checkNoteExists(data.data)
        })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getUserIdAndNotes(usersEmail);
  }, [])

  useEffect(() => {
    getUsersNotes(userId)
  }, [selectedDay])

  useEffect(() => {
    const urlDate = parseDateFromUrl(router.asPath);
    if(urlDate !== selectedDay){
      setSelectedDay(urlDate);
      console.log("Navigated successfully")
    }
  }, [])

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);
    checkNoteExists(usersNotes);

    return () => {
        s.disconnect()
    }
  }, [router.asPath, selectedDay])


  useEffect(() => {
    if (socket == null || quill == null || !noteActivated) return;

    socket.once("load-document", (document: any) => {
        quill.setContents(document)
        quill.enable()
    })

    socket.emit('get-document', userId, selectedDay)
  }, [socket, quill, router.asPath, selectedDay, prevDay, nextDay, noteActivated])


  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
        socket.emit('save-document', quill.getContents())
    }, SAVE_INTERVAL_MS)


    return () => {
        clearInterval(interval)
    }
  }, [socket, quill, router.asPath, selectedDay])


  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta: any) => {
        quill.updateContents(delta)
    }
    socket.on('receive-changes', handler)

    return () => {
        socket.off('receive-changes', handler)
    }
  }, [socket, quill, router.asPath, selectedDay])


  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta: any, oldDelta: any, source: any) => {
        if (source !== 'user') return
        socket.emit("send-changes", delta)
    }

    quill.on('text-change', handler)

    return () => {
        quill.off('text-change', handler)
    }
  }, [socket, quill, router.asPath, selectedDay])

  useEffect(() => {
    if(deleteConfirmed){
      deleteNote();
      setDeleteConfirmed(false);
    }
  }, [deleteConfirmed])

  useEffect(() => {
    if (socket == null || quill == null) return;

    const disconnectHandler = () => {
      socket.disconnect();
    };

    if (typeof window !== 'undefined'){
      window.addEventListener("beforeunload", disconnectHandler);
    }

    return () => {
      if (typeof window !== 'undefined'){
        window.removeEventListener("beforeunload", disconnectHandler);
      }
    }
  }, [socket, quill]);

  return (
    <main className="font-SansPro bg-pageBg min-h-screen w-screen relative">
        <Navbar />
        <div className='mx-8 mt-0 pt-0 flex flex-col justify-center items-center'>
          <div className='rounded-lg bg-boxBg border-boxBorder border drop-shadow-lg min-h-[100vh] mt-0 pb-12 mb-32 w-full'>
            <div className='px-4 pt-3 pb-2 flex justify-between'>
              <div className='flex'>
                <Image
                  src={'/calendar.png'}
                  width={448}
                  height={512}
                  alt="Calendar menu icon"
                  className='cursor-pointer w-5 mr-4 h-fit opacity-40 hover:opacity-70 transition-opacity'
                  onClick={() => setMonthView(!monthView)}
                />
                <p className='transition pt-0.5 text-sm font-light text-gray-500'>
                </p>
              </div>
              {
                noteActivated ?
                  deleteConfirmation ?
                  <div className='mr-1 flex justify-center items-center space-x-4'>
                    <p className='text-gray-500 font-thin text-sm'>
                      Delete note?
                    </p>
                    <Image
                      src={'/check.png'}
                      width={448}
                      height={304}
                      alt="Confirmation icon"
                      className='w-5 h-fit cursor-pointer opacity-40 hover:opacity-70 transition-opacity'
                      onClick={() => {
                        setDeleteConfirmation(false);
                        setDeleteConfirmed(true);
                      }}
                    />
                    <Image
                      src={'/x.png'}
                      width={448}
                      height={448}
                      alt="Cancellation icon"
                      className='w-4 h-fit cursor-pointer opacity-40 hover:opacity-70 transition-opacity'
                      onClick={() => setDeleteConfirmation(false)}
                    />
                  </div>
                  :
                  <div className='cursor-pointer opacity-40 hover:opacity-70 transition-opacity'>
                    <Image
                      src={'/trash-can.png'}
                      width={448}
                      height={512}
                      alt="Delete note icon, trashcan"
                      className='w-[1.1rem] h-fit'
                      onClick={() => setDeleteConfirmation(true)}
                    />
                  </div>
                :
                <div></div>
              }
            </div>
            {
              monthView ?
              <CalendarModule 
                usersEmail={usersEmail} 
                usersNotes={usersNotes} 
                selectedDay={selectedDay} 
                setSelectedDay={setSelectedDay} />
              :
              <div></div>
            }
            
            <div className='mb-32 flex flex-col justify-center items-center'>
              <DateHeader 
                monthView={monthView}
                setMonthView={setMonthView} 
                noteActivated={noteActivated} 
                dateDifference={dateDifference} 
                selectedDay={selectedDay} 
                prevDay={prevDay} 
                nextDay={nextDay} 
                yesterday={yesterday} 
                tomorrow={tomorrow} 
              />
              {
                noteActivated ?
                <TextEditorNoSSR setQuill={setQuill} />
                :
                <div className='h-[5in] flex justify-center items-center text-black font-light w-full'>
                  <button className='hover:text-gray-700 hover:border-gray-700 text-gray-400 text-sm flex items-center justify-center text-center w-16 h-16 pb-0.5 rounded-full border-2 font-bold border-gray-400'
                    onClick={() => activateNote()}
                  > + 
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      <Footer />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx){
    const session = await getSession(ctx.req, ctx.res);
    return {
      props: {
        userCtxt: JSON.parse(JSON.stringify(session)).user
      }
    }
  }
})
