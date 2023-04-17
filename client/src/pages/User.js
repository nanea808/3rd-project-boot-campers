import React from "react";
// import User from "../../../server/models/User";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../api/queries";
import { useState } from 'react';
import addTaskForm from "../components/TaskAdd"; //shouldn't this be read on line 35?

function User () {
    const [showTaskForm, setTaskForm ] = useState(false); //for rendering addTaskForm component on button press only

    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_USER, { 
        variables: { userId: userId },
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Now Loading</div>;
    }

    const handleClick = () => {
        setTaskForm(true);
    }

    //do we need to add additional btn click handling for Modify and Delete btns? Are those going to be componenets, or will those just render the user's info as editable text inputs on the page? 

    return (
        <main>
            <div> 
                <button id="modify-user" type="button" className="">Modify Details</button>
                <button id="delete-user" type="button" className="">Delete Account</button>
                <button id="add-task" type="button" className="" onClick={handleClick}>Create Task</button>
                {showTaskForm && <addTaskForm />}
            </div>
            <div>
                <img src="" alt="avatar" placeholder="user-avatar"></img>
            </div>
            <div>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
            <div>
                <h1>About Me</h1>
                <p>{user.description}</p>
            </div>
            <div>
                <h2>My Tasks</h2>
                <div>
                    {user.createdTasks}
                </div>
            </div>
            <div>
                <h2>Assigned Tasks</h2>
                <div>
                    {user.assignedTasks}
                </div>
            </div>
            <div>
                <h2>Watched Tasks</h2>
                    <div>
                        {user.watchedTasks}
                    </div>
            </div>
            <div id="skills-container">
                {user.skills}
            </div>
        </main>
    );
}

export default User;