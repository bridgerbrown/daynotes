import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import React from 'react'

export default function User() {
    const router = useRouter()
    let { user } = useUser()
    { user !== undefined && ( router.push(`/user/${user.name}`))}

    return (
        <div className='bg-black'>
            <h1 className='text-black font-xl'>{ user !== undefined && (
            user.email
            )
            }</h1>
        </div>
  )
}
