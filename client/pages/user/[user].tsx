import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

export default function User() {
    const router = useRouter()
    let { user } = useUser()
    // { user !== undefined && ( router.push(`/user/${user.name}`))}

    return (
        <main className='w-screen min-h-screen relative font-Hind bg-stone-100'>
            <Navbar />
                <section className='flex justify-center'>
                    {
                        user ?
                        <section className="w-[700px] shadow-lg mt-6 pb-12 min-h-32 bg-moduleHeaderBg border-moduleBorder/20  pt-4 border border-[#383163] rounded-md">
                            <header className="pb-4 flex items-center px-6 border-b  border-moduleHeaderBorder/20">
                                <h2 className="text-moduleHeader/70 font-semibold tracking-wider text-base uppercase">
                                    Profile
                                </h2>
                            </header>
                            <div className='flex flex-col bg-gray-100 text-black pt-8 pb-8 space-y-1 text-base font-light tracking-wide pl-8 list-decimal'>
                                <div className='space-x-8 flex'>
                                    <div className='w-[100px] h-[100px] bg-red-100 rounded-full'></div>
                                    <div className=''>
                                        <div className='flex'>
                                            <h1 className='pr-2 font-semibold'>
                                                Username:
                                            </h1>
                                            <h1 className=''>
                                                {user.nickname}
                                            </h1>
                                        </div>
                                        <div className='flex'>
                                            <h1 className='pr-2 font-semibold'>
                                                Email:
                                            </h1>
                                            <h1 className=''>
                                                {user.email}
                                            </h1>
                                        </div>
                                        <h1 className='text-sm text-black'>
                                            Member since March 2023
                                        </h1>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end pr-8'>
                                    <a className='text-sm font-semibold px-4 py-2 rounded-md bg-gray-200'
                                        href='/api/auth/logout'
                                    >
                                        LOG OUT
                                    </a>
                                </div>
                            </div>
                        </section>
                        :
                        <div></div>
                    }
                </section>
            <Footer />
        </main>
  )
}
