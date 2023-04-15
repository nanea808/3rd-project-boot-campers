const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    taskAuthor: {
        type: String,
        required: true,
        trim: true
    },
    assignedUser: {
        type: String,
        required: true,
        trim: true
    },
    taskName: {
      type: String,
      required: "Your task needs a title!",
      unique: true,
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
    // assignedUser: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   default: null,
    // },
  });

  const Task = model('Task', taskSchema);
  module.exports = Task;