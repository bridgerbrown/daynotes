import clientPromise from "../../lib/mongodb"

export default async function handler(req:any, res:any) {
    const client = await clientPromise;
    const database = client.db('users-db');
    switch (req.method) {
      case "POST":
        let bodyObject = JSON.parse(req.body);
        let newUser = await database.collection('users').insertOne(bodyObject);
        break;
      case "GET":
        const allUsers = await database.collection("users").find({}).toArray();
          res.json({ status: 200, data: allUsers })
        break;
    }
}