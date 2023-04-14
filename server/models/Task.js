const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: 'Your task needs a title!',
    unique: true,
  },
  description: {
    type: String,
    required: 'Your task needs a description!',
  },
  currentFunding: {
    type: Number,
    default: 0.00,
    min: 0.00
  }
});

// owning user
// assigned user

const Task = model('Task', taskSchema);

module.exports = Task;