const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a item name"],
    trim: true,
    maxlength: [120, "Task can not be more than 120 characters"],
  },
  quantity: {
    type: Number,
    trim: true,
    default: 1
  },
  cost: {
    type: String,
    required: [true,"Item must have a price"],
    trim: true
  },
});

module.exports = mongoose.model("Item", ItemSchema);
