import Image from "next/image";
import React from "react";
import { format } from "date-fns";

export default function NotePreview(props: any){
  const { note } = props;
  const noteObj = JSON.stringify(note.data.ops);

  const noteData = () => {
    let noteText;
    const regex = /^\[{"insert":"|"\}\]\n$/;
    if(noteObj){
      noteText = noteObj.slice('[{"insert":"'.length, -'\\n"}]'.length);
    } else {
      noteText = "hhhhhhhhhhhhhhhhhhhhhhhhhhhphhhhhh hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhphhhhhh hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhphhhhhh hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhphhhhhh hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhphhhhhh hhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhh hhhhhhhhh";
    } 
    return noteText;
  };

  console.log(noteData())
  return (
    <div className="mr-6 mb-3">
      <div className="w-[200px] h-[275px] opacity-70 hover:opacity-100 bg-white hover:drop-shadow-md drop-shadow-sm cursor-pointer border-gray-400 border rounded-md">
        <p className="h-[250px] text-ellipsis overflow-hidden overflow-y-hidden text-blackHeading/80 text-sm font-light py-3 px-3">
          {noteData()}
        </p>
      </div>
      <div className="h-10 mx-1 flex justify-center items-center">
        <h3 className="text-blackHeading font-light">
          {format(( new Date(note.date)), 'LLLL d, yyyy')}
        </h3>
      </div>
    </div>
  )
}
