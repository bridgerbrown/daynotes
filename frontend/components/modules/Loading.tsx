import Image from "next/image"

export default function Loading() {
  return (
    <div className='flex justify-center items-center w-full'>
      <Image
        src={"/spinner.png"}
        alt="Loading spinner"
        width={50}
        height={50}
        className='animate-spin invert'
      />
    </div>
  )
}
