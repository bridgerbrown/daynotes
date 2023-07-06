import React, { useEffect } from "react"
import Link from "next/link"
import { startOfDay, format, startOfToday } from "date-fns"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useAuth } from "../context/AuthContext"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Navbar(){
  const liStyle: string = `pl-8 text-grayHeading hover:text-blackHeading tracking-wide font-light pt-1 flex text-md`
  const activeLiStyle: string = `pl-8 text-blackHeading tracking-wide font-medium pt-1 flex text-md`
  const today = startOfToday();
  const { user } = useUser();
  const router = useRouter();

  return(
    <nav className="pt-4 pb-2 px-12 text-slate-900 flex justify-between items-center">
      <Link href={`/`}>
        <div className="cursor-pointer flex justify-center items-center">
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
      </Link>
      <ul className="flex">
        <li className={router.route == "/" ? activeLiStyle : liStyle}>
          <Link href={`/`}>Home</Link>
        </li>
            {
                user !== undefined && (
                <li className={router.route == "/[user]/[date]" ? activeLiStyle : liStyle}>
                    <Link href={`/${user.email}/${today}`}>Today</Link>
                </li>
                )
            }
            {
                user ?
                <li className={router.route == "/[user]/notes" ? activeLiStyle : liStyle}>
                  <Link href={`/${user.email}/notes`}>Notes</Link>
                </li>

                :
                <div></div>
            }
          <li className={router.route == "/[user]" ? activeLiStyle : liStyle}>
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
