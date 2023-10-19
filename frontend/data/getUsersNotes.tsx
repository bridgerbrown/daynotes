import Cookies from 'js-cookie';
import { useNotes } from './context/NotesContext';

export default async function getNotesData(userEmail: string, userId: string) {
  const { setUsersNotes } = useNotes();
  try {
    const accessToken = Cookies.get('jwt');
    const response = await fetch(`http://localhost:3000/api/notes?userEmail=${userEmail}&userId=${userId}`, {
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
    setUsersNotes(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}; 
