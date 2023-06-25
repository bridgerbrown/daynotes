require('dotenv').config()
const { MongoClient } = require("mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

function isOnlyWhiteSpace(note){
  return /^\s*$/.test(note);
}

const io = require('socket.io')(3001, {
  cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
  },
})

io.on("connection", socket => {
  socket.on("get-document", async (userId, date) => {
    const document = await findOrCreateDocument(userId, date);
    socket.join(userId);
    socket.emit('load-document', document.data);

  socket.on("send-changes", delta => {
      socket.broadcast.to(userId).emit("receive-changes", delta)
  })

  socket.on("save-document", async data => {
      await client.connect()
      const database = client.db('notes-db');
      const notes = database.collection('notes');
      await notes.findOneAndUpdate({ userId: userId, date: date }, { $set: { data }})
    })

  socket.on("disconnect", async () => {
      const note = await findDocument(userId, date);
      const noteData = note.data.ops[0].insert;
      if (noteData.length == 1 || isOnlyWhiteSpace(noteData)){
        await deleteDocument(userId, date);
      }
    })
  })
})

async function findOrCreateDocument(userId, date) {
  try {
    await client.connect();
    const database = client.db('notes-db');
    const notes = database.collection('notes');
    let note = await notes.findOne({ userId: userId, date: date })
    if (note) {
        return note
    } else {
        note = await notes.insertOne({ userId: userId, date: date, data: {}})
        return note
    }
  } catch {
    await client.close()
    console.log("error")
  }
}

async function findDocument(userId, date){
  try {
    await client.connect();
    const database = client.db('notes-db');
    const notes = database.collection('notes');
    const note = await notes.findOne({ userId: userId, date: date });
    return note;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

async function deleteDocument(userId, date){
  try {
    await client.connect();
    const database = client.db('notes-db');
    const notes = database.collection('notes');
    await notes.deleteOne({ userId: userId, date: date });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
