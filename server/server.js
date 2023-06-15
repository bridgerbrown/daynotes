require('dotenv').config()
const { MongoClient } = require("mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)


const io = require('socket.io')(3001, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
})

io.on("connection", socket => {
    socket.on("get-document", async (documentId, email, date) => {
        const document = await findOrCreateDocument(documentId, email, date);
        socket.join(documentId);
        socket.emit('load-document', document.data);

    socket.on("send-changes", delta => {
        socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
        await client.connect()
        const database = client.db('notes-db');
        const notes = database.collection('notes');
        await notes.findOneAndUpdate({ name: documentId, email: email, date: date }, { $set: { data }})
        })
    })
})

async function findOrCreateDocument(id, email, date) {
    try {
        await client.connect()
        const database = client.db('notes-db');
        const notes = database.collection('notes');
        const note = await notes.findOne({ name: id })
        if (note) {
            console.log("note exists")
            return note
        } else {
            console.log("note doesnt exist")
            return await notes.insertOne({ name: id, email: email, data: {}, date: date })
        }
      } catch {
        await client.close()
        console.log("error")
      }
}


