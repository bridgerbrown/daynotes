import React, { useEffect } from "react";
import Link from "next/link";
import { startOfToday } from "date-fns";
import { useAuth } from "@/data/context/AuthContext";
import Image from "next/image";

export default function Navbar(props: any){
  const liStyle: string = `cursor-pointer ml-2 px-3 sm:px-3 py-2 flex justify-center items-center hover:bg-gray-200/70 transition-colors rounded-lg text-gray-900 tracking-wide font-regular mt-1 flex text-sm`;
  const today = startOfToday();
  const { userEmail, userData } = props;

  useEffect(() => {}, [userEmail, userData])

  return(
    <nav 
      className="pt-4 pb-3 px-6 sm:px-12 flex justify-between items-center"
      data-testid="navbar"
    >
      <Link href={`/`}>
        <div className="cursor-pointer flex justify-center items-center">
          <Image
            src={"/daynotes-logo.png"}
            alt="DayNotes logo"
            width={740}
            height={149}
            className="mt-2 w-[125px] sm:w-[150px]"
            data-testid="navbar-logo"
          />
        </div>
      </Link>
      <ul className="flex">
        <Link href={`/`}>
          <li className={liStyle}>
            Home
          </li>
        </Link>
        {
          userEmail !== undefined && (
            <Link href={`/${userEmail}/${today}`}>
              <li className={liStyle}>
                Today
              </li>
            </Link>
          )
        }
        {
          userEmail ?
            <Link href={`/${userEmail}/notes`}>
              <li className={liStyle}>
                Notes
              </li>
            </Link>
          :
          <div></div>
        }
        <Link href={"/about"}>
          <li className={liStyle}>
            About
          </li>
        </Link>
        {
          userData ?
          <Link href={`/${userEmail}`}>
            <li className="cursor-pointer ml-1 px-3 sm:px-3 pt-2">
              <div className="hover:drop-shadow-md bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer w-[30px] h-[30px] rounded-full flex justify-center items-center">
              {
                userData.userImage ?
                  <Image
                    src={`/user-icons${userData.userImage}`}
                    alt="User profile icon"
                    width={448}
                    height={512}
                    className="w-1/2 invert"
                  />
                  :
                  <Image
                    src={"/spinner.png"}
                    alt="Loading icon for user image"
                    width={50}
                    height={50}
                    className="w-1/2 animate-spin invert"
                  />
                }
                </div>
              </li>
          </Link>
          :
          <Link href={`/auth/signup`} data-testid="signup">
            <li className="ml-3 mt-1">
              <button className='border border-blue-700 hover:from-blue-700 hover:to-blue-700 from-blue-600 to-blue-700 transition-all bg-gradient-to-b px-3 py-2 text-sm text-white font-semibold tracking-wide rounded-md'>
                Sign Up
              </button>
            </li>
          </Link>
        }
      </ul>
    </nav>
  )
};
