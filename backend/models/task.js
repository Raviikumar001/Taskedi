const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = User;