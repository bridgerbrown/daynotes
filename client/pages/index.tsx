import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className="overflow-hidden font-SansPro bg-gray-50 min-h-screen w-screen relative">
      <Navbar />
      <section className='mx-2 mb-96 sm:mx-8 flex flex-col justify-center items-center'>
        <div className='mt-72 w-full flex flex-col justify-center items-center'>
          <h1 className='mb-10 text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900'>
            Daily notes, made easy
          </h1>
          <p className='text-center mb-24 text-gray-500 text-xl lg:text-2xl px-2 font-light'>
            Bring your daily notes to the next level with calendar-based organization.
          </p>
          <Link href={`/api/auth/login`}>
            <button className='border border-blue-700 hover:from-blue-700 hover:to-blue-700 from-blue-600 to-blue-700 shadow-lg hover:shadow-xl transition-all bg-gradient-to-b lg:px-8 lg:py-4 px-6 py-3 text-md lg:text-lg text-white font-semibold rounded-lg'>
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
                src={"/note-sample.png"}
                alt="Product preview"
                width={1880}
                height={1080}
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
                src={"/calendar-sample.png"}
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
                Calendar-based note organization
              </h2>
              <p className='mr-4 lg:mr-8 text-lg text-gray-600/80 font-light'>
                Using the date-formatting of Date-fns, DayNotes allows users create notes according to any date in the calendar year.
                Note documents are securely created and stored using MongoDb database behind their private Auth0 user data.
              </p>
            </div>
          </div>
        </div>
      </section>
         
      <Footer />
    </main>
  )
};
