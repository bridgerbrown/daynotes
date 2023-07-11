import Head from 'next/head'
import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="font-SansPro bg-gray-50 min-h-screen w-screen relative">
      <Head>
        <title>gNotes</title>
        <meta name="description" content="gNotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section className='mx-2 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='mt-48 w-full flex flex-col justify-center items-center'>
          <h1 className='mb-10 text-6xl font-semibold text-gray-900'>
            Daily notes, made easy
          </h1>
          <p className='mb-24 text-gray-500 text-2xl font-light'>
            Bring your daily notes to the next level with calendar-based organization.
          </p>
          <Link href={`/api/auth/login`}>
            <button className='border border-blue-700 hover:from-blue-700 hover:to-blue-700 from-blue-600 to-blue-700 shadow-lg hover:shadow-xl transition-all bg-gradient-to-b px-8 py-4 text-lg text-white font-semibold rounded-lg'>
              Sign Up
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
};
