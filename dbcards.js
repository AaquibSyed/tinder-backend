import { strict } from "assert";
//structure of cards within db
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", cardSchema);
