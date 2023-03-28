// import clientPromise from "./mongodb";

// export default async function checkUser(username: string) {
//     try {
//         const client = await clientPromise
//         const database = client.db('users-db');
//         const users = database.collection('users');
//         const query = { username: username };
//         const user = await users.findOne(query)
//         if (user) {
//             console.log("user exists")
//         } else {
//             console.log("user doesnt exist")
//             return await users.insertOne({
//                 username: username,
//                 notes: {} 
//             })
//         }
//       } catch {
//         const client = await clientPromise
//         await client.close()
//         console.log("error")
//       }
// }