import React from "react";
import Header from "../components/Header";
// import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";
import Footer from "../components/Footer";

// Import from API
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import {  } from '../api/queries';

function Home() {
  return (
    <main>
      {/* Header */}
      <Header />

      {/* Task Feed */}
      {/* <TaskFeed/> */}

      {/* Saved Tasks */}
      <SavedTasks/>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;