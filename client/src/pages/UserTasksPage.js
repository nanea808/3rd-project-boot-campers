import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";

import { QUERY_UNCLAIMED_TASKS } from "../api/queries";
import { QUERY_WATCHED_TASKS } from "../api/queries";

function UserTasksPage () {
    // temporarily using UserOnes ID 
    const userId = "643b9515196f12fe7796060e"


    const watchedQuery = useQuery(QUERY_WATCHED_TASKS, {
      variables: {userId: userId}
    });
    const watchedTasks = watchedQuery.data?.user[0].watchedTasks || {};

    return (
        <main>
            <div> 
                <button type="button" className="">Create a Task</button>
                <button type="button" className="">Request a Task</button>
                <button type="button" className="">Search for Tasks</button>
            </div>
            <div id="container">
                <div id="saved-tasks">
                    {/* insert scrollable list component */}
                    {watchedQuery.loading ? <div>Loading...</div> : <SavedTasks tasks={watchedTasks} />}
                </div>
                <div id="supported-tasks">
                    {/* insert scrollable list component */}
                </div>
                <div id="pending-tasks">
                    {/* insert scrollable list component */}
                </div>
            </div>
        </main>
    );
}

export default UserTasksPage;