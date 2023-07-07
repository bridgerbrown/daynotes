import Image from "next/image";
import React, { useState } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NotePreview(props: any){
  const { usersEmail, note, setDeleteConfirmed } = props;
  const router = useRouter();
  const noteObj = JSON.stringify(note.data.ops);
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);

  function extractNoteData(inputString: string): string {
    const pattern = /"insert":"([^"]*?)(?:\\n"|\\n})|[^"]*?"insert":"([^"]*)"/g;
    const matches = inputString.match(pattern);
    const extractedText: string[] = [];
    if (matches) {
      for (const match of matches) {
        const capturedText = match.match(/"insert":"([^"]*)/);
        if (capturedText) {
          const text = capturedText[1].replace(/\\n/g, '');
          extractedText.push(text);
        }
      }
    }
    return extractedText.join(' ');
  }
  console.log(extractNoteData(noteObj))
  console.log(noteObj)

  async function deleteSelectedNote(userId: string, date: string){
    await fetch("/api/notes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userId, date}),
    })
    .then(() => {
      console.log("Note deleted")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="group mr-6 mb-3">
        {
          deleteConfirmation ?
          <div></div>
          :
          <div className="absolute">
            <Image
              src={"/circle-xmark.png"}
              alt="Delete note icon"
              width={512}
              height={512}
              className="hover:opacity-90 opacity-70 cursor-pointer group-hover:block relative hidden w-6 h-6 z-30 bottom-2.5 left-[185px] rounded-full"
              onClick={() => setDeleteConfirmation(true)}
            />
            <div className="group-hover:block relative hidden bg-boxBg rounded-full bottom-[34px] z-20 left-[185px] w-6 h-6">
            </div>
          </div>
        }
        <div 
          className="w-[200px] h-[275px] opacity-100 hover:opacity-100 bg-white hover:drop-shadow-md drop-shadow-sm cursor-pointer hover:border-gray-500 border-gray-400 border rounded-md"
          onClick={() => deleteConfirmation ? null : router.push(`/${usersEmail}/${note.date}`)}
        >
          <p className="h-[250px] text-ellipsis overflow-hidden overflow-y-hidden opacity-70 hover:opacity-100 transition-opacity text-blackHeading text-sm font-light py-3 px-3">
            {
              deleteConfirmation ?
              <div className='flex flex-col mt-12 justify-start items-center'>
                <p className='mb-4 text-blackHeading font-thin text-sm'>
                  Delete note?
                </p>
                <div className="flex justify-between items-center space-x-8">
                  <Image
                    src={'/check.png'}
                    width={448}
                    height={304}
                    alt="Confirmation icon"
                    className='w-5 h-fit cursor-pointer opacity-40 hover:opacity-90 transition-opacity'
                    onClick={() => {
                      setDeleteConfirmation(false);
                      deleteSelectedNote(note.userId, note.date);
                      setDeleteConfirmed(true);
                    }}
                  />
                  <Image
                    src={'/x.png'}
                    width={448}
                    height={448}
                    alt="Cancellation icon"
                    className='w-4 h-fit cursor-pointer opacity-40 hover:opacity-90 transition-opacity'
                    onClick={() => setDeleteConfirmation(false)}
                  />
                </div>
              </div>
              :
              extractNoteData(noteObj)
            }
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
