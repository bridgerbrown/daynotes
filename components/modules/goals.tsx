import React from "react";

export default function Goals(props: any){
    

    return(
        <section className="w-full min-h-32 bg-[#252146] pt-4 border border-[#383163] rounded-md">
            <header className="px-6 border-b border-[#2e2d4e]">
                <h2 className="text-white pb-4 font-semibold tracking-wider text-sm uppercase">
                    Goals
                </h2>
            </header>
            <ol className="bg-[#2c2650] pb-8 pt-4 text-white space-y-1 text-base font-light tracking-wide pl-16 list-decimal">
                <li>
                    Leaning towards vision
                </li>
                <li>
                    Checking tab more in lull states
                </li>
                <li>
                    Midgame pathing as immobile mage
                </li>
            </ol>
        </section>
    )
}