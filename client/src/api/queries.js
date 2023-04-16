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
