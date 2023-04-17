const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  // to add: profile picture through GridFS.
  // to add: funding users for tasks to allow for refunds. Includes properties for user ID and amount donated.
  firstName: {
    type: String,
    required: "We require at least a mononym.",
  },
  lastName: {
    type: String
  },
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
    type: String,
  },
  skills: {
    type: [String],
    default: [],
  },
  createdTasks: [ 
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  assignedTasks: [ 
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  watchedTasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  fundedTasks: [
    {
      type: Schema.Types.ObjectId, 
      ref: 'Task'
      // fundedTask: {
      //   type: Schema.Types.ObjectId, 
      //   ref: 'Task'
      // },
      // funding: {
      //   type: String
      // }
    }
  ]
});

// hash passwords
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// validate password method
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
