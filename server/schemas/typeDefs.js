const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    description: String
    skills: [String]
    createdTasks: [Task]
    assignedTasks: [Task]
  }

  type Task {
    _id: ID
    taskAuthor: String
    assignedAuthor: String
    taskName: String
    description: String
    currentFunding: String
  }

  type Query {
    users: [User]!
    task: [Task]
  }
`;

module.exports = typeDefs;
