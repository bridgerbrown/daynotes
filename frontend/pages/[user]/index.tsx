import React, { useEffect, useState } from 'react';
import Navbar from '@/components/modules/Navbar';
import Footer from '@/components/modules/Footer';
import UserImage from '@/components/modules/user/UserImage';
import { format } from 'date-fns';
import { useAuth } from '@/data/context/AuthContext';
import { useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { setCookie } from 'cookies-next';
import Cookies from 'js-cookie';

export default function User({ userEmail }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { userData, setUserData } = useAuth();
  const [editImage, setEditImage] = useState<boolean>(false);
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

  async function updateUserImage(userEmail: string, newImage: string){
    try {
      const accessToken = Cookies.get('jwt');
      const response = await fetch(`http://localhost:3000/api/user`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ userEmail, newImage }),
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data.message);
        setIsLoading(false);
        getUserData();
      } else {
        console.error("Error updating user data.")
      }
    } catch (err) {
      console.error(err);
    }
  }
 
  async function getUserData() {
    const accessToken = Cookies.get('jwt');
    try {
      const response = await fetch(`http://localhost:3000/api/user?userEmail=${userEmail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data.user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => { getUserData() }, []);

  return (
    <main className="font-sans bg-gray-50 min-h-screen w-screen relative">
      <Navbar />
      <div className='mx-2 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              User 
            </h2>
          </header>
            {
              userData ?
                <div className='flex flex-col text-blackHeading mt-12 mb-2 font-light'>
                  <div className='flex flex-col items-center'>
                    {
                      editImage ?
                      <div className='flex flex-col justify-center items-center'>
                        <p className='mb-6'>
                          Choose a new profile picture:
                        </p>
                        <div className='w-fit grid grid-cols-4'>
                          {imageOptions.map((image: string) => <UserImage updateUserImage={updateUserImage} email={userData.email} key={image} editImage={editImage} setEditImage={setEditImage} image={image} /> )}
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
                        <UserImage editImage={editImage} setEditImage={setEditImage} image={userData.userImage} />
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
                                {userData.username}
                            </p>
                          </div>
                          <div className='flex'>
                            <p className='pr-2 font-semibold'>
                                Email:
                            </p>
                            <p className=''>
                                {userData.email}
                            </p>
                          </div>
                          <div className='flex flex-col items-center mt-2 text-sm'>
                            <p>
                              Member since {userData.memberSinceDate}
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

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
  const jwtCookie = ctx.req.headers.cookie!;
  const token = jwtCookie.split('jwt=')[1];
  if (!jwtCookie) {
    /*
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
    */
    console.log("No jwtCookie found")
  }

  try {
    let accessTokenSecret: string = process.env.ACCESS_TOKEN_SECRET as string;
    const decoded = jwt.verify(token, accessTokenSecret) as JwtPayload;
    console.log("decoded: " + decoded);
    const userEmail = decoded.email;
    console.log("userEmail gssp: "+ userEmail);
    
    return {
      props: {
      userEmail,
      },
    };
  } catch (err) {
    console.error("Error in JWT verification:", err);
    return {
      props: {},
    };
  }
});
