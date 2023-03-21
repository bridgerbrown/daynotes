import React from "react";

export default function Goals(props: any){
    

    return(
        <section className="shadow-lg w-full min-h-32 bg-moduleHeaderBg pt-4 mt-2 border border-[#383163] rounded-md">
            <header className="pb-4 flex items-center px-6 border-b border-[#2e2d4e]">
                <h2 className="text-white font-semibold tracking-wider text-base uppercase">
                    Goals
                </h2>
                <p className="pl-4 text-[#b3b4ce]/70 text-xs">
                    March 10 - Present
                </p>
            </header>
            <div className="bg-[#2c2650] pt-4 pb-12">
                <ol className="pt-4 text-white space-y-1 text-base font-light tracking-wide pl-16 list-decimal">
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
            </div>
        </section>
    )
}