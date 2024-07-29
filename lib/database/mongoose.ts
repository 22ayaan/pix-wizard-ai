import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Connected to MongoDB");
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error("MONGODB_URL not found in environment variables");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "PixWiz",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  console.log("Connected to MongoDB");
  return cached.conn;
};
