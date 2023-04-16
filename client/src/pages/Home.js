import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";

import { QUERY_UNCLAIMED_TASKS } from "../api/queries";

// Import from API
// import { Navigate, useParams } from 'react-router-dom';

function Home() {
  const { loading, data } = useQuery(QUERY_UNCLAIMED_TASKS);
  const unclaimedTasks = data?.unclaimedTasks || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Header */}
      <Header />

      {/* Saved Tasks */}
      <SavedTasks />

      {/* Task Feed */}
      {loading ? <div>Loading...</div> : <TaskFeed unclaimedTasks={unclaimedTasks} />}
    </main>
  );
}

export default Home;
