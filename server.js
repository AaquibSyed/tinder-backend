import mongoose from "mongoose";
import express from "express";
import cards from "./dbcards.js";
import Cors from "cors";

//App config
const app = express();
const port = process.env.PORT || 8002;
const connection_url =
  "mongodb+srv://admin-tinder:tiNDbXnZLNkwarwd@cluster0.wattf.mongodb.net/tinderdb?retryWrites=true&w=majority";
//midlewares
app.use(express.json());
app.use(Cors());

//config db
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//API endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello Clever programmers");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.delete("/tinder/cards", (req, res) => {
  cards.deleteOne({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listeners
app.listen(port, () => {
  console.log(`listening on Port: ${port}`);
});
