import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return handleGetRequest(req, res);
  } else if (req.method === 'PATCH') {
    return handlePatchRequest(req, res);
  } else {
    res.status(405).end('Method Not Allowed');
  }
}

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userEmail = req.query.userEmail as string;
    const userId = req.query.userId as string;
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    if (!userEmail) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const response = await fetch(`http://localhost:10000/user?email=${userEmail}&userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.status === 200) {
      try {
        const userData = await response.json();
        res.status(200).json(userData);
        return userData;
      } catch (err) {
        console.error("Error parsing JSON:", err);
        res.status(500).json({ message: "Error parsing JSON response" });
      }
    } else if (response.status === 404) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(response.status).json({ message: 'Error fetching user data' });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
    return [];
  }
}

async function handlePatchRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userEmail, userId, newImage } = req.body;
    const accessToken = req.headers.authorization?.replace('Bearer ', '');
    if (!userEmail || !userId) {
      return res.status(400).json({ message: 'User info is required' });
    }
    const response = await fetch(`http://localhost:10000/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ userEmail, userId, newImage }), 
    });

    if (response.status === 200) {
      try {
        const userData = await response.json();
        res.status(200).json(userData);
      } catch (err) {
        console.error("Error parsing JSON:", err);
        res.status(500).json({ message: "Error parsing JSON response" });
      }
    } else if (response.status === 404) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(response.status).json({ message: 'Error fetching user data' });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}
