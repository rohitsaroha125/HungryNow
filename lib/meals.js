import { MongoClient } from "mongodb";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

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

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("Saving File Failed");
    }
  });

  meal.image = `/images/${fileName}`;

  const db = await connectToDb();
  const result = await db.collection("meals").insertOne(meal);
  if (result) {
    return true;
  }
  return false;
}
