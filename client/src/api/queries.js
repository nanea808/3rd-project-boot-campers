import { gql } from '@apollo/client';

// query on unclaimed tasks for the homepage task feed
export const QUERY_UNCLAIMED_TASKS = gql`
  query getUnclaimedTasks {
    tasks (assignedUser: null) {
        taskAuthor
        taskName
        description
        currentFunding
    }
  }
`;