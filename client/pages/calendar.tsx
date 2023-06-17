import CalendarCard from '@/components/modules/calendar/calendar-card'
import React from 'react'
import Navbar from '@/components/modules/navbar'
import Footer from '@/components/modules/footer'

export default function Calendar() {
  return (
    <>
      <main className="font-SansPro bg-mainBg relative min-h-screen w-screen">
        <Navbar />
            <CalendarCard />
        <Footer />
      </main>
    </>
  )
}
