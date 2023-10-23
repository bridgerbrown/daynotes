import Image from "next/image"

export default function Loading(props: any) {
  const { dimensions, invert } = props;
  return (
    <div className='flex justify-center items-center w-full'>
      <Image
        src={"/spinner.png"}
        alt="Loading spinner"
        width={dimensions}
        height={dimensions}
        className={ invert ? "animate-spin invert" : "animate-spin opacity-80" }
      />
    </div>
  )
}
