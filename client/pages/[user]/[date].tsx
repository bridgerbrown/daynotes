import React, { useEffect, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import DayHeader from '@/components/modules/day-header';
import Goals from '@/components/modules/goals';
import { format, subDays, addDays, startOfDay } from 'date-fns'
const TextEditorNoSSR = dynamic(() => import('../../components/modules/text-editor'), { ssr: false })
import { ParsedUrl } from 'query-string';
import Quill from "quill"
import "quill/dist/quill.snow.css"
import { io } from 'socket.io-client'
import { useUser } from "@auth0/nextjs-auth0/client";

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

export default function DayNote() {
  const router = useRouter()
  let today = format(startOfDay(new Date()), 'MM-dd-yyyy')
  const [selectedDay, setSelectedDay] = useState(format(startOfDay(new Date()), 'MM-dd-yyyy'))
  const yesterday = format(subDays(new Date(selectedDay), 1), 'MM-dd-yyyy')
  const tomorrow = format(addDays(new Date(selectedDay), 1), 'MM-dd-yyyy')
  const [noteLoaded, setNoteLoaded] = useState<boolean>(false)
  const [userId, setUserId] = useState<string>("");
  const [socket, setSocket] = useState<any>();
  const [quill, setQuill] = useState<any>();

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

  async function getUserDocument(email: any){
      let res = await fetch("http://localhost:3000/api/users")
      const data = await res.json();
      const arr = []
      for(var i in data){
        arr.push(data[i]);
      }
      const user = arr[1].filter((item: any) => item.email === email)
      setUserId(user[0].userId)
    }

  useEffect(() => {
    const s = io("http://localhost:3001")
    setSocket(s)
    
    return () => {
        s.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socket == null || quill == null) return

    socket.once("load-document", (document: any) => {
        quill.setContents(document)
        quill.enable()
    })

    socket.emit('get-document', userId, user?.email, selectedDay)
  }, [socket, quill ])

  useEffect(() => {
    if (socket == null || quill == null) return

    const interval = setInterval(() => {
        socket.emit('save-document', quill.getContents())
    }, SAVE_INTERVAL_MS)

    return () => {
        clearInterval(interval)
    }
  }, [socket, quill ])

  useEffect(() => {
    if (socket == null || quill == null) return

    const handler = (delta: any) => {
        quill.updateContents(delta)
    }
    socket.on('receive-changes', handler)

    return () => {
        socket.off('receive-changes', handler)
    }
  }, [socket, quill ])


  useEffect(() => {
    if (socket == null || quill == null) return

    const handler = (delta: any, oldDelta: any, source: any) => {
        if (source !== 'user') return
        socket.emit("send-changes", delta)
    }
    quill.on('text-change', handler)

    return () => {
        quill.off('text-change', handler)
    }
  }, [socket, quill ])

  // const showToolbar = () => {
  //     document.querySelector<HTMLElement>(".ql-toolbar")!.style.display = "flex"
  //     document.querySelector<HTMLElement>(".ql-editor")!.style.marginTop = "0px"
  // }

  // const hideToolbar = () => {
  //     document.querySelector<HTMLElement>(".ql-toolbar")!.style.display = "none"
  //     document.querySelector<HTMLElement>(".ql-editor")!.style.paddingTop = "40px"
  // }

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
                <TextEditorNoSSR setQuill={setQuill} />
              </div>
            </div>
          </div>
        <Footer />
      </main>
  )
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
