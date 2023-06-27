import React from 'react'
import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'
import NotePreview from '@/components/modules/notes/NotePreview'

export default function Notes() {
  const sortItemsCSS: string = `hover:text-black cursor-pointer text-sm text-gray-400 font-light`;

  return (
    <main className="font-SansPro bg-gray-200 min-h-screen w-screen relative">
      <Navbar />
      <div className='mt-0 pt-0 flex flex-col justify-center items-center'>
        <div className='rounded-lg bg-white/80 border-gray-800 min-h-[100vh] mt-0 pb-12 mb-32 w-[98%]'>
          <header className='flex justify-between items-center pt-6 px-8'>
            <h2 className='text-2xl font-thin'>
              Notes
            </h2>
            <div className='flex space-x-3'>
              <h3 className='pr-1 text-sm text-gray-900'>
                Sort by:
              </h3>
              <h3 className={sortItemsCSS}>
                Date
              </h3>
              <h3 className={sortItemsCSS}>
                Last Updated 
              </h3>
            </div>
          </header>
          <div className='my-5 flex flex-wrap justify-center items-center'>
            <NotePreview />
            <NotePreview />
            <NotePreview />
            <NotePreview />
            <NotePreview />
            <NotePreview />
            <NotePreview />
            <NotePreview />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
