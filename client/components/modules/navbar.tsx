import React, { useEffect } from "react"
import Link from "next/link"
import { startOfDay, format, startOfToday } from "date-fns"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useAuth } from "../context/AuthContext"
import Image from "next/image"

export default function Navbar(){
  const liStyle: string = `pl-8 text-grayHeading hover:text-blackHeading tracking-wide font-light pt-1 flex text-md`
  const today = startOfToday();
  const { user } = useUser()

  return(
    <nav className="pt-4 pb-2 px-12 text-slate-900 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <Image
          src={"/note.png"}
          alt="Note icon"
          width={448}
          height={448}
          className="w-8 mr-2 opacity-80"
        />
        <h1 className="text-blackHeading text-[32px] font-regular tracking-wide">
            <span className="">DayNotes</span>
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
                <li className={liStyle}><Link href={`/${user.email}/notes`}>Notes</Link></li>

                :
                <div></div>
            }
          <li className={liStyle}>
              {
                  user ?
                  <Link href={`/${user.nickname}`}>User</Link>

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
