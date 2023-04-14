import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";


function User () {
    return (
        <main>
            <Navbar />
            <Header />
            <div> 
                <button type="" className="">Modify Details</button>
                <button type="" className="">Delete Account</button>
            </div>
            <div>
                <img src="" placeholder="user-avatar"></img>
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
            <Footer />
        </main>
    );
}

export default User;