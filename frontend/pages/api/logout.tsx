import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    const response = await fetch("https://daynotes-server.onrender.com/logout", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.status === 200) {
      res.status(200).json({ message: 'Logged out successfully' });
    } else if (response.status === 404) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(response.status).json({ message: 'Error during logout' });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}
