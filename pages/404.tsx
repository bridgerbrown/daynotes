import Footer from '@/components/modules/footer';
import Navbar from '@/components/modules/navbar';
import Image from 'next/image';
import React from 'react';

function NotFoundPage() {
  return (
    <main className="font-sans overflow-hidden bg-gray-50 min-h-screen w-screen relative">
      <Navbar />
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

export default NotFoundPage;
