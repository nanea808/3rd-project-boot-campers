const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  // to add: profile picture through GridFS
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

  // for a refund function, tasks need to track users who have donated and how much they have donated.
  // that way, if a task is completed poorly or expires after a certain length of time, the donating users can be re-issued their funds.
  tasks: [
    {
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
      assignedUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
    },
  ],
  // assignedTasks: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Task',
  //     default: null
  //   }
  // ]
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
