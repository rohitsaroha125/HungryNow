import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://rohitsaroha125:qwerty123@cluster0.1n1pyh6.mongodb.net/";

export async function getMeals() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timeout executed");
    }, 2000);
  });

  const client = await MongoClient.connect(uri);
  const db = client.db("test");
  const data = await db.collection("meals").find({}).toArray();
  return data;
}
