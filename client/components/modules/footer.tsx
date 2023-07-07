import React from "react";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="opacity-100 py-12 px-8 absolute bottom-0 w-screen flex justify-center">
          <div className="flex justify-center items-center">
            <Image
              src={"/note.png"}
              alt="Note icon"
              width={448}
              height={448}
              className="w-4 sm:w-5 mr-2 opacity-80"
            />
            <h1 className="text-blackHeading text-lg sm:text-xl font-regular tracking-wide">
                <span className="">DayNotes</span>
            </h1>
          </div>
        </footer>
    )
}
