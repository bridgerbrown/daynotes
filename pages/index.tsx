import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Calendar from '@/components/calendar/calendar'
import GameCard from '@/components/game/game-card'

export default function Home() {
  return (
    <>
      <Head>
        <title>gNotes</title>
        <meta name="description" content="gNotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-slate-900 relative min-h-screen w-screen">
        <Navbar />
          <section className='pt-4 px-16 flex flex-col justify-center items-start'>
            <h1 className='pb-6 text-white font-semibold text-3xl'>Tue, March 14</h1>
            <h2 className='text-white text-2xl'>Games</h2>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <GameCard />
          </section>
          <section className='bg-white'>
            <Calendar />
          </section>
        <Footer />
      </main>
    </>
  )
}
