import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import DateHeader from '@/components/modules/DateHeader';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { isAfter, isBefore, parseISO, isSameDay, format, subDays, addDays, startOfDay, startOfToday, differenceInDays, differenceInWeeks, differenceInMonths } from 'date-fns'
const TextEditorNoSSR = dynamic(() => import('../../components/modules/TextEditor'), { ssr: false })
import { ParsedUrl } from 'query-string';
import "quill/dist/quill.snow.css"
import { io } from 'socket.io-client'
import { useUser } from "@auth0/nextjs-auth0/client";
import CalendarModule from '@/components/modules/calendar/CalendarModule';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

interface Params extends ParsedUrl {
  slug: string;
}

const SAVE_INTERVAL_MS = 1000
const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
]

export default function DayNote({userCtxt}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const toggleButtonCSS: string = `bg-transparent border border-gray-400 hover:bg-gray-400 hover:text-white ml-2 mt-2 w-14 h-7 rounded-md font-thin text-gray-400 text-sm`;
  const activeToggleButtonCSS: string = `text-white bg-gray-400 hover:bg-gray-500 hover:text-white ml-2 mt-2 w-14 h-7 rounded-md font-thin text-sm`;
  const router = useRouter()
  const [selectedDay, setSelectedDay] = useState<any>(startOfToday())
  const yesterday = subDays(new Date(selectedDay), 1)
  const tomorrow = addDays(new Date(selectedDay), 1)
  const [userId, setUserId] = useState<string>("");
  const [socket, setSocket] = useState<any>();
  const [quill, setQuill] = useState<any>();
  const [monthView, setMonthView] = useState<boolean>(false);
  const [usersNotes, setUsersNotes] = useState<any>([])
  const [noteActivated, setNoteActivated] = useState<boolean>(false);
  const [dateDifference, setDateDifference] = useState<string>("Today");

  const { user } = useUser();
  const usersEmail = userCtxt.email;

  const getDateDifference = () => {
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
  };

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

  const toggleDateView = (type: string) => {
    setMonthView(!monthView)
  };

  const checkNoteExists = (data: any) => {
    const userNotesDates = data
      .map((note: any) => parseISO(note.date))
      .filter((date: any) => isSameDay(date, selectedDay));
    userNotesDates.length ? setNoteActivated(true) : setNoteActivated(false);
  }

  async function getUserDocument(email: any){
    await fetch("http://localhost:3000/api/users")
      .then(response => response.json())
      .then(data => {
        const arr = []
        for(var i in data){
          arr.push(data[i]);
        }
        const user = arr[1].filter((item: any) => item.email === email)
        setUserId(user[0].userId)
        getUserNotes(user[0].userId)
    })
  }

  async function getUserNotes(userId: string){
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
    getUserDocument(usersEmail)
  }, [])

  useEffect(() => {
    getDateDifference();
  }, [selectedDay])


  useEffect(() => {
    const s = io("http://localhost:3001")
    setSocket(s)
    checkNoteExists(usersNotes)

    return () => {
        s.disconnect()
    }
  }, [router.asPath, selectedDay ])


  useEffect(() => {
    if (socket == null || quill == null) return;
    if (!noteActivated) return;

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
    <main className="font-SansPro bg-gray-200 min-h-screen w-screen relative">
        <Navbar />
        <div className='mt-0 pt-0 flex flex-col justify-center items-center'>
          <div className='rounded-lg bg-white/80 border-gray-800 min-h-[100vh] mt-0 pb-12 mb-32 w-[98%]'>
            <div className='absolute pb-2 flex'>
                <button onClick={() => toggleDateView('month')}
                  className={monthView ? activeToggleButtonCSS : toggleButtonCSS}  
                >
                  Month
                </button>
            </div>
            {
              monthView ?
              <CalendarModule usersEmail={usersEmail} getDateDifference={getDateDifference} getUsersNotes={getUserNotes} usersNotes={usersNotes} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
              :
              <div></div>
            }
            
            <div className='mb-32 flex flex-col justify-center items-center'>
              <DateHeader noteActivated={noteActivated} dateDifference={dateDifference} selectedDay={selectedDay} prevDay={prevDay} nextDay={nextDay} yesterday={yesterday} tomorrow={tomorrow} />
              {
                noteActivated ?
                <TextEditorNoSSR setQuill={setQuill} />
                :
                <div className='h-[3in] flex justify-center items-center text-black font-light w-full'>
                  <button className='hover:text-blue-300 hover:border-blue-300 text-gray-400 text-sm flex items-center justify-center text-center w-12 h-12 pb-0.5 rounded-full border-2 font-bold border-gray-400'
                    onClick={() => setNoteActivated(true)}
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
