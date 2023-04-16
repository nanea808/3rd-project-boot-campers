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
    watchedTasks: [Task]
  }

  type Task {
    _id: ID
    taskAuthor: String
    assignedUser: String
    taskName: String
    description: String
    currentFunding: String
    watchingUsers: [String]
  }

  type Query {
    users: [User]!
    tasks: [Task]!
    unclaimedTasks: [Task]
    user(userId: ID!): [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, firstName: String!): Auth
    login(email: String!, password: String!): Auth
    addTask(taskName: String!, description: String!): Task
  }
`;

module.exports = typeDefs;
