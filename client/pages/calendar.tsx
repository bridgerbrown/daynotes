import CalendarCard from '@/components/calendar/calendar-card'
import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
