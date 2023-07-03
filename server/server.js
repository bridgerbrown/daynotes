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
    console.log("getting document...")
    const document = await findOrCreateDocument(userId, date);
    socket.join(userId);
    socket.emit('load-document', document.data);

  socket.on("send-changes", delta => {
      console.log("sending changes...")
      socket.broadcast.to(userId).emit("receive-changes", delta)
  })

  socket.on("save-document", async data => {
      await client.connect()
      const database = client.db('notes-db');
      const notes = database.collection('notes');
      await notes.findOneAndUpdate({ userId: userId, date: date }, { $set: { data }})
    })

  socket.on("delete-note", async (userId, date) => {
      await deleteDocument(userId, date);
    })

  socket.on("disconnect", async (userId, date) => {
      const note = await findDocument(userId, date);
      if (note) {
        const noteData = note.data.ops[0].insert;
        if (noteData.length == 1 || isOnlyWhiteSpace(noteData)){
          await deleteDocument(userId, date);
        } else {
          console.log("valid note")
        }
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
        console.log("note exists")
        return note
    } else {
        console.log("note doesnt exist")
        await notes.updateOne(
          { userId: userId, date: date },
          { $set: { data: {} } },
          { upsert: true }
        );
        note = await notes.findOne({ userId: userId, date: date });
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
