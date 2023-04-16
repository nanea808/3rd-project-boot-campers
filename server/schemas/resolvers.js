const { User, Task } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate('createdTasks')
      .populate('assignedTasks');
    },
    tasks: async () => {
      return Task.find();
    },
    unclaimedTasks: async () => {
      const params = {assignedUser: null};
      return Task.find(params);
    }
  },
  // Mutation: {
  // },
};

module.exports = resolvers;
