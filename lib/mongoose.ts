import mongoose, { type Mongoose } from "mongoose";
import logger from "./logger";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    logger.info("Using cached MongoDB connection");
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: process.env.MONGODB_DB_NAME || "devflow",
      })
      .then((result) => {
        logger.info("Connected to MongoDB successfully");
        return result;
      })
      .catch((error) => {
        logger.error("Failed to connect to MongoDB", error);
        throw error;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
