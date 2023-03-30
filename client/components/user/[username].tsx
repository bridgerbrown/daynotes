import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, } from 'next'
import { useAuth } from '@/data/context/authContext';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default function Profile({users}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { userFound, loading, logOut } = useAuth()
    const findUser = users.find((item: any) => item.email === userFound)

    console.log(userFound)
    
    // if(loading) return (
    //     <div>
    //         <Loading/>
    //     </div>
    // )

    return (
        <main className='w-screen min-h-screen relative font-Hind bg-stone-100'>
            <Navbar />
                <section className='flex justify-center'>
                    {
                        userFound ?
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
                                        <h1 className='text-lg text-black'>
                                            Username: {findUser.username}
                                        </h1>
                                        <h1 className='text-lg text-black'>
                                            Email: {findUser.email}
                                        </h1>
                                        <h1 className='text-sm text-black'>
                                            Member since March 2023
                                        </h1>
                                        <h2 className='pt-2'>Rank: Platinum IV</h2>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end pr-8'>
                                    <button className='text-sm font-semibold px-4 py-2 rounded-md bg-gray-200'
                                        onClick={() => logOut()}
                                    >
                                        LOG OUT
                                    </button>
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

export const getServerSideProps: GetServerSideProps = async (context) => { 
    try {
      const client = await clientPromise;
      const database = client.db('users-db');
  
      const users = await database
          .collection('users')
          .find({})
          .toArray();
  
      return {
          props: { 
            users: JSON.parse(JSON.stringify(users)) 
          },
      };
    } catch (e) {
      console.error(e);
      return {
        props: { users: [] }
      }
    } 
  }  
