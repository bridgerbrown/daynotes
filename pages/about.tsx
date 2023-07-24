import React, { useEffect, useState } from 'react';
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import Image from 'next/image';

export default function User() {

  return (
    <main className="font-sans bg-gray-50 min-h-screen w-screen relative">
      <Navbar />
      <div className='pb-36 mx-2 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              About
            </h2>
          </header>
          <section className='mx-8 my-8'>
            <div className='mb-8 flex flex-col justify-center items-center w-full'>
              <div className='mt-12 text-center flex flex-col items-center'>
                <Image
                  src={"/note.png"}
                  alt="Note icon"
                  width={448}
                  height={448}
                  className="mb-6 w-10 md:w-12 ml-4 mr-2 opacity-90"
                />
                <h2 className='mb-4 text-2xl '>
                  What is DayNotes?  
                </h2>
                <p className='max-w-2xl text-base font-light'>
                  DayNotes is a Front-End web development project that allows users to make date-based note documents using the Quill.js text editor alongside
                  a calendar that visualizes their timeline of created notes. DayNotes also allows users to have 
                  instantaneously updating and saving documents for real-time synchronization between their browser tabs.
                </p>
              </div>
              <div className='mt-20 text-center flex flex-col items-center'>
                <Image
                  src={"/puzzle.png"}
                  alt="Note icon"
                  width={448}
                  height={448}
                  className="mb-6 w-10 md:w-12 ml-4 mr-2 opacity-90"
                />
                <h2 className='mb-4 text-2xl '>
                  How does it work? 
                </h2>
                <p className='max-w-2xl text-base font-light'>
                  Once the user signs in through Auth0's user authorization, a MongoDB user collection is made which will store their basic profile data (private login data is securely stored through Auth0.)
                  When they create their first note, the client-side Vercel-hosted website communicates with the Node.js server hosted on Render
                  to establish a Socket.io web socket connection. This socket connection is what allows for real-time document synchronization between browser tabs.
                  <br/>
                  <br/>
                  Once the Socket.io connection is started, the Quill.js text editor is activated and a note document is created in the MongoDB database with important data like the users ID, the date of the document, and
                   the notes text. The note is now ready for any changes, and is saved consistently every second, with Socket.io listening for any changes to be communicated. 
                  <br/>
                  <br/>
                  At the top of the interface, there is a calendar view toggle which displays what dates the user has made a note. If a note was created but left empty or with only whitespace, Socket.io tells MongoDB to
                  delete the document (to save space.) If the user wants to delete the note for that date, they can at the top right.  
                  <br/>
                  <br/>
                  Finally, the user can navigate to the Notes page to see their collection of notes laid out in grid form, enabling them to sort through by date or when they were last updated, and they can even search by keyword or date.
                  Thanks for checking out my project DayNotes! This is merely just a personal project for development practice, not intended as a real product. 
                </p>
              </div>
            </div>
            <div className='mt-20 mb-16 flex flex-col text-center justify-center items-center'>
              <Image
                src={"/code.png"}
                alt="Note icon"
                width={448}
                height={448}
                className="mb-6 w-10 md:w-12 ml-4 mr-2 opacity-90"
              />
              <h2 className='mb-4 text-2xl'>
                Development Technologies
              </h2>
              <div className='max-w-2xl text-base font-light'>
                <p>
                  This project was made using <span className='font-semibold'>React</span>,<span className='font-semibold'> TypeScript</span>, <span className='font-semibold'> Socket.io</span>,<span className='font-semibold'> Quill.js</span>,<span className='font-semibold'> MongoDB</span>,<span className='font-semibold'> Date-fns</span>,<span className='font-semibold'> Auth0</span>,<span className='font-semibold'> TailwindCSS</span>,<span className='font-semibold'> NextJS</span>,<span className='font-semibold'> Node.js</span>,<span className='font-semibold'> Render</span>, and<span className='font-semibold'> Vercel</span>.
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
