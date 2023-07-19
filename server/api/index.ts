import {MongoClient, Db, Collection} from "mongodb";
import {Server, Socket} from "socket.io";
import * as dotenv from "dotenv";
import express, {Request, Response} from "express";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "https://daynotes-client.vercel.app:8080",
    methods: ["GET", "POST"],
  },
});

app.get('/api', (req: Request, res: Response) => {
  res.send('API is running')
  console.log("API is running")
});


interface DeltaStatic {
  ops: {
    attributes: {
      underline: boolean;
      italic: boolean;
      color: string;
      background: string;
      bold: boolean;
    };
    insert: string;
  }[];
}

interface Note {
  documentId: string;
  userId: string;
  date: string;
  data: DeltaStatic;
  lastUpdated: Date;
}

const mongodbstring = process.env.MONGODB_CONNECTION_STRING!;
const client = new MongoClient(mongodbstring);
let database: Db | undefined;

async function connectToDatabase(): Promise<Db> {
  if (!database) {
    await client.connect();
    database = client.db("daynotes");
  }
  return database;
}

function isOnlyWhiteSpace(note: string): boolean {
  return /^\s*$/.test(note);
}


io.on("connection", (socket: Socket) => {
  socket.on("get-document", async (userId: string, date: string) => {
    const documentId = `${userId}-${date}`;
    const document: Note = await findOrCreateDocument(documentId, userId, date);
    console.log("Socket event received:", documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta: DeltaStatic) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data: DeltaStatic) => {
      await saveDocument(documentId, data);
    });

    socket.on("delete-note", async () => {
      await deleteDocument(documentId);
    });

    socket.on("disconnect", async () => {
      const note: Note = await findDocument(documentId);
      if (note && note.data.ops) {
        const noteData = note.data.ops[0].insert;
        if (noteData.length === 1 || isOnlyWhiteSpace(noteData)) {
          await deleteDocument(documentId);
        }
      }
    });
  });
});

async function findOrCreateDocument(
  documentId: string,
  userId: string,
  date: string
): Promise<Note> {
  try {
    const database = await connectToDatabase();
    const notes: Collection<Note> = database.collection("notes");
    let note: Note | null = await notes.findOne({documentId: documentId});
    if (note) {
      return note;
    } else {
      const emptyDelta: DeltaStatic = {ops: []};
      const updateResult = await notes.findOneAndUpdate(
        {documentId: documentId, userId: userId, date: date},
        {$setOnInsert: {data: emptyDelta, lastUpdated: new Date()}},
        {upsert: true, returnDocument: "after"}
      );
      note = updateResult.value as Note;
      return note;
    }
  } catch (error) {
    await client.close();
    console.log("error", error);
    throw error;
  }
}

async function findDocument(documentId: string): Promise<Note> {
  try {
    const database = await connectToDatabase();
    const notes: Collection<Note> = database.collection("notes");
    const note: Note | null = await notes.findOne({documentId});
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

async function saveDocument(
  documentId: string, data: DeltaStatic ): Promise<void> {
  const database = await connectToDatabase();
  const notes: Collection<Note> = database.collection("notes");
  await notes.findOneAndUpdate(
    {documentId: documentId},
    {$set: {data, lastUpdated: new Date()}}
  );
}

async function deleteDocument(documentId: string): Promise<void> {
  try {
    const database = await connectToDatabase();
    const notes: Collection<Note> = database.collection("notes");
    const note = await notes.findOne({documentId: documentId});
    if (note) {
      await notes.deleteOne({documentId: documentId});
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { app, io };
