import React, { useEffect, useState } from 'react';
import Navbar from '@/components/modules/Navbar';
import Footer from '@/components/modules/Footer';
import UserImage from '@/components/modules/user/UserImage';
import { useAuth } from '@/data/context/AuthContext';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import getJwt from '@/data/getJwt';
import getUserData from '@/data/getUserData';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { format, parseISO } from 'date-fns';
import updateUserImage from '@/data/updateUserImage';
import Loading from '@/components/modules/Loading';

export default function User({ userResponse }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { userEmail, userId } = userResponse;
  const { userData, setUserData } = useAuth();
  const router = useRouter();
  const [editImage, setEditImage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<boolean>(false);
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
  
  const submitImage = async (selectedImage: string) => {
    if (editImage) {
      await updateUserImage(userEmail, userId, selectedImage);
      setEditImage(false);
      router.reload();
    } else {
      setEditImage(false)
    }
  };

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const data = await getUserData(userEmail, userId);
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchData();
  }, [userEmail, userId]);


  async function logOut() {
    try {
      setIsLoading(true);
      const accessToken = Cookies.get('jwt');
      const response = await fetch("/api/logout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      setIsLoading(false);

      if (!response.ok) {
        const data = await response.json();
        console.log(`${data.message}`);
        throw new Error(`Failed to logout. Status: ${response.status}`);
      } else {
        await router.push("/");
        Cookies.remove('jwt', { path: '/' });
        setUserData([]);
      }

      const data = await response.json();
      return data.user;
    } catch (err) {
      console.log(err);
    }
  }; 

  return (
    <main className="font-sans bg-gray-50 min-h-screen w-screen relative">
      <Navbar userEmail={userEmail} userData={userData} />
      <div className='mx-2 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-slate-50 pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-4 sm:px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              User 
            </h2>
          </header>
            {
              userData && !isLoading ?
                <div className='flex flex-col text-blackHeading mt-12 mb-2 font-light'>
                  <div className='flex flex-col items-center'>
                    {
                      editImage ?
                      <div className='flex flex-col justify-center items-center'>
                        <p className='mb-6'>
                          Choose a new profile picture:
                        </p>
                        <div className='w-fit grid grid-cols-4'>
                          {imageOptions.map((image: string) => 
                            <UserImage 
                              email={userData.email} 
                              userId={userData.userId}
                              key={image} 
                              editImage={editImage} 
                              setEditImage={setEditImage} 
                              image={image} 
                              isLoading={isLoading}
                              setIsLoading={setIsLoading}
                              submitImage={submitImage}
                            /> 
                          )}
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
                              Member since {format(parseISO(userData.memberSince), 'M/dd/yyyy')}
                            </p>
                          </div>
                        </div>
                          <p className='bg-gray-200/70 hover:bg-gray-300 transition cursor-pointer text-blackHeading text-sm font-semibold px-5 py-3 rounded-full'
                             onClick={() => logOut()}
                          >
                              LOG OUT
                          </p>
                      </div>
                    }
                  </div>
                </div>
              :
              <div className='flex justify-center items-center w-full my-28'>
                <Loading dimensions={125} invert={false} />
              </div>
            }
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
      redirect: {
        destination: '/auth/login',
        permanent: false,
      }
    }
  }
});
