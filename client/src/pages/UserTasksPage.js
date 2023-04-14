import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UserTasksPage () {
    return (
        <main>
            <Navbar />
            <Header />
            <p>This is the user tasks page. Here, they can see their saved requests, supported tasks, and followed tasks.</p>
            <Footer />
        </main>
    );
}

export default UserTasksPage;