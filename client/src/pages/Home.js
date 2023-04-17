import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";

import { QUERY_UNCLAIMED_TASKS } from "../api/queries";
import { QUERY_WATCHED_TASKS } from "../api/queries";

import { useAccountContext } from '../context/GlobalState';

function Home() {
  const unclaimedQuery= useQuery(QUERY_UNCLAIMED_TASKS);
  const unclaimedTasks = unclaimedQuery.data?.unclaimedTasks || {};
  // const {userId: userParam} = useParams();
  // const userId = "643b74774cd8e64cc511791b";
  const [state, dispatch] = useAccountContext();

  const watchedQuery = useQuery(QUERY_WATCHED_TASKS, {
    variables: {userId: state.userID}
  });
  const watchedTasks = watchedQuery.data?.user[0].watchedTasks || {};

  if (unclaimedQuery.loading || watchedQuery.loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Header */}
      <Header />

      {/* Saved Tasks */}
      {watchedQuery.loading ? <div>Loading...</div> : <SavedTasks tasks={watchedTasks} />}

      {/* Task Feed */}
      {unclaimedQuery.loading ? <div>Loading...</div> : <TaskFeed tasks={unclaimedTasks} />}
    </main>
  );
}

export default Home;
