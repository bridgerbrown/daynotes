import clientPromise from "../../lib/mongodb"

export default async function handler(req:any, res:any) {
  try { 
    const client = await clientPromise;
    const usersDb= client.db('users-db');

    if (req.method === "GET"){
      const { email } = req.query;
      const userDoc = await usersDb.collection("users").findOne({ email: email });
      const userId = userDoc?.userId;

      if (userId) {
        res.json({ status: 200, data: userId })
      } else {
        res.status(404).json({ status: 404, message: "User not found" });
      }
    } else {
      res.status(405).json({ status: 405, message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}
