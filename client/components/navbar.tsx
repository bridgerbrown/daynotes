import React from "react"
import Link from "next/link"
import { startOfToday, format } from "date-fns"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useAuth } from "./context/AuthContext"

export default function Navbar(){
    let today = startOfToday()
    let todayFormatted = format(today, 'M-d-y')
    const { user } = useUser()
    const { usersId, setUsersId } = useAuth()
    
    async function getUserDocument(email: any){
        let res = await fetch("http://localhost:3000/api/users")
        const data = await res.json();
        const arr = []
        for(var i in data){
          arr.push(data[i]);
        }
        const users = arr[1].filter((item: any) => item.email == email)
        setUsersId(users[0]._id)
      }

    return(
        <nav className="py-6 px-8 text-slate-900 flex justify-between">
            <div className="flex justify-center items-center">
                <h1 className="text-white text-xl border-4 border-[#ebc157] font-extrabold rounded-full px-2.5 py-0.5 mr-2 ">L</h1>
                <h1 className="text-white text-2xl uppercase font-semibold tracking-wide">
                    League
                    <span className="text-moduleHeader/60">Notes</span>
                </h1>
            </div>
            <ul className="text-moduleHeader/50 tracking-wide font-base pt-1 flex space-x-8 text-base">
                <li>
                    Home
                </li>
                <li>
                    {
                        user !== undefined && (
                        <Link href={`/note/${usersId}_${todayFormatted}`}>Today</Link>
                        )
                    }
                </li>
                <li>
                    <Link href={`/calendar`}>Calendar</Link>
                </li>
                <li>
                <Link href={`/user/login`}>Log In</Link>
                </li>
            </ul>
        </nav>
    )
}