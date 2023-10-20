import Navbar from '@/components/modules/Navbar'
import Footer from '@/components/modules/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { startOfToday } from 'date-fns';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useAuth } from '@/data/context/AuthContext';
import getJwt from '@/data/getJwt';
import getUserData from '@/data/getUserData';

export default function Home({ userResponse }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { userEmail, userId } = userResponse;
  const { userData, setUserData } = useAuth();
  const today = startOfToday();
  const [socket, setSocket] = useState<any>();

  useEffect(() => {
    const isLocal = window.location.hostname === "localhost";
    const host = isLocal ? "localhost" : "daynotes-server.onrender.com";
    const s = io(`wss://${host}:10000`, {
      transports: ['websocket']
    });
    setSocket(s);

    return () => {
        s.disconnect()
    }
  }, [])

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

  return (
    <main className="font-sans overflow-hidden bg-gray-50 min-h-screen w-screen relative">
      <Navbar userId={userId} userData={userData} />
      <section className='mx-2 mb-96 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='mt-72 w-full flex flex-col justify-center items-center'>
          <h1 className='mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900'>
            Day-to-day notes, made easy
          </h1>
          <p className='text-center mb-24 text-gray-500 text-lg sm:text-xl lg:text-2xl px-2 font-light'>
            Bring your daily notes to the next level with date-based organization.
          </p>
          {
            !userResponse ?
              <Link href={`/api/auth/login`}>
                <button className='border border-blue-700 hover:from-blue-700 hover:to-blue-700 from-blue-600 to-blue-700 shadow-lg hover:shadow-xl transition-all bg-gradient-to-b lg:px-8 lg:py-4 px-6 py-3 text-md lg:text-lg text-white font-semibold rounded-lg'>
                  Sign Up
                </button>
              </Link>
            :
              <p className='font-light text-gray-500'>Thanks for signing up! <Link 
                href={`/${userEmail}/${today}`} 
                className='underline underline-offset-2 hover:text-gray-700 transition-colors'>
                  Click here to make your first note
                </Link>.
              </p>
          }
        </div>
      </section>
      <section className='mb-36 lg:mb-48'>
        <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-48 lg:px-8'>
          <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
            <div className='flex justify-center px-6 md:px-12 lg:relative lg:m-0 lg:h-full lg:px-0'>
              <Image
                src={"/note-preview.png"}
                alt="Product preview"
                width={2199}
                height={1147}
                className='w-full max-w-[640px] lg:absolute lg:-right-36 lg:h-[540px] lg:w-auto lg:max-w-none'
              />
            </div>
          </div>
          <div className='mt-16 lg:mt-0 mx-auto max-w-2xl px-6 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-32'>
            <div>
              <h2 className='text-3xl mb-4'>
                Seamless updating note documents 
              </h2>
              <p className='mr-4 lg:mr-8 text-lg text-gray-600/80 font-light'>
                Utilizing the power of Socket.io web sockets, DayNotes allows
                you to have instantaneously updating documents for real-time synchronization between your browser tabs.
                With efficient lightweight data transmission, web sockets allow a persistent connection between the
                server and the client.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-96'>
        <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-48 lg:px-8'>
          <div className='mt-12 sm:mt-16 lg:col-start-2 lg:mt-0'>
            <div className='flex justify-center px-6 md:px-12 lg:relative lg:m-0 lg:h-full lg:px-0'>
              <Image
                src={"/calendar-preview.png"}
                alt="Product preview"
                width={1658}
                height={1040}
                className='w-full max-w-[640px] lg:absolute lg:-left-24 lg:h-[540px] lg:w-auto lg:max-w-none'
              />
            </div>
          </div>
          <div className='mt-16 lg:mt-0 mx-auto max-w-2xl px-6 sm:px-6 lg:col-start-1 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-32'>
            <div>
              <h2 className='text-3xl mb-4'>
                Calendar-based note organization
              </h2>
              <p className='mr-4 lg:mr-8 text-lg text-gray-600/80 font-light'>
                Using the date-formatting of Date-fns, DayNotes allows users create notes according to any date in the calendar year.
                Note documents are securely created and stored in a MongoDB database behind their private Auth0 user data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mx-2 mb-96 sm:mx-8 flex flex-col justify-center items-center'>
        <h2 className='mb-10 text-xl md:text-2xl lg:text-3xl text-gray-900'>
          How was this website built?
        </h2>
        <p className='text-center mb-24 text-gray-500 text-lg px-2 font-light'>
          Learn more about how this Front-End Web Development project was built <Link 
            href={"/about"} 
            className='underline underline-offset-4 text-blue-400 hover:text-blue-600 transition-colors'>
              here
          </Link>.
        </p>
      </section>
         
      <Footer />
    </main>
  )
};

export const getServerSideProps: GetServerSideProps = (async (ctx) => {
    const userResponse = getJwt(ctx);
    return {
      props: {
        userResponse,
      },
    };
});
