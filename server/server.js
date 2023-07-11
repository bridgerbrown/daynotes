require('dotenv').config()
const { MongoClient } = require("mongodb")
const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING)

let database
async function connectToDatabase() {
  if (!database) {
    await client.connect();
    database = client.db('notes-db');
  }
  return database;
}

function isOnlyWhiteSpace(note){
  return /^\s*$/.test(note);
}

const io = require('socket.io')(3001, {
  cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
  },
})

io.on("connection", (socket) => {
  socket.on("get-document", async (userId, date) => {
    const documentId = `${userId}-${date}`;
    const document = await findOrCreateDocument(documentId, userId, date);
    socket.join(documentId);
    socket.emit('load-document', document.data);

  socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
  })

  socket.on("save-document", async (data) => {
      await saveDocument(documentId, data);  
  })

  socket.on("delete-note", async () => {
      await deleteDocument(documentId);
  })

  socket.on("disconnect", async () => {
      const note = await findDocument(documentId);
      if (note && note.data.ops) {
        const noteData = note.data.ops[0].insert;
        if (noteData.length == 1 || isOnlyWhiteSpace(noteData)){
          await deleteDocument(documentId);
        }
      }
    })
  })
})

async function findOrCreateDocument(documentId, userId, date) {
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    let note = await notes.findOne({ documentId: documentId })
    if (note) {
        return note;
    } else {
       let note = await notes.findOneAndUpdate(
        { documentId: documentId, userId: userId, date: date },
        { $setOnInsert: { data: {}, lastUpdated: new Date() } },
        { upsert: true, returnOriginal: false });
      return note;
    }
  } catch {
    await client.close()
    console.log("error")
  }
}
async function findDocument(documentId){
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    const note = await notes.findOne({ documentId });
    return note;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

async function saveDocument(documentId, data){
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    await notes.findOneAndUpdate({ documentId: documentId }, { $set: { data, lastUpdated: new Date() }})
}

async function deleteDocument(documentId){
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    const note = await notes.findOne({ documentId: documentId });
      if (note) {
        await notes.deleteOne({ documentId: documentId });
      }
  } catch (error) {
    console.log(error);
    throw error;
  };
}

