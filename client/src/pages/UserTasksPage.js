import React from "react";

function UserTasksPage () {
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