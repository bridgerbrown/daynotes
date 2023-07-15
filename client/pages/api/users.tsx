import clientPromise from "../../lib/mongodb"

export default async function handler(req:any, res:any) {
  try { 
    const client = await clientPromise;
    const db= client.db('daynotes');

    if (req.method === "GET"){
      const { email } = req.query;
      const userDoc = await db.collection("users").findOne({ email: email });

      if (userDoc) {
        res.json({ status: 200, data: userDoc })
      } else {
        res.status(404).json({ status: 404, message: "User not found" });
      }
    } else if (req.method === "PATCH") {
      const { email, newImage } = req.query;
      await db.collection("users").findOneAndUpdate({ email: email}, {$set: { userImage: newImage } });
      res.json({ status: 200, message: "Image changed"})
    } else {
      res.status(405).json({ status: 405, message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
}
