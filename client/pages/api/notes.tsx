import clientPromise from "../../lib/mongodb";

export default async function handler(req: any, res: any) {
  try { 
    const client = await clientPromise;
    const notesDb = client.db('notes-db');

    if (req.method === "GET"){
      const { userId } = req.query;

      if (userId) {
        const usersNotes = await notesDb.collection("notes").find({ userId }).toArray();
        res.json({ status: 200, data: usersNotes })
      } else {
        res.status(404).json({ status: 404, message: "User not found" });
      }
    } else if (req.method === "DELETE"){
        const { userId, date } = req.body;
        await notesDb.collection("notes").deleteOne({ userId: userId, date: date })
        res.status(204).end();
    } else {
      res.status(405).json({ status: 405, message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}
