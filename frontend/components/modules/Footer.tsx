import React from "react";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="opacity-100 py-12 px-8 absolute bottom-0 w-screen flex justify-center">
          <div className="flex justify-center items-center">
            <Image
              src={"/daynotes-logo.png"}
              alt="Note icon"
              width={448}
              height={448}
              className="w-28 h-min"
            />
          </div>
        </footer>
    )
}
