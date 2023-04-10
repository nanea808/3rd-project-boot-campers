const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
  },
  // Mutation: {
  // },
};

module.exports = resolvers;
