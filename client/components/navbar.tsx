import React from "react"

export default function Navbar(){
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
                    Today
                </li>
                <li>
                    Calendar
                </li>
                <li>
                    User
                </li>
            </ul>
        </nav>
    )
}