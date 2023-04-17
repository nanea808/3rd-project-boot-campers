import React from "react";
import User from "../../../server/models/User";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../api/queries";

function User () {
    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_USER, { 
        variables: { userId: userId },
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Now Loading</div>;
    }

    return (
        <main>
            <div> 
                <button type="" className="">Modify Details</button>
                <button type="" className="">Delete Account</button>
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