import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const refreshToken = req.query.refreshToken as string;
      const accessToken = req.headers.authorization?.replace('Bearer ', '');
      if (!refreshToken) {
        return res.status(400).json({ message: 'Refresh token is required' });
      }

      const response = await fetch("https://daynotes-server.onrender.com/refresh", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.status === 200) {
        try {
          const refreshResponse = await response.json();
          res.status(200).json({ message: "Successfully refreshed access token" });
        } catch (err) {
          console.error("Error parsing JSON:", err);
          res.status(500).json({ message: "Error parsing JSON response" });
        }
      } else if (response.status === 404) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(response.status).json({ message: 'Error refreshing access token' });
      }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ message: "Internal server error" });
        return [];
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}
