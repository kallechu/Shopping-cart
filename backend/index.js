const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const List = require("./models/list");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT

app.get("/api/lists", async (request, response) => {
  try {
    const lists = await List.find({});
    response.json(lists);
  } catch (error) {
    return response.status(500).json({error: "error fetching lists"})
  }
  
});

app.post("/api/lists", async (request, response) => {
  const body = request.body;

  try {
    const list = new List({
      items: body.items,
    });

    const savedList = await list.save();
    response.status(201).json(savedList);
  } catch (error) {
    return response.status(400).json({ error: "error posting list" });
  }
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
