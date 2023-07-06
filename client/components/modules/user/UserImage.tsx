import React from "react"
import Image from "next/image"

function UserImage(props: any){
  const { image, editImage, setEditImage } = props;
  const imageCss: string = `mx-2 bg-gray-900 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[125px] h-[125px] rounded-full flex justify-center items-center`;
  const editImageCss: string = `mb-4 mx-2 bg-gray-900 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[75px] h-[75px] rounded-full flex justify-center items-center`;

  return (
    <div className={editImage ? editImageCss : imageCss}>
      <Image
        src={`/user-icons${image}`}
        alt="User image"
        width={448}
        height={512}
        className='w-1/2 opacity-100 invert'
        onClick={editImage ? null : setEditImage(false)}
      />
    </div>
  )
};

export default UserImage;
