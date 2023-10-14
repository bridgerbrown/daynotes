import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { email } = req.query;

      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }

      const response = await fetch("http://localhost:10000/user");
      const userData = await response.json();

      if (response.status === 200) {
        res.status(200).json(userData);
      } else if (response.status === 404) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.status(response.status).json({ message: 'Error fetching user data' });
      }
    } else {
      res.status(405).end('Method Not Allowed');
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
}
