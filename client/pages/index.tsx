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
      <section className='mx-2 mb-96 sm:mx-8 flex flex-col justify-center items-center'>
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
      <section className='mb-36 lg:mb-48'>
        <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-48 lg:px-8'>
          <div className='mt-12 sm:mt-16 lg:col-start-1 lg:mt-0'>
            <div className='flex justify-center px-6 md:px-12 lg:relative lg:m-0 lg:h-full lg:px-0'>
              <Image
                src={"/calendar.png"}
                alt="Product preview"
                width={1880}
                height={1080}
                className='w-full max-w-[640px] lg:absolute lg:-right-24 lg:h-[540px] lg:w-auto lg:max-w-none'
              />
            </div>
          </div>
          <div className='mt-16 lg:mt-0 mx-auto max-w-2xl px-6 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-32'>
            <div>
              <h2 className='text-3xl mb-4'>
                Follow up on your goals everyday...
              </h2>
              <p className='mr-4 lg:mr-8 text-lg text-gray-600/80 font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tempor odio. Phasellus ut volutpat leo, ut commodo enim. Phasellus sit amet luctus ipsum. Etiam accumsan nulla quis nunc rhoncus ultrices nec quis justo. Fusce turpis mauris, cursus eu consequat nec, rhoncus non sem. Pellentesque a nisl faucibus odio pulvinar efficitur eu et massa. Vestibulum eros risus, iaculis a tempus et, tristique nec massa. Duis placerat ipsum ut nibh fringilla feugiat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-72'>
        <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-48 lg:px-8'>
          <div className='mt-12 sm:mt-16 lg:col-start-2 lg:mt-0'>
            <div className='flex justify-center px-6 md:px-12 lg:relative lg:m-0 lg:h-full lg:px-0'>
              <Image
                src={"/calendar.png"}
                alt="Product preview"
                width={1880}
                height={1080}
                className='w-full max-w-[640px] lg:absolute lg:-left-24 lg:h-[540px] lg:w-auto lg:max-w-none'
              />
            </div>
          </div>
          <div className='mt-16 lg:mt-0 mx-auto max-w-2xl px-6 sm:px-6 lg:col-start-1 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-32'>
            <div>
              <h2 className='text-3xl mb-4'>
                Follow up on your goals everyday...
              </h2>
              <p className='mr-4 lg:mr-8 text-lg text-gray-600/80 font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tempor odio. Phasellus ut volutpat leo, ut commodo enim. Phasellus sit amet luctus ipsum. Etiam accumsan nulla quis nunc rhoncus ultrices nec quis justo. Fusce turpis mauris, cursus eu consequat nec, rhoncus non sem. Pellentesque a nisl faucibus odio pulvinar efficitur eu et massa. Vestibulum eros risus, iaculis a tempus et, tristique nec massa. Duis placerat ipsum ut nibh fringilla feugiat.
              </p>
            </div>
          </div>
        </div>
      </section>
         
      <Footer />
    </main>
  )
};
