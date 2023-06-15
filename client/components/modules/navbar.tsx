import React, { useEffect } from "react"
import Link from "next/link"
import { startOfDay, format } from "date-fns"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useAuth } from "../context/AuthContext"

export default function Navbar(){
  const liStyle: string = `pl-8`
  const today = format(startOfDay(new Date()), 'MM-dd-yyyy')
  const { user } = useUser()

  return(
      <nav className="py-6 px-8 text-slate-900 flex justify-between">
          <div className="flex justify-center items-center">
              {/* <h1 className="text-white text-xl border-4 border-[#ebc157] font-extrabold rounded-full px-2.5 py-0.5 mr-2 ">L</h1> */}
              <h1 className="text-white text-2xl uppercase font-semibold tracking-wide">

                  <span className="text-moduleHeader/60">gNotes</span>
              </h1>
          </div>
          <ul className="text-black tracking-wide font-base pt-1 flex text-base">
              <li className={liStyle}>
                  <Link href={`/`}>Home</Link>
              </li>
                  {
                      user !== undefined && (
                      <li className={liStyle}>
                          <Link href={`/${user.email}/${today}`}>Today</Link>
                      </li>
                      )
                  }
                  {
                      user ?
                      <li className={liStyle}><Link href={`/goals`}>Goals</Link></li>

                      :
                      <div></div>
                  }
                  {
                      user ?
                      <li className={liStyle}><Link href={`/calendar`}>Calendar</Link></li>

                      :
                        <div></div>
                    }
                <li className={liStyle}>
                    {
                        user ?
                        <Link href={`/user/${user.nickname}`}>User</Link>

                        :
                        <Link href={`/api/auth/login`}
                            data-testid="login"
                        >Log In</Link>
                    }
                </li>
            </ul>
        </nav>
    )
}
