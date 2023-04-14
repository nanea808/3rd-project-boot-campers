const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  skills: {
    type: [String]
  },

});

// tasks have the following values:
// id
// name
// description
// current funding
// owning user
// assigned user

const Task = model('Task', taskSchema);

module.exports = Task;