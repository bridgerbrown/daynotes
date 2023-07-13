import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {MongoClient} from "mongodb";
import * as express from "express";
import {createServer} from "http";
import {Server, Socket} from "socket.io";
import * as configs from "../runtimeconfig.json";

admin.initializeApp({
  credential: admin.credential.cert(configs.firebase_config),
});

const client = new MongoClient(configs.mongodb.connection_string);

let database: any;

async function connectToDatabase() {
  if (!database) {
    await client.connect();
    database = client.db('notes-db');
  }
  return database;
}

function isOnlyWhiteSpace(note: string){
  return /^\s*$/.test(note);
}

const app = express();
exports.api = functions.https.onRequest(app);

const server = createServer(app);
const io = new Server(server, {
  cors: {
      origin: "https://daynotes-ebon.vercel.app",
      methods: ["GET", "POST"]
  }
});

io.on("connection", (socket: Socket) => {
  socket.on("get-document", async (userId: string, date: string) => {
    const documentId = `${userId}-${date}`;
    const document = await findOrCreateDocument(documentId, userId, date);
    socket.join(documentId);
    socket.emit('load-document', document.data);

  socket.on("send-changes", (delta: any) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
  });

  socket.on("save-document", async (data: any) => {
      await saveDocument(documentId, data);  
  });

  socket.on("delete-note", async () => {
      await deleteDocument(documentId);
  });

  socket.on("disconnect", async () => {
      const note = await findDocument(documentId);
      if (note && note.data.ops) {
        const noteData = note.data.ops[0].insert;
        if (noteData.length == 1 || isOnlyWhiteSpace(noteData)){
          await deleteDocument(documentId);
        }
      }
    })

  });
});

async function findOrCreateDocument(documentId: string, userId: string, date: string) {
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    let note = await notes.findOne({ documentId: documentId })
    if (note) {
        return note;
    } else {
       note = await notes.findOneAndUpdate(
        { documentId: documentId, userId: userId, date: date },
        { $setOnInsert: { data: {}, lastUpdated: new Date() } },
        { upsert: true, returnOriginal: false }
      );
      return note;
    }
  } catch {
    await client.close();
    console.log("error");
  }
}

async function findDocument(documentId: string){
  try {
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    const note = await notes.findOne({ documentId });
    return note;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function saveDocument(documentId: string, data: any){
    const database = await connectToDatabase();
    const notes = database.collection('notes');
    await notes.findOneAndUpdate({ documentId: documentId }, { $set: { data, lastUpdated: new Date() }})
}

async function deleteDocument(documentId: string){
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
  }
}

exports.socket = functions.https.onRequest(app);
