const { User, Task } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate('createdTasks')
      .populate('assignedTasks');
    },
  },
  // Mutation: {
  // },
};

module.exports = resolvers;
