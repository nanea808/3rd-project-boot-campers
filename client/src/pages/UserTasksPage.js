import React from "react";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import TaskFeed from "../components/TaskFeed";
import SavedTasks from "../components/SavedTasks";

import { QUERY_UNCLAIMED_TASKS } from "../api/queries";
import { QUERY_WATCHED_TASKS } from "../api/queries";
import { QUERY_FUNDED_TASKS } from "../api/queries";
import FundedTasks from "../components/FundedTasks";

function UserTasksPage () {
    // temporarily using UserOnes ID and username
    const userId = "643ccd8f784b03a9752b30d4";
    const username = "UserOne";


    const watchedQuery = useQuery(QUERY_WATCHED_TASKS, {
      variables: {userId: userId}
    });
    const watchedTasks = watchedQuery.data?.user[0].watchedTasks || {};

    const fundedQuery = useQuery(QUERY_FUNDED_TASKS, {
        variables: {userId: userId}
      });
      const fundedTasks = fundedQuery.data?.user[0].fundedTasks || {};

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
                    {fundedQuery.loading ? <div>Loading...</div> : <FundedTasks tasks={fundedTasks} username={username}/>}
                </div>
                <div id="pending-tasks">
                    {/* insert scrollable list component */}
                </div>
            </div>
        </main>
    );
}

export default UserTasksPage;