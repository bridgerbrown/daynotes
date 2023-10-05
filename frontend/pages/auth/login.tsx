import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LogIn() {
  const [userDoc, setUserDoc] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <main className="font-sans bg-white min-h-screen w-screen relative flex flex-col justify-center items-center">
      <Image
        src={"/daynotes-logo.png"}
        width={740}
        height={149}
        alt="DayNotes logo"
        className="w-48 mb-20"
      />
      <div className='w-[400px] h-[700px] text-center'>
        <section className='mb-8 flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-semibold tracking-wide mb-2'>
            Log In
          </h1>
          <p className='text-gray-500 font-light mb-6'>
            Choose your method for signing up
          </p>
          <input
            type='email'
            className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3 mb-4'
            placeholder='Enter your email address'
          />
          <input
            type='password'
            className='border-gray-400 border w-80 h-10 font-light rounded-md bg-gray-100 px-3 mb-4'
            placeholder='Password'
          />
          <button
            className='w-80 h-10 bg-blue-300 rounded-md text-white text-sm'
          >
            Continue
          </button>
        </section>
        <section className='flex flex-col items-center'>
          <div className='mb-8 h-0.5 w-80 bg-gray-200'>
            <div className='w-80 relative bottom-2.5 flex items-center justify-center'>
              <p className='z-10 font-light text-gray-500 text-sm'>
                or
              </p>
              <div className='bg-white w-8 h-8 absolute'>
              </div>
            </div>
          </div>
          <button
            className='mb-3 w-80 h-10 bg-white border-gray-400 border rounded-md font-semibold text-sm'
          >
            Continue with Google
          </button>
          <button
            className='w-80 h-10 bg-white border-gray-400 border rounded-md font-semibold text-sm'
          >
            Email me a magic link
          </button>
          <p className='mt-4 hover:cursor-pointer hover:text-gray-500 underline underline-offset-2 text-sm font-light text-gray-400'>
            Learn about our secure login process
          </p>
        </section>
      </div>
    </main>
  )
}
