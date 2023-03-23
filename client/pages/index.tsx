import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Calendar from '@/components/calendar/calendar-card'
import GameCard from '@/components/game/game-card'
import Weekly from '@/components/calendar/weekly'
import React, {useState} from 'react'
import Quill from '@/components/text-editor/text-editor'
import dynamic from 'next/dynamic'
import LearningObjectives from '@/components/modules/goals'
import DayHeader from '@/components/modules/day-header'
import Notes from '@/components/modules/notes'
import Games from '@/components/modules/games'
const TextEditor = dynamic(() => import("../components/text-editor/text-editor"), { ssr: false })
import { MongoClient } from 'mongodb'

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

