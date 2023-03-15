import React from "react";

export default function GameCard(props: any){
    return(
        <div className="w-gameCard h-24 bg-blue-500 rounded-lg">
            <div>
                <h3>
                    Ranked Solo
                </h3>
                <p>
                    10h ago
                </p>
                <h2>WIN</h2>
                <p>
                    24:47
                </p>
            </div>
        </div>
    )
}