import {MongoClient, Db, Collection} from "mongodb";
import {createServer} from "http";
import {Server, Socket} from "socket.io";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

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

const mongodbstring = process.env.MONGODB_CONNECTION_STRING;
const client = new MongoClient(mongodbstring);

let database: Db | undefined;

/**
 * Connect to the MongoDB database
 * @return {Promise<Db>} A promise that resolves to the database connection
 */
async function connectToDatabase(): Promise<Db> {
  if (!database) {
    await client.connect();
    database = client.db("daynotes");
  }
  return database;
}

/**
 * Check if the note contains only whitespace
 * @param {string} note - The note to check
 * @return {boolean} true if the note contains only whitespace, false otherwise
 */
function isOnlyWhiteSpace(note: string): boolean {
  return /^\s*$/.test(note);
}

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "https://daynotes-server.vercel.app/",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

httpServer.on('request', (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

/**
 * Handle socket connection
 * @param {Socket} socket - The socket connection
 */
io.on("connection", (socket: Socket) => {
  /**
   * Handle "get-document" event
   * @param {string} userId - The user ID
   * @param {string} date - The date
   */
  socket.on("get-document", async (userId: string, date: string) => {
    const documentId = `${userId}-${date}`;
    const document: Note = await findOrCreateDocument(documentId, userId, date);
    console.log("Socket event received:", documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    /**
     * Handle "send-changes" event
     * @param {DeltaStatic} delta - The changes to send
     */
    socket.on("send-changes", (delta: DeltaStatic) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    /**
     * Handle "save-document" event
     * @param {DeltaStatic} data - The document data to save
     */
    socket.on("save-document", async (data: DeltaStatic) => {
      await saveDocument(documentId, data);
    });

    /**
     * Handle "delete-note" event
     */
    socket.on("delete-note", async () => {
      await deleteDocument(documentId);
    });

    /**
     * Handle socket disconnection
     */
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

/**
 * Find or create a document
 * @param {string} documentId - The document ID
 * @param {string} userId - The user ID
 * @param {string} date - The date
 * @return {Promise<Note>} A promise that resolves to the found or created
 *  document
 */
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

/**
 * Find a document
 * @param {string} documentId - The document ID
 * @return {Promise<Note>} A promise that resolves to the found document
 */
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

/**
 * Save a document
 * @param {string} documentId - The document ID
 * @param {any} data - The document data to save
 */
async function saveDocument(
  documentId: string, data: DeltaStatic ): Promise<void> {
  const database = await connectToDatabase();
  const notes: Collection<Note> = database.collection("notes");
  await notes.findOneAndUpdate(
    {documentId: documentId},
    {$set: {data, lastUpdated: new Date()}}
  );
}

/**
 * Delete a document
 * @param {string} documentId - The document ID
 */
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

export { httpServer as server, io };
