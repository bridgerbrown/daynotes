import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
        <section>

        </section>
        <Footer />
      </main>
    </>
  )
}
