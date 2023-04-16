const { AuthenticationError } = require('apollo-server-express');
const { User, Task } = require("../models");
// maybe change auth.js to index.js for simple imports
const { signToken } = require('../auth/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate('createdTasks')
      .populate('assignedTasks');
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;
