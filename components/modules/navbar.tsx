import React, { useEffect } from "react";
import Link from "next/link";
import { startOfToday } from "date-fns";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";

export default function Navbar(props: any){
  const liStyle: string = `cursor-pointer ml-2 px-3 sm:px-3 py-2 flex justify-center items-center hover:bg-gray-200/70 transition-colors rounded-lg text-gray-900 tracking-wide font-regular mt-1 flex text-sm`;
  const today = startOfToday();
  const { user } = useUser();
  const { userData, setUserData } = useAuth();
  const { userDoc } = props;

  useEffect(() => {
    if (user && !userData){
      getUserDoc(user.email)
    }
  }, [user, userData])

  useEffect(() => {}, [userDoc])

  async function getUserDoc(email: any){
    await fetch(`https://daynotes-client.vercel.app/api/users?email=${email}`)
      .then(response => response.json())
      .then(data => { 
        setUserData(data.data);
    });
  }

  return(
    <nav className="pt-4 pb-3 px-6 sm:px-12 flex justify-between items-center">
      <Link href={`/`}>
        <div className="cursor-pointer flex justify-center items-center">
          <Image
            src={"/daynotes-logo.png"}
            alt="DayNotes logo"
            width={740}
            height={149}
            className="mt-2 w-[125px] sm:w-[150px]"
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
          user !== undefined && (
            <Link href={`/${user.email}/${today}`}>
              <li className={liStyle}>
                Today
              </li>
            </Link>
          )
        }
        {
          user ?
            <Link href={`/${user.email}/notes`}>
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
          user && userData ?
          <Link href={`/${user.nickname}`}>
            <li className="cursor-pointer ml-1 px-3 sm:px-3 pt-2">
              <div className="hover:drop-shadow-md bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer w-[30px] h-[30px] rounded-full flex justify-center items-center">
                <Image
                  src={`/user-icons${userData.userImage}`}
                  alt="User profile icon"
                  width={448}
                  height={512}
                  className="w-1/2 invert"
                />
              </div>
            </li>
          </Link>

          :
          <Link href={`/api/auth/login`} data-testid="login">
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
