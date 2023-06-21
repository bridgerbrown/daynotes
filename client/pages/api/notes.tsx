import clientPromise from "../../lib/mongodb"

export default async function handler(req:any, res:any) {
  const client = await clientPromise;
  const database = client.db('notes-db');
  if (req.method === "GET"){
    const { userId } = req.query;
    const allUsersNotes = await database.collection("notes").find({ userId }).toArray();
    res.json({ status: 200, data: allUsersNotes })
  }
}
