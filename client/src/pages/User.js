import React from "react";

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
                <p>Username</p>
                <p>Email</p>
            </div>
            <div>
                <h1>About Me</h1>
                <p>insert bio here</p>
            </div>
            <div id="skills-container">
                <p className="skill-floater"></p>
                <p className="skill-floater"></p>
                <p className="skill-floater"></p>
                <p className="skill-floater"></p>
            </div>
        </main>
    );
}

export default User;