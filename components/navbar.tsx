import React from "react"

export default function Navbar(){
    return(
        <nav className="py-6 px-8 text-white flex justify-between">
            <h1 className="text-3xl font-bold tracking-wide">
                gNotes
            </h1>
            <ul className="pt-1 flex space-x-8 text-lg">
                <li>
                    Home
                </li>
                <li>
                    Daily
                </li>
                <li>
                    Monthly
                </li>
                <li>
                    User
                </li>
            </ul>
        </nav>
    )
}