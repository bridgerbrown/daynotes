import React from "react";

export default function Goals(props: any){
    

    return(
        <section className="shadow-xl w-full min-h-32 bg-moduleHeaderBg pt-4 mt-2 border border-moduleBorder/20 rounded-md">
            <header className="pb-4 flex items-center px-6 border-b border-moduleHeaderBorder/20">
                <h2 className="text-moduleHeader/70 font-semibold tracking-wider text-xl uppercase">
                    Goals
                </h2>
                <p className="pl-4 text-black/50 text-xs">
                    March 10 - Present
                </p>
            </header>
            <div className="pb-12">
                <ol className="bg-moduleContentBg text-black pt-8 pb-8 text-white space-y-1 text-base font-light tracking-wide pl-16 list-decimal">
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