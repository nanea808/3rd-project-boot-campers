import React from "react";
import User from "../../../server/models/User";

function User () {
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
                <p>key={user.username}</p>
                <p>key={user.email}</p>
            </div>
            <div>
                <h1>About Me</h1>
                <p>key={user.description}</p>
            </div>
            <div>
                <h2>My Tasks</h2>
                <div>
                    key={user.createdTasks}
                </div>
            </div>
            <div>
                <h2>Assigned Tasks</h2>
                <div>
                    key={user.assignedTasks}
                </div>
            </div>
            <div>
                <h2>Watched Tasks</h2>
                    <div>
                        key={user.watchedTasks}
                    </div>
            </div>
            <div id="skills-container">
                key={user.skills}
            </div>
        </main>
    );
}

export default User;