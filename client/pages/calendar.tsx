import React from 'react'
import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'
import CalendarModule from '@/components/modules/calendar/CalendarModule'

export default function Calendar() {
  return (
    <>
      <main className="font-SansPro bg-mainBg relative min-h-screen w-screen">
        <Navbar />
            <CalendarModule />
        <Footer />
      </main>
    </>
  )
}
