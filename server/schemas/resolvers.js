const { User, Task } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .populate('createdTasks')
      .populate('assignedTasks');
    },
    task: async (parent, { taskId }) => {
      return Task.findOne({ _id: taskId });
    },
  },
  // Mutation: {
  // },
};

module.exports = resolvers;
