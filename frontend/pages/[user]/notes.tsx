import React, { useEffect, useState } from 'react'
import Navbar from '@/components/modules/Navbar'
import Footer from '@/components/modules/Footer'
import NotePreview from '@/components/modules/notes/NotePreview'
import Image from 'next/image';
import { compareAsc, compareDesc, parseISO, format } from 'date-fns';
import { useAuth } from '@/data/context/AuthContext';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import getJwt from '@/data/getJwt';
import getNotesData from '@/data/getUsersNotes';
import { useNotes } from '@/data/context/NotesContext';
import { useRouter } from 'next/router';

export default function Notes({ userResponse }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { userEmail, userId } = userResponse;
  const { userData, setUserData, login } = useAuth();
  const { usersNotes, setUsersNotes } = useNotes();
  const inactiveSortItemCSS: string = `opacity-50 hover:opacity-100 flex cursor-pointer`;
  const activeSortItemCSS: string = `opacity-100 flex cursor-pointer`;
  const arrowDescendingCss: string = `cursor-pointer ml-1.5 mr-4 mt-0.5 w-3 opacity-70 h-fit`;
  const arrowAscendingCss: string = `rotate-180 cursor-pointer ml-1.5 mr-4 mt-0.5 w-3 opacity-70 h-fit`;
  const [filteredNotes, setFilteredNotes] = useState<any[]>([]);
  const [sortedType, setSortedType] = useState<string>("date");
  const [dateAscending, setDateAscending] = useState<boolean>(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  }

  useEffect(() => {
    const filteredNotes = usersNotes.filter((note: any) => {
      const { data, date } = note;
      const formattedData = JSON.stringify(data);
      const formattedDate = JSON.stringify(format(( new Date(date)), 'LLLL d, yyyy'));
      return (
        formattedData.toLowerCase().includes(searchQuery) ||
        formattedDate.toLowerCase().includes(searchQuery)
      );
    })
    setFilteredNotes(filteredNotes);
  }, [usersNotes, searchQuery])

  const sortedNotesAscDates = [...usersNotes].sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
  const sortedNotesDescDates = [...usersNotes].sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));
  const sortedNotesLastUpdated = [...usersNotes].sort((a, b) => compareDesc(parseISO(a.lastUpdated), parseISO(b.lastUpdated)));
  const sortedFilteredNotesAscDates = [...filteredNotes].sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
  const sortedFilteredNotesDescDates = [...filteredNotes].sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));
  const sortedFilteredNotesLastUpdated = [...filteredNotes].sort((a, b) => compareDesc(parseISO(a.lastUpdated), parseISO(b.lastUpdated)));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotesData(userEmail, userId);
        setUsersNotes(data);
        login();
      } catch (err) {
        console.error("Error fetching notes data:", err);
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    if(deleteConfirmed){
      getNotesData(userEmail, userId);
      setDeleteConfirmed(false);
    }
  }, [deleteConfirmed])

  return (
    <main className="font-sans bg-gray-50 min-h-screen w-screen relative">
      <Navbar userEmail={userEmail} userData={userData} />
      <div className='pb-36 mx-2 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='min-h-[85vh] border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              Notes
            </h2>
          </header>
          <section className='flex justify-between items-start sm:items-center mx-4 sm:mx-8 mt-4 mb-4'>
            <div className='text-sm mt-2 sm:mt-0 flex'>
              <h3 className=' mr-4 text-blackHeading font-light'>
                Sort by:
              </h3>
              <div className={sortedType == "date" ? activeSortItemCSS : inactiveSortItemCSS}
                onClick={() => {
                  sortedType == "date" ?
                    setDateAscending(!dateAscending)
                    :
                    setSortedType("date");
                }}
              >
                <h3 className=":text-sm cursor-pointer text-blackHeading font-light">
                  Date
                </h3>
                <Image
                  src={"/arrow-down.png"}
                  alt="Date sorting ascending or descending arrow"
                  width={384}
                  height={448}
                  className={dateAscending ? arrowAscendingCss : arrowDescendingCss}
                />
              </div>
              <div 
                className={sortedType == "last-updated" ? activeSortItemCSS : inactiveSortItemCSS}
                onClick={() => setSortedType("last-updated")}
              >
                <h3 className="cursor-pointer text-blackHeading font-light">
                  Last Updated 
                </h3>
              </div>
            </div>
            <div className='flex sm:flex-row flex-col-reverse justify-center items-end sm:items-center'>
              <p className='mt-2 sm:mt-0 mr-2 sm:mr-4 text-xs sm:text-sm font-light text-grayHeading'>
                {
                  usersNotes ?
                   usersNotes.length == 1 ?
                    "1 note made"
                    :
                    usersNotes.length + " notes made"
                  :
                  "0 notes made"
                }
              </p>
              <div className='w-min h-10'>
                <input 
                  type='search'
                  placeholder='Search notes...'
                  id='searchInput'
                  onChange={handleSearch}
                  className='text-sm pl-10 pr-4 font-light border-grayHeading border rounded-full h-10 w-48 md:w-72'
                />
                <Image
                  src={"/search.png"}
                  alt="search icon, magnifying glass"
                  width={512}
                  height={512}
                  className='w-4 relative left-[13px] md:left-[14px] bottom-[27px] opacity-60'
                />
              </div>
            </div>
          </section>
          <div className='mx-4 sm:mx-8 my-10 flex flex-wrap'>
           {
            usersNotes.length ?
              filteredNotes ?
                sortedType == "date" ?
                    dateAscending ?
                      sortedFilteredNotesAscDates.length ?
                        sortedFilteredNotesAscDates.map((note: any) => <NotePreview key={note._id} note={note} setDeleteConfirmed={setDeleteConfirmed} userEmail={userEmail} />)
                        :
                        <div className='w-full flex justify-center items-center mt-48'>
                          <h2 className='text-lg md:text-xl font-thin text-grayHeading'>
                              No search results...
                          </h2>
                        </div>
                      :
                      sortedFilteredNotesDescDates.length ?
                        sortedFilteredNotesDescDates.map((note: any) => <NotePreview key={note._id} note={note} setDeleteConfirmed={setDeleteConfirmed} userEmail={userEmail} />)
                        :
                        <div className='w-full flex justify-center items-center mt-48'>
                          <h2 className='text-lg md:text-xl font-thin text-grayHeading'>
                              No search results...
                          </h2>
                        </div>
                    :
                    sortedFilteredNotesLastUpdated.length ?
                      sortedFilteredNotesLastUpdated.map((note: any) => <NotePreview key={note._id} note={note} setDeleteConfirmed={setDeleteConfirmed} userEmail={userEmail} />)
                      :
                      <div className='w-full flex justify-center items-center mt-48'>
                        <h2 className='text-lg md:text-xl font-thin text-grayHeading'>
                            No search results...
                        </h2>
                      </div>
                :
                sortedType == "date" ?
                    dateAscending ?
                      sortedNotesAscDates.map((note: any) => <NotePreview key={note._id} note={note} setDeleteConfirmed={setDeleteConfirmed} userEmail={userEmail} />)
                      :
                      sortedNotesDescDates.map((note: any) => <NotePreview key={note._id} note={note} setDeleteConfirmed={setDeleteConfirmed} userEmail={userEmail} />)
                    :
                    sortedNotesLastUpdated.map((note: any) => <NotePreview key={note._id} note={note} setDeleteConfirmed={setDeleteConfirmed} userEmail={userEmail} />)
            :
            <div className='w-full flex justify-center items-center mt-48'>
              <h2 className='text-lg md:text-xl font-thin text-grayHeading'>
                  No notes made yet!
              </h2>
            </div>
            } 
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

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
      props: {
        userResponse: [],
      },
    }
  }
});
