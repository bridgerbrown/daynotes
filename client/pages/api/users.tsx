import clientPromise from "../../lib/mongodb"

export default async (req:any, res:any) => {
    try {
        const client = await clientPromise;
        const database = client.db('users-db');

        const users = await database
            .collection('users')
            .find({})
            .toArray();

        res.json(users)

      } catch (e) {
        console.log(e)
      }
};