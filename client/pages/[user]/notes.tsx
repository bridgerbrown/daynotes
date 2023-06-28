import React, { useEffect, useState } from 'react'
import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'
import NotePreview from '@/components/modules/notes/NotePreview'
import Image from 'next/image';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { compareAsc, compareDesc, parseISO } from 'date-fns';

export default function Notes({userCtxt}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const sortItemsCSS: string = `cursor-pointer text-sm text-blackHeading font-light`;
  const [userId, setUserId] = useState<string>("");
  const [usersNotes, setUsersNotes] = useState<any>([]);
  const usersEmail = userCtxt.email;

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
        })
      .catch(error => {
        console.log(error)
      })
  }

  const sortedNotesAscDates = usersNotes.sort((a, b) => compareAsc(parseISO(a.date), parseISO(b.date)));
  const sortedNotesDescDates = usersNotes.sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)));

  useEffect(() => {
    getUserDocument(usersEmail)
  }, [])

  return (
    <main className="font-SansPro bg-pageBg min-h-screen w-screen relative">
      <Navbar />
      <div className='mx-8 mt-0 pt-0 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-boxBg height-min mt-0 pb-20 mb-32 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              Notes
            </h2>
          </header>
          <div className='flex justify-between items-center mx-8 mt-4 mb-4'>
            <div className='flex'>
              <h3 className='mr-4 text-sm text-blackHeading font-light'>
                Sort by:
              </h3>
              <div className='hover:opacity-100 opacity-60 flex cursor-pointer'>
                <h3 className={sortItemsCSS}>
                  Date
                </h3>
                <Image
                  src={"/arrow-down.png"}
                  alt="Date sorting ascending or descending arrow"
                  width={384}
                  height={448}
                  className='cursor-pointer ml-2 mr-4 mt-0.5 w-3 opacity-70 h-fit'
                />
              </div>
              <div className='hover:opacity-100 opacity-60 flex cursor-pointer'>
                <h3 className={sortItemsCSS}>
                  Last Updated 
                </h3>
              </div>
            </div>
            <input 
              type='search'
              className='pl-10 pr-4 font-light border-grayHeading border rounded-full h-10 w-72'
            />
            <Image
              src={"/search.png"}
              alt="search icon, magnifying glass"
              width={512}
              height={512}
              className='w-4 fixed right-72 opacity-60'
            />
          </div>
          <div className='mx-8 my-10 flex flex-wrap'>
           {
            usersNotes ?
            sortedNotesDescDates.map((note: any) => <NotePreview note={note} />)
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
