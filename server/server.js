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

  socket.on("send-changes", async (userId, date, delta) => {
    socket.broadcast.to(userId).emit("receive-changes", delta)
    await updateLastUpdated(userId, date);
  })

  socket.on("save-document", async (userId, date, data) => {
    await updateDocument(userId, date, data)
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
    const existingNote = await notes.findOne({ userId: userId, date: date })

    if (existingNote) {
        return existingNote
    } else {
        console.log("note doesnt exist")
        await notes.updateOne(
          { userId: userId, date: date, lastUpdated: new Date() },
          { $set: { data: {} }},
          { upsert: true }
        );
        let note = await notes.findOne({ userId: userId, date: date });
        return note;
    };
  } catch {
    await client.close()
    console.log("error")
  };
};

async function updateLastUpdated(userId, date) {
  await client.connect();
  const database = client.db('notes-db');
  const notes = database.collection('notes');
  await notes.updateOne(
    { userId, date },
    { $set: { lastUpdated: new Date() } }
  );
}

async function updateDocument(userId, date, data) {
  await client.connect();
  const database = client.db('notes-db');
  const notes = database.collection('notes');
  await notes.updateOne(
    { userId, date },
    { $set: { data } }
  );
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
  };
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
