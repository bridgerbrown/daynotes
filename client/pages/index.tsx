import Head from 'next/head'
import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'
import Image from 'next/image'

export default function Home() {

  return (
    <main className="font-SansPro bg-pageBg min-h-screen w-screen relative">
      <Head>
        <title>gNotes</title>
        <meta name="description" content="gNotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className='mx-8 flex flex-col justify-center items-center'>
        <div className='border-boxBorder border drop-shadow-lg rounded-lg bg-boxBg pb-20 w-full'>
          <header className='border-b border-headerBorder flex justify-between items-center pt-5 pb-4 px-8'>
            <h2 className='text-2xl font-regular text-blackHeading'>
              Home 
            </h2>
          </header>
          <section className='flex w-full px-8 py-8'>
            <div className='w-3/4 mr-16'>
              <h1 className='pb-4 text-3xl'>
                Welcome to DayNotes!
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque quis odio sed porta. Integer sollicitudin dictum egestas. Morbi efficitur, tortor non viverra lacinia, felis lorem porta ex, vitae tempus justo nisl ac nulla. Sed quis leo at sapien vestibulum vulputate. Ut et orci finibus, luctus elit eu, ornare dolor. Vestibulum vel lectus ultricies, vehicula velit sit amet, feugiat nulla. Cras non leo et tortor viverra venenatis non sit amet dolor.
              </p>
            </div>
            <div className='w-1/4 pr-2 pt-4'>
              <Image
                src={"/note.png"}
                alt="Demo of website 1"
                width={500}
                height={500}
                className='opacity-90'
              />
            </div>
          </section>

          <section className='flex w-full px-8 py-8'>
            <div className='w-1/4 pl-2 pt-4'>
              <Image
                src={"/note.png"}
                alt="Demo of website 1"
                width={500}
                height={500}
                className='opacity-90'
              />
            </div>
            <div className='w-3/4 ml-16'>
              <h1 className='pb-4 text-xl'>
                A note a day keeps the.. uhhhh....
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque quis odio sed porta. Integer sollicitudin dictum egestas. Morbi efficitur, tortor non viverra lacinia, felis lorem porta ex, vitae tempus justo nisl ac nulla. Sed quis leo at sapien vestibulum vulputate. Ut et orci finibus, luctus elit eu, ornare dolor. Vestibulum vel lectus ultricies, vehicula velit sit amet, feugiat nulla. Cras non leo et tortor viverra venenatis non sit amet dolor.
              </p>
            </div>

          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
};
