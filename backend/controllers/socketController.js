const { MongoClient } = require("mongodb");
const server = require('../index');

function initializeSocketHandler() {
  const io = require('socket.io')(server, {
    cors: {
      origin: "*:*",
      methods: ["GET", "POST"],
    }
  });

  const mongodbstring = process.env.MONGODB_CONNECTION_STRING;
  const client = new MongoClient(mongodbstring);
  let database;

  async function connectToDatabase() {
    if (!database) {
      await client.connect();
      database = client.db("daynotes");
    }
    return database;
  }

  io.on("connection", (socket) => {
    socket.on("get-document", async (userId, date) => {
      const documentId = `${userId}-${date}`;
      const document = await findOrCreateDocument(documentId, userId, date);
      console.log("Socket event received:", documentId);
      socket.join(documentId);
      socket.emit("load-document", document.data);

        socket.on("send-changes", (delta) => {
          socket.broadcast.to(documentId).emit("receive-changes", delta);
        });

        socket.on("save-document", async (data) => {
          await saveDocument(documentId, data);
        });

        socket.on("delete-note", async () => {
          await deleteDocument(documentId);
        });

        socket.on("disconnect", async () => {
          const note = await findDocument(documentId);
          if (note && note.data.ops) {
            const noteData = note.data.ops[0].insert;
            if (noteData.length === 1 || isOnlyWhiteSpace(noteData)) {
              await deleteDocument(documentId);
            }
          }
        });
      });
    });

  async function findOrCreateDocument(documentId, userId, date) {
    try {
      const database = await connectToDatabase();
      const notes = database.collection("notes");
      let note = await notes.findOne({ documentId: documentId });
      if (note) {
        return note;
      } else {
        const emptyDelta = { ops: [] };
        const updateResult = await notes.findOneAndUpdate(
          { documentId: documentId, userId: userId, date: date },
          { $setOnInsert: { data: emptyDelta, lastUpdated: new Date() } },
          { upsert: true, returnDocument: "after" }
        );
        note = updateResult.value;
        return note;
      }
    } catch (error) {
      await client.close();
      console.log("error", error);
      throw error;
    }
  }

  async function findDocument(documentId) {
    try {
      const database = await connectToDatabase();
      const notes = database.collection("notes");
      const note = await notes.findOne({ documentId });
      if (note) {
        return note;
      } else {
        throw new Error("Note document not found");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function saveDocument(documentId, data) {
    const database = await connectToDatabase();
    const notes = database.collection("notes");
    await notes.findOneAndUpdate(
      { documentId: documentId },
      { $set: { data, lastUpdated: new Date() } }
    );
  }

  async function deleteDocument(documentId) {
    try {
      const database = await connectToDatabase();
      const notes = database.collection("notes");
      const note = await notes.findOne({ documentId: documentId });
      if (note) {
        await notes.deleteOne({ documentId: documentId });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  function isOnlyWhiteSpace(note) {
    return /^\s*$/.test(note);
  }
}

module.exports = initializeSocketHandler;
