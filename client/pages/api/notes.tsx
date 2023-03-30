import clientPromise from "../../lib/mongodb"

export default async function handler(req:any, res:any) {
    const client = await clientPromise;
    const database = client.db('notes-db');
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newNoteDirectory = await database.collection('notes').insertOne(bodyObject);
        break;
      case "GET":
        const allNotes = await database.collection("notes").find({}).toArray();
          res.json({ status: 200, data: allNotes })
        break;
    }
}