const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a task name"],
    trim: true,
    maxlength: [120, "Task can not be more than 120 characters"],
  },
  quantity: {
    type: Number,
    trim: true,
    default: 1
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
