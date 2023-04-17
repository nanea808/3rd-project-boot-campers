import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";

import { QUERY_UNCLAIMED_TASKS } from "../api/queries";
import { QUERY_WATCHED_TASKS } from "../api/queries";

// import { Navigate, useParams } from 'react-router-dom';

function Home() {
  const unclaimedQuery= useQuery(QUERY_UNCLAIMED_TASKS);
  const unclaimedTasks = unclaimedQuery.data?.unclaimedTasks || {};
  // const {userId: userParam} = useParams();
  const userId = "643b9515196f12fe7796060e"


  // temporarily using UserOnes ID 
  const watchedQuery = useQuery(QUERY_WATCHED_TASKS, {
    variables: {userId: userId}
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
      {watchedQuery.loading ? <div>Loading...</div> : <SavedTasks watchedTasks={watchedTasks} />}

      {/* Task Feed */}
      {unclaimedQuery.loading ? <div>Loading...</div> : <TaskFeed unclaimedTasks={unclaimedTasks} />}
    </main>
  );
}

export default Home;
