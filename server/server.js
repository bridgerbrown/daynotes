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

io.on("connection", socket => {
  socket.on("get-document", async (userId, date) => {
    const document = await findOrCreateDocument(userId, date);
    socket.join(userId);
    socket.emit('load-document', document.data);

  socket.on("send-changes", delta => {
      socket.broadcast.to(userId).emit("receive-changes", delta)
  })

  socket.on("save-document", async data => {
      const database = await connectToDatabase();
      const notes = database.collection('notes');
      await notes.findOneAndUpdate({ userId: userId, date: date }, { $set: { data, lastUpdated: new Date() }})
    })

  socket.on("delete-note", async (userId, date) => {
      await deleteDocument(userId, date);
    })

  socket.on("disconnect", async (userId, date) => {
      await deleteBlankDocument(userId, date);
    })
  })
})

async function findOrCreateDocument(userId, date) {
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    let note = await notes.findOne({ userId: userId, date: date })
    if (note) {
        return note;
    } else {
       let note = await notes.findOneAndUpdate(
        { userId: userId, date: date },
        { $setOnInsert: { data: {}, lastUpdated: new Date() } },
        { upsert: true, returnOriginal: false });
      return note;
    }
  } catch {
    await client.close()
    console.log("error")
  }
}

async function deleteBlankDocument(userId, date){
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    const note = await notes.findOne({ userId: userId, date: date });
      if (note) {
        const noteData = note.data.ops[0].insert;
        if (noteData.length == 1 || isOnlyWhiteSpace(noteData)){
          await notes.deleteOne({ userId: userId, date: date });
        } else {
          console.log("valid note")
        }
      }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function deleteDocument(userId, date){
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    const note = await notes.findOne({ userId: userId, date: date });
      if (note) {
        await notes.deleteOne({ userId: userId, date: date });
      }
  } catch (error) {
    console.log(error);
    throw error;
  };
}

