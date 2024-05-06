const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const boardSchema = new mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
    required: true,
    trim: true,
  },
  lastModified: {
    type: String,
    required: false,
    default: Date.now,
  },
  dateCreated: {
    type: String,
    required: false,
    default: Date.now,
  },
});
const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
