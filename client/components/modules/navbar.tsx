import React, { useEffect } from "react"
import Link from "next/link"
import { startOfDay, format } from "date-fns"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useAuth } from "../context/AuthContext"

export default function Navbar(){
  const liStyle: string = `pl-8 text-black opacity-60 hover:opacity-100 transition-opacity tracking-wide font-extralight pt-1 flex text-md`
  const today = format(startOfDay(new Date()), 'MM-dd-yyyy')
  const { user } = useUser()

  return(
      <nav className="pt-6 pb-0 px-8 text-slate-900 flex justify-between">
          <div className="flex justify-center items-center">
              {/* <h1 className="text-white text-xl border-4 border-[#ebc157] font-extrabold rounded-full px-2.5 py-0.5 mr-2 ">L</h1> */}
              <h1 className="text-black text-[32px] uppercase font-light tracking-wide">
                  <span className="">g-Notes</span>
              </h1>
          </div>
          <ul className="flex">
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
