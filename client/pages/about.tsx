import React, { useEffect, useState } from 'react';
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useAuth } from '@/components/context/AuthContext';
import Image from 'next/image';

export default function User({userCtxt}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { user } = useUser();
  const { userData, setUserData } = useAuth();
  const usersEmail = userCtxt.email;
  const [userDoc, setUserDoc] = useState<any>([]);

  async function getUserDoc(email: any){
    await fetch(`http://localhost:3000/api/users?email=${email}`)
      .then(response => response.json())
      .then(data => { 
        setUserDoc(data.data);
        setUserData(data.data);
    })
  }

  useEffect(() => {
    getUserDoc(usersEmail);
  }, [])

  return (
    <main className="font-SansPro bg-gray-50 min-h-screen w-screen relative">
      <Navbar userDoc={userDoc} />
      <div className='mx-2 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              About
            </h2>
          </header>
          <section className='mx-8 my-8'>
            <div className='mb-8 flex flex-col justify-center items-center w-full'>
              <div className="mt-8 mb-12 flex justify-center items-center">
                <Image
                  src={"/note.png"}
                  alt="Note icon"
                  width={448}
                  height={448}
                  className="w-12 ml-4 mr-2 opacity-90"
                />
                <h1 className="text-gray-900 text-5xl font-semibold">
                    <span className="">DayNotes</span>
                </h1>
              </div>
              <div className='text-center'>
                <h2 className='mb-4 text-3xl font-semibold'>
                  What is DayNotes?  
                </h2>
                <p className='max-w-3xl text-lg font-light'>
                  DayNotes is a Front-End web development project that allows users to make date-based note documents using the Quill.js text editor alongside
                  a calendar that visualizes your created notes. When a user signs up, their notes are stored within a MongoDB database behind
                  their secure Auth0 user validation. Utilizing the power of Socket.io web sockets, DayNotes allows users to have 
                  instantaneously updating documents for real-time synchronization between your browser tabs.
                </p>
              </div>
            </div>
            <div className='mt-16 mb-16 flex flex-col text-center justify-center items-center'>
              <Image
                src={"/code.png"}
                alt="Note icon"
                width={448}
                height={448}
                className="mb-6 w-12 md:w-16 ml-4 mr-2 opacity-90"
              />
              <h2 className='mb-4 text-3xl font-semibold'>
                Development  
              </h2>
              <div className='max-w-xl text-lg font-light'>
                <p>
                  This project was made using <span className='font-semibold'>React</span>,<span className='font-semibold'> TypeScript</span>, <span className='font-semibold'> Socket.io</span>,<span className='font-semibold'> Quill.js</span>,<span className='font-semibold'> MongoDB</span>,<span className='font-semibold'> Date-fns</span>,<span className='font-semibold'> Auth0</span>,<span className='font-semibold'> TailwindCSS</span>, and<span className='font-semibold'> NextJS</span>.
                </p>
                <p className='mt-4 mb-0'>
                  Check out my other projects:
                </p>
                <a href='https://www.bridgerbrown.dev/' target="_blank" rel="noopener noreferrer"
                  className='text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors'
                >
                  www.bridgerbrown.dev
                </a>
              </div>
            </div>
          </section>
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
