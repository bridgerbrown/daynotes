import React from "react";

export default function LearningObjectives(props: any){
    

    return(
        <div className="pl-6">
            <h2 className="text-sky-800 pb-4 font-semibold tracking-wide text-2xl">
                Learning Objectives
            </h2>
            <ol className="space-y-1 text-base font-light tracking-wide pl-12 list-decimal">
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
    )
}