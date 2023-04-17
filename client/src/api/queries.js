import { gql } from "@apollo/client";

// query on unclaimed tasks for the homepage task feed
export const QUERY_UNCLAIMED_TASKS = gql`
  query unclaimedTasks {
    unclaimedTasks {
      _id
      assignedUser
      taskAuthor
      taskName
      description
      currentFunding
    }
  }
`;

export const QUERY_WATCHED_TASKS = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      username
      watchedTasks {
        _id
        assignedUser
        taskAuthor
        taskName
        description
        currentFunding
      }
    }
  }
`;

export const QUERY_TASKS = gql`
  query tasks {
    tasks {
      _id
      assignedUser
      taskAuthor
      taskName
      description
      currentFunding
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      description
      skills
      createdTasks
      assignedTasks
      watchedTasks
    }
  }
`;
