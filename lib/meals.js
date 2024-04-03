import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://rohitsaroha125:qwerty123@cluster0.1n1pyh6.mongodb.net/";

let dbConnection;

async function connectToDb() {
  if (!dbConnection) {
    console.log("Connect to db");
    const client = await MongoClient.connect(uri);
    const db = client.db("test");
    dbConnection = db;
  }
  return dbConnection;
}

export async function getMeals() {
  const db = await connectToDb();
  const data = await db.collection("meals").find({}).toArray();
  return data;
}

export async function getMeal(slug) {
  const db = await connectToDb();
  const data = await db.collection("meals").findOne({ slug });
  return data;
}
