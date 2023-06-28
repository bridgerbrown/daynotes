import Image from "next/image";
import React from "react";

export default function NotePreview(props: any){
  const { note } = props;
  const noteObj = JSON.stringify(note.data.ops);

  const noteData = () => {
    let noteText;
    const regex = /^\[{"insert":"|"\}\]\n$/;
    if(noteObj){
      noteText = noteObj.slice('[{"insert":"'.length, -'\\n"}]'.length);
    } else {
      noteText = "";
    }
    return noteText;
  };

  console.log(noteData())
  return (
    <div className="mr-6 mb-3">
      <div className="opacity-70 hover:opacity-100 bg-white hover:drop-shadow-md drop-shadow-sm cursor-pointer w-[200px] h-[275px] border-gray-400 border rounded-md">
        <p className="text-blackHeading/80 text-sm font-light py-3 px-3">
          {noteData()}
        </p>
      </div>
      <div className="h-10 mx-1 flex justify-center items-center">
        <h3 className="text-blackHeading">
          June 11, 2023
        </h3>
      </div>
    </div>
  )
}
