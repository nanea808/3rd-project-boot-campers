const { User, Task } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate('createdTasks')
      .populate('assignedTasks')
      .populate('watchedTasks');
    },
    tasks: async () => {
      return Task.find();
    },
    unclaimedTasks: async () => {
      const params = {assignedUser: null};
      return Task.find(params);
    },
    watchedTasks: async (parent, userId) => {
      const params = {_id: userId};
      return Task.find(params);
    }
  },
  // Mutation: {
  // },
};

module.exports = resolvers;
