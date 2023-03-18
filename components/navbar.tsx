import React from "react"

export default function Navbar(){
    return(
        <nav className="py-6 px-8 text-slate-900 flex justify-between">
            <h1 className="text-slate-900 text-3xl font-bold tracking-wide">
                LeagueNotes
            </h1>
            <ul className="text-slate-900 font-light pt-1 flex space-x-8 text-lg">
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