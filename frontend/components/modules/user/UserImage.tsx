import React from "react"
import Image from "next/image"
import updateUserImage from "@/data/updateUserImage";
import Loading from "../Loading";

function UserImage(props: any){
  const { editImage, image, submitImage } = props;
  const imageCss: string = `mx-2 bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[125px] h-[125px] rounded-full flex justify-center items-center`;
  const editImageCss: string = `mb-4 mx-2 bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[75px] h-[75px] rounded-full flex justify-center items-center`;

  return (
    <div className={editImage ? editImageCss : imageCss}>
      {
        image ?
          <Image
            src={`/user-icons${image}`}
            alt="User image"
            width={448}
            height={512}
            className='w-1/2 opacity-100 invert'
            onClick={() => submitImage(image)}
          />
          :
          <div className="w-1/2">
            <Loading />
          </div>
      }
    </div>
  )
};

export default UserImage;
