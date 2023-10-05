import Image from "next/image"

export function FirstNoteDialog() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="border-x-transparent border-t-transparent border-[15px] border-b-blue-500"></div>
      </div>
      <div className="rounded-lg px-6 pt-5 pb-5 max-w-[290px] text-center bg-blue-500 text-white font-light">
        <div className="top-[-12px] left-[247px] relative invert">
          <Image
            src={"/x-regular.png"}
            alt="Close tip, x icon"
            width={9}
            height={9}
            className="absolute cursor-pointer"
          />
        </div>
        <p>
          Click here to make your first note!
        </p>
      </div>
    </div>
  )
}

export function CalendarDialog() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="border-y-transparent border-l-transparent border-[15px] border-r-blue-500"></div>
      </div>
      <div className="rounded-lg px-6 pt-5 pb-5 max-w-[290px] text-center bg-blue-500 text-white font-light">
        <div className="top-[-12px] left-[247px] relative invert">
          <Image
            src={"/x-regular.png"}
            alt="Close tip, x icon"
            width={9}
            height={9}
            className="absolute cursor-pointer"
          />
        </div>
        <p>
          Open the calendar here!
        </p>
      </div>
    </div>
  )
}

export function DeleteDialog() {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-lg px-6 pt-5 pb-5 max-w-[350px] text-center bg-blue-500 text-white font-light">
        <div className="top-[-12px] left-[247px] relative invert">
          <Image
            src={"/x-regular.png"}
            alt="Close tip, x icon"
            width={9}
            height={9}
            className="absolute cursor-pointer"
          />
        </div>
        <p>
          Finally, click here to delete a note!
        </p>
      </div>
      <div>
        <div className="border-y-transparent border-r-transparent border-[15px] border-l-blue-500"></div>
      </div>
    </div>
  )
}
