import React, { useEffect, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { isAfter, isBefore, parseISO, isSameDay, subDays, addDays, startOfToday, differenceInDays, differenceInWeeks, differenceInMonths, isValid } from 'date-fns'
import "quill/dist/quill.snow.css"
import { io } from 'socket.io-client'
import CalendarModule from '@/components/modules/calendar/CalendarModule';
import Image from 'next/image';
const TextEditorNoSSR = dynamic(() => import('../../components/modules/TextEditor'), { ssr: false })
import Navbar from '@/components/modules/Navbar';
import Footer from '@/components/modules/Footer';
import DateHeader from '@/components/modules/DateHeader';
import { useAuth } from '@/data/context/AuthContext';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import getJwt from '@/data/getJwt';
import getNotesData from '@/data/getUsersNotes';
import { useNotes } from '@/data/context/NotesContext';

export default function DayNote({ userResponse }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { userEmail, userId } = userResponse;
  const { usersNotes, setUsersNotes } = useNotes();
  const router = useRouter()
  const [selectedDay, setSelectedDay] = useState<any>(startOfToday())
  const [socket, setSocket] = useState<any>();
  const [quill, setQuill] = useState<any>();
  const [monthView, setMonthView] = useState<boolean>(false);
  const [noteActivated, setNoteActivated] = useState<boolean | undefined>(false);
  const [dateDifference, setDateDifference] = useState<string>("Today");
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState<boolean>(false);
  const [lastSocketId, setLastSocketId] = useState<string | null>(null);
  const [tutorial, setTutorial] = useState<boolean>(false);
  const { userData, setUserData } = useAuth();
  
  const yesterday = subDays(new Date(selectedDay), 1)
  const tomorrow = addDays(new Date(selectedDay), 1)
  const SAVE_INTERVAL_MS = 500;

  const parseDateFromUrl = (url: string) => {
    const splitUrl = url.split('/');
    const date = splitUrl[2];
    const decodedDateString = new Date(decodeURIComponent(date));
    return decodedDateString;
  };

  const isValidDate = () => {
    const urlDate = parseDateFromUrl(router.asPath);
    console.log(urlDate);
    return isValid(urlDate);
  };

  useEffect(() => {
    if (!isValidDate()) router.push('/404');
    console.log(isValidDate())
  }, [router, selectedDay])

  const fetchNotesData = async () => {
    try {
      const data = await getNotesData(userEmail, userId);
      setUsersNotes(data);
    } catch (err) {
      console.error("Error fetching notes data:", err);
    }
  };

  const activateNote = async () => {
    // const s = io("wss://daynotes-server.onrender.com:10000", {
    const s = io("wss://localhost:10000", {
      transports: ['websocket']
    });
    if (!socket) setSocket(s);
    setDeleteConfirmed(false);
    setNoteActivated(true);
    await new Promise(resolve => setTimeout(resolve, 900));
    fetchNotesData();
  };

  const deleteNote = async () => {
    await socket.emit("delete-note", userId, selectedDay);
    setNoteActivated(false);
    await new Promise(resolve => setTimeout(resolve, 500));
    fetchNotesData();
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
      userData !== undefined && (
        router.push(`/${userData.userEmail}/${yesterday}`)
      )
    }
  };

  const nextDay = () => {
    setSelectedDay(tomorrow);
    {
      userData !== undefined && (
        router.push(`/${userData.userEmail}/${tomorrow}`)
      )
    }
  };

 const checkNoteExists = (notes: any[], selectedDay: Date) => {
    if (notes) {
      const notesDate = notes
        .map((note: any) => parseISO(note.date))
        .filter((date: any) => isSameDay(date, selectedDay));

      const notesText = notes
        .filter((note: any) => {
          const date = parseISO(note.date)
          return isSameDay(date, selectedDay)
        })
        .map((note: any) => note.data.ops);

      const noteContainsText = notesText.length > 0;
      const noteCreated = notesDate.length > 0;
      const noteExists = noteCreated && noteContainsText;
      
      return noteExists;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetchNotesData();
    if (usersNotes && usersNotes.length === 0) {
      setTutorial(true)
      console.log("Starting tutorial")
    };
  }, [selectedDay])

  useEffect(() => {
    if (!usersNotes || !usersNotes.length) return;
    const noteExists = checkNoteExists(usersNotes, selectedDay);
    setNoteActivated(noteExists);
  }, [usersNotes, selectedDay])

  useEffect(() => {
    const urlDate = parseDateFromUrl(router.asPath);
    if(urlDate !== selectedDay){
      setSelectedDay(urlDate);
    }
  }, [])

  useEffect(() => {
    //const s = io("daynotes-server.onrender.com", {
    const s = io("wss://localhost:10000", {
      transports: ['websocket']
    });
    setSocket(s);

    return () => {
        s.disconnect()
    }
  }, [router.asPath])


  useEffect(() => {
    if (socket == null || quill == null || !noteActivated) return;

    socket.once("load-document", (document: any) => {
        quill.setContents(document)
        quill.enable()
    })

    socket.emit('get-document', userId, selectedDay)
  }, [socket, quill, noteActivated])


  useEffect(() => {
    if (socket == null || quill == null) return;

    const interval = setInterval(() => {
        socket.emit('save-document', quill.getContents())
    }, SAVE_INTERVAL_MS)


    return () => {
        clearInterval(interval)
    }
  }, [socket, quill])

  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta: any) => {
        quill.updateContents(delta);
    }
    socket.on('receive-changes', handler);

    return () => {
        socket.off('receive-changes', handler);
    }
  }, [socket, quill]);


  useEffect(() => {
    if (socket == null || quill == null) return;

    const handler = (delta: any, oldDelta: any, source: any) => {
        if (source === 'user' && socket.id !== lastSocketId) {
          socket.emit("send-changes", delta);
          setLastSocketId(socket.id);
      }
    }

    quill.on('text-change', handler);

    return () => {
        quill.off('text-change', handler);
    }
  }, [socket, quill]);

  useEffect(() => {
    if(deleteConfirmed){
      deleteNote();
      setDeleteConfirmed(false);
    }
  }, [deleteConfirmed]);

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
    <main className="font-sans bg-gray-50 min-h-screen w-screen relative">
        <Navbar userEmail={userEmail} userData={userData} />
        <div className='mx-2 sm:mx-8 mt-0 pt-0 flex flex-col justify-center items-center'>
          <div className='rounded-lg bg-slate-50 border-boxBorder border drop-shadow-lg min-h-[100vh] mt-0 mb-32 w-full'>
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
              monthView && usersNotes ?
              <CalendarModule 
                usersEmail={userData.Email} 
                usersNotes={usersNotes} 
                selectedDay={selectedDay} 
                setSelectedDay={setSelectedDay} 
                monthView={monthView}
              />
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
                <div className='h-[5in] flex justify-center items-center font-light w-full'>
                  <button className='hover:text-gray-600 hover:border-gray-600 text-gray-400 text-lg flex items-center justify-center text-center w-16 h-16 pb-0.5 rounded-full border-[2.75px] font-bold border-gray-400'
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
};


export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  try {
    const userResponse = getJwt(ctx);

    return {
      props: {
        userResponse,
      },
    };
  } catch (err) {
    console.error("Error in JWT verification:", err);
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      }
    }
  }
});
