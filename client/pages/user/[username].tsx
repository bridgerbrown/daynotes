import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType, } from 'next'
import { useAuth } from '@/data/context/authContext';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default function Profile({users}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { userFound, loading } = useAuth()
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
                <header className='flex justify-center'>
                    <div className='xs:w-11/12 sm:w-144 lg:w-192  mt-8 mb-4'>
                        <h1 className='text-xl font-normal tracking-wide'>Profile</h1>
                    </div>
                </header>
                <section className='pb-60 flex justify-center'>
                    {
                        userFound ?
                        <div><h1 className='font-xl text-black'>{findUser.username}</h1></div>
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
