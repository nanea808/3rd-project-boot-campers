import React from "react";
import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";
import { useQuery } from '@apollo/client';
import { QUERY_UNCLAIMED_TASKS } from '../api/queries';

// Import from API
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import {  } from '../api/queries';

function Home() {
  const {loading, data} = useQuery(QUERY_UNCLAIMED_TASKS);

  const unclaimedTasks = data?.tasks || {};
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {/* Header */}
      <Header />

      {/* Saved Tasks */}
      <SavedTasks/>

      {/* Task Feed */}
      <TaskFeed
        tasks={unclaimedTasks}/>

    </main>
  );
}

export default Home;