import Head from 'next/head'
import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>gNotes</title>
        <meta name="description" content="gNotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="font-SansPro bg-gray-200 relative min-h-screen w-screen">
        <Navbar />
        <Footer />
      </main>
    </>
  )
}

