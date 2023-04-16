import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";

import { QUERY_UNCLAIMED_TASKS } from "../api/queries";
import { QUERY_WATCHED_TASKS } from "../api/queries";

// Import from API
// import { Navigate, useParams } from 'react-router-dom';

function Home() {
  const { loading_unclaimed, data_unclaimed } = useQuery(QUERY_UNCLAIMED_TASKS);
  const unclaimedTasks = data_unclaimed?.unclaimedTasks || {};


  // temporarily using UserOnes ID 
  const { loading_watched, data_watched } = useQuery(QUERY_WATCHED_TASKS, {
    variables: {userId: "643b9515196f12fe7796060e"}
  });
  const watchedTasks = data_watched?.watchedTasks || {};

  if (loading_unclaimed || loading_watched) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Header */}
      <Header />

      {/* Saved Tasks */}
      {loading_watched ? <div>Loading...</div> : <SavedTasks watchedTasks={watchedTasks} />}

      {/* Task Feed */}
      {loading_unclaimed ? <div>Loading...</div> : <TaskFeed unclaimedTasks={unclaimedTasks} />}
    </main>
  );
}

export default Home;
