const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var options = { useNewUrlParser: true, useUnifiedTopology: true };
let db, getAllBooks;

const setUpDB = async () => {
  try {
    let client = await MongoClient.connect(process.env.MONGO_URI, options);
    db = client.db("mydb");
    getAllBooks = () => db.collection("books").find().toArray();
    console.log("Connected to MongoDB 😎");
  } catch (err) {
    console.log(err, "error connecting to MongoDB");
  }
};

app.get("/", (req, res) => {
  getAllBooks()
    .then((books) => {
      res.json({ books });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Couldn't find books" });
    });
});

app.get("/:name", (req, res) => {
  db.collection("books")
    .insertOne({ name: req.params.name })
    .then(async (response) => {
      res.json({ message: `Book ${req.params.name} added successfully` });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Couldn't find books" });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  setUpDB();
  console.log("listening on http://localhost:" + port);
});
