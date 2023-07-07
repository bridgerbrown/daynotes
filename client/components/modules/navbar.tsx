import React, { useEffect } from "react"
import Link from "next/link"
import { startOfDay, format, startOfToday } from "date-fns"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useAuth } from "../context/AuthContext"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Navbar(){
  const liStyle: string = `cursor-pointer ml-0 pl-5 sm:pl-7 py-2 flex justify-center items-center hover:bg-gray-200/70 transition-colors rounded-lg text-gray-900 tracking-wide font-regular mt-1 flex text-sm`;
  const today = startOfToday();
  const { user } = useUser();
  const router = useRouter();

  return(
    <nav className="pt-4 pb-3 px-6 sm:px-12 flex justify-between items-center">
      <Link href={`/`}>
        <div className="cursor-pointer flex justify-center items-center">
          <Image
            src={"/note.png"}
            alt="Note icon"
            width={448}
            height={448}
            className="w-6 sm:w-7 mr-2 opacity-80"
          />
          <h1 className="text-gray-900 text-xl sm:text-2xl font-regular tracking-wide">
              <span className="">DayNotes</span>
          </h1>
        </div>
      </Link>
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
                <li className={liStyle}>
                  <Link href={`/${user.email}/notes`}>Notes</Link>
                </li>

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
