import React from 'react'
import Navbar from '@/components/modulesnavbar'
import Footer from '@/components/modules/footer'

export default function Goals() {
  return (
    <main className="font-SansPro bg-mainBg relative min-h-screen w-screen">
        <Navbar />
        <div className="pt-16 flex justify-center items-center">
      <section className="mx-12 pb-12 w-[1000px] shadow-xl min-h-32 bg-moduleHeaderBg pt-4 mt-2 border border-moduleBorder/20 rounded-md">
        <header className="pb-4 flex items-center px-6 border-b border-moduleHeaderBorder/20">
            <h2 className="text-moduleHeader/70 font-semibold tracking-wider text-xl uppercase">
                GOALS
            </h2>
          </header>
          <div className="px-6 py-48 bg-white">
          </div>
      </section>
    </div>
        <Footer />
      </main>
  )
}
