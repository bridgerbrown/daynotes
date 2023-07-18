import React, { useEffect, useState } from 'react';
import Navbar from '@/components/modules/navbar';
import Footer from '@/components/modules/footer';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import UserImage from '@/components/modules/user/UserImage';
import { format } from 'date-fns';
import { useAuth } from '@/components/context/AuthContext';

export default function User({userCtxt}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { user } = useUser();
  const { userData, setUserData } = useAuth();
  const usersEmail = userCtxt.email;
  const [editImage, setEditImage] = useState<boolean>(false);
  const [userDoc, setUserDoc] = useState<any>([]);
  const [memberSinceDate, setMemberSinceDate] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  async function getUserDoc(email: any){
    await fetch(`https://daynotes-client.vercel.app/api/users?email=${email}`)
      .then(response => response.json())
      .then(data => { 
        setUserDoc(data.data);
        setUserData(data.data);
        const memberSince = format(new Date(data.data.memberSince), 'LLLL d, yyyy') + ".";
        setMemberSinceDate(memberSince);
        setIsLoading(false);
    })
  }

  async function updateUserImage(email: any, newImage: string){
    await fetch(`https://daynotes-client.vercel.app/api/users?email=${email}&newImage=${newImage}`, {
      method: 'PATCH'
    })
      .then(response => response.json())
      .then(data => { 
        console.log(data.message)
        setIsLoading(false);
        getUserDoc(usersEmail);
    })
  }

  useEffect(() => {
    getUserDoc(usersEmail);
  }, [updateUserImage])

  return (
    <main className="font-SansPro bg-gray-50 min-h-screen w-screen relative">
      <Navbar userDoc={userDoc} />
      <div className='mx-2 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8'>
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
                          {imageOptions.map((image: string) => <UserImage updateUserImage={updateUserImage} email={usersEmail} key={image} editImage={editImage} setEditImage={setEditImage} image={image} /> )}
                        </div>
                        <div className='mt-3 mb-6 text-sm flex space-x-3 justify-center'>
                          <button 
                            className='bg-gray-200 hover:bg-gray-300 transition cursor-pointer text-blackHeading text-sm font-semibold px-5 py-3 rounded-full'
                            onClick={() => setEditImage(false)}
                          >
                            Cancel 
                          </button>
                        </div>
                      </div>
                      :
                      <div className='flex flex-col justify-center items-center'>
                        <UserImage editImage={editImage} setEditImage={setEditImage} image={userDoc.userImage} />
                        <div className='w-[125px] flex justify-end'>
                          <p 
                            className='hover:opacity-90 transition-opacity cursor-pointer text-xs font-medium opacity-50'
                            onClick={() => setEditImage(true)}
                          >
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
                              Member since {memberSinceDate}
                            </p>
                          </div>
                        </div>
                          <a className='bg-gray-200/70 hover:bg-gray-300 transition cursor-pointer text-blackHeading text-sm font-semibold px-5 py-3 rounded-full'
                              href='/api/auth/logout'
                          >
                              LOG OUT
                          </a>
                      </div>
                    }
                  </div>
                </div>
              :
              <div>
                <h2>Loading...</h2>
              </div>
            }
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
