import Image from "next/image";
import React from "react";

export default function NotePreview(props: any){
  return (
    <div className="mx-5 my-6">
      <div className="transition-opacity hover:border-gray-800 hover:drop-shadow-sm cursor-pointer w-[200px] h-[275px] bg-white border-gray-400 border rounded-sm">
      </div>
      <div className="h-10 mx-1 flex justify-between items-center">
        <span></span>
        <h3 className="font-light text-gray-700">
          June 11
        </h3>
        <Image
          src={"/trash-can.png"}
          alt="Delete note icon"
          width={448}
          height={512}
          className="w-4 hover:opacity-70 cursor-pointer transition-opacity opacity-40"
        />
      </div>
    </div>
  )
}
