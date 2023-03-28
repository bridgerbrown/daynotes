import * as dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_CONNECTION_STRING) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri: any = process.env.MONGODB_CONNECTION_STRING
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise

export async function createNote(documentId: any) {
  try {
    const client = await clientPromise;
    const database = client.db("notes-db");
    const notes = database.collection('notes')
    await notes.insertOne({ _id: documentId, data: "" })

  } catch (e) {
    console.error(e);
} 
}