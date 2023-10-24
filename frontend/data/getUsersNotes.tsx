import Cookies from 'js-cookie';
import { useNotes } from './context/NotesContext';

export default async function getNotesData(userEmail: string, userId: string) {
  try {
    const accessToken = Cookies.get('accessToken');
    const response = await fetch(`/api/notes?userEmail=${userEmail}&userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.usersNotes;
  } catch (err) {
    console.log(err);
  }
}; 
