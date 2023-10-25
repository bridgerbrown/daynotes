import getUserData from "@/data/getUserData";
import Cookies from "js-cookie";

export default async function updateUserImage(userEmail: string, userId: string, newImage: string){
  try {
    const accessToken = Cookies.get('accessToken');
    const refreshToken = Cookies.get('refreshToken');

    const response = await fetch(`/api/user?userEmail=${userEmail}&userId=${userId}&newImage=${newImage}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data.message);
      getUserData(userEmail, userId);
    } else {
      const data = await response.json();
      console.error(`Error updating user data, ${data.message}`)
    }
  } catch (err) {
    console.error(err);
  }
};
