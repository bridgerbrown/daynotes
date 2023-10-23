import React from "react"
import Image from "next/image"
import getUserData from "@/data/getUserData";
import Cookies from "js-cookie";

function UserImage(props: any){
  const { email, userId, editImage, setEditImage, image, isLoading, setIsLoading, setSubmittedImage } = props;
  const imageCss: string = `mx-2 bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[125px] h-[125px] rounded-full flex justify-center items-center`;
  const editImageCss: string = `mb-4 mx-2 bg-blue-700 hover:opacity-100 opacity-90 transition-opacity cursor-pointer drop-shadow-md w-[75px] h-[75px] rounded-full flex justify-center items-center`;
  
  const submitImage = () => {
    if (editImage) {
      updateUserImage(email, userId, image);
      setEditImage(false)
    } else {
      setEditImage(false)
    }
  };

  async function updateUserImage(userEmail: string, userId: string, newImage: string){
    try {
      const accessToken = Cookies.get('jwt');
      const response = await fetch(`/api/user?userEmail=${userEmail}&userId=${userId}&newImage=${newImage}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data.message);
        setIsLoading(false);
        getUserData(userEmail, userId);
      } else {
        const data = await response.json();
        console.error(`Error updating user data, ${data.message}`)
      }
    } catch (err) {
      console.error(err);
    }
  };

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
            onClick={submitImage}
          />
          :
          <div className='flex justify-center items-center w-1/2'>
            <Image
              src={"/spinner.png"}
              alt="Loading spinner"
              width={50}
              height={50}
              className='animate-spin invert'
            />
          </div>
      }
    </div>
  )
};

export default UserImage;
