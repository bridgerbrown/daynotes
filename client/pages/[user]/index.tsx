import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import UserImage from '@/components/modules/user/UserImage';

export default function NoteIndex() {
  const { user } = useUser();
  const [editImage, setEditImage] = useState<boolean>(false);
  const imageOptions: any[] = [
    "/user.png",
    "/user-hair-long.png",
    "/user-crown.png",
    "/user-astronaut.png", 
    "/user-cowboy.png",
    "/user-ninja.png",
    "/user-robot.png",
    "/user-shakespeare.png",
  ]
  
  return (
    <main className="font-SansPro bg-pageBg min-h-screen w-screen relative">
      <Navbar />
      <div className='mx-8 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-boxBg pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              User 
            </h2>
          </header>
            {
              user ?
                <div className='flex flex-col text-blackHeading mt-12 mb-2 font-light'>
                  <div className='flex flex-col items-center'>
                    {
                      editImage ?
                      <div className='flex flex-col justify-center items-center'>
                        <p className='mb-6'>
                          Choose a new profile picture:
                        </p>
                        <div className='w-fit grid grid-cols-4'>
                          {imageOptions.map((image: string) => <UserImage editImage={editImage} image={image} /> )}
                        </div>
                        <div className='mt-3 mb-6 text-sm flex space-x-3 justify-center'>
                          <button className='bg-gray-200 hover:bg-gray-400 transition cursor-pointer text-blackHeading text-sm font-semibold px-5 py-3 rounded-full'>
                            Cancel 
                          </button>
                        </div>
                      </div>
                      :
                      <div className='flex flex-col justify-center items-center'>
                        <UserImage editImage={editImage} image={user.image} />
                        <div className='w-[125px] flex justify-end'>
                          <p className='hover:opacity-90 transition-opacity cursor-pointer text-xs font-medium opacity-50'>
                            Edit
                          </p>
                        </div>
                        <div className='mt-4 mb-6 flex flex-col items-center text-md'>
                          <div className='flex'>
                            <p className='pr-2 font-semibold'>
                                Username:
                            </p>
                            <p className=''>
                                {user.nickname}
                            </p>
                          </div>
                          <div className='flex'>
                            <p className='pr-2 font-semibold'>
                                Email:
                            </p>
                            <p className=''>
                                {user.email}
                            </p>
                          </div>
                          <div className='flex flex-col items-center mt-2 text-sm'>
                            <p>
                              Member since May 2023 
                            </p>
                          </div>
                        </div>
                          <a className='hover:bg-gray-300 transition cursor-pointer text-blackHeading text-sm font-semibold px-5 py-3 rounded-full bg-gray-200'
                              href='/api/auth/logout'
                          >
                              LOG OUT
                          </a>
                      </div>
                    }
                  </div>
                </div>
              :
              <div></div>
            }
        </div>
      </div>
      <Footer />
    </main>
  )
}
