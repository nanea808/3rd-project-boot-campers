import React from "react";
import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";
import Footer from "../components/Footer";


// Import from API
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import {  } from '../api/queries';

function Home() {
    {/* Header */}
    <Header />

    {/* App Description */}
    <p>
        Welcome to Task-a-saurus, the Community Task Manager! Our mission is simple: connect people in local communities to collaborate and solve the problems they face.
        From landscape cleanup and filling potholes, to repairing plumbing at the townhouse or funding a new park bench, we hope to connect those in need with 
    </p>

    {/* Task Feed */}
    <TaskFeed/>

    {/* Saved Tasks */}
    <SavedTasks/>

    {/* Footer */}
    <Footer/>
}

export default Home;
