const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    taskAuthor: {
        type: String,
        required: true,
        trim: true
    },
    assignedUser: {
        type: String,
        trim: true
    },
    watchingUsers: [
      {type: String}
    ],
    taskName: {
      type: String,
      required: "Your task needs a title!",
      unique: true
    },
    description: {
      type: String,
      required: "Your task needs a description!",
    },
    currentFunding: {
      type: Number,
      default: 0.0,
      min: 0.0,
    },
  });

  const Task = model('Task', taskSchema);
  module.exports = Task;