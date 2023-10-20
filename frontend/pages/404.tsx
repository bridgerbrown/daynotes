import Footer from '@/components/modules/Footer';
import Navbar from '@/components/modules/Navbar';
import { useAuth } from '@/data/context/AuthContext';
import getJwt from '@/data/getJwt';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

export default function NotFoundPage({ userResponse }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { userEmail, userId } = userResponse;
  const { userData, setUserData } = useAuth();

  return (
    <main className="font-sans overflow-hidden bg-gray-50 min-h-screen w-screen relative">
      <Navbar userEmail={userEmail} userData={userData} />
        <section className='mx-2 my-96 sm:mx-8 flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <Image
              src={"/404-face.png"}
              width={70}
              height={70}
              alt="Page not found sad face"
              className="mb-4"
            />
            <h1 className='text-4xl font-semibold mb-4'>
              404 - Page Not Found!
            </h1>
            <p className='text-lg font-light'>
              Sorry, it looks like the page you're looking for does not exist.
            </p>
          </div>
        </section>
      <Footer />
    </main>
  );
};

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
      props: {
        userResponse: [],
      },
    }
  }
});
