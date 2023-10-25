import Cookies from 'js-cookie';
import { useAuth } from './context/AuthContext';

export default async function getUserData(userEmail: string, userId: string) {
  try {
    const accessToken = Cookies.get('accessToken');

    const response = await fetch(`/api/user?userEmail=${userEmail}&userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.user;
  } catch (err) {
    console.log(err);
  }
}; 
