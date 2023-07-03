import clientPromise from "../../lib/mongodb"

export default async function handler(req:any, res:any) {
  const client = await clientPromise;
  const database = client.db('notes-db');
  if (req.method === "GET"){
    const { userId } = req.query;
    const allUsersNotes = await database.collection("notes").find({ userId }).toArray();
    res.json({ status: 200, data: allUsersNotes })
  } else if (req.method === "DELETE"){
    const { userId, date } = req.body;
    try {
      await database.collection("notes").deleteOne({ userId: userId, date: date })
    } catch (error) {
      console.error("Error:", error)
    }
  } else {
    res.status(405).json({ status: 405, message: "Method not allowed"})
  }
}
