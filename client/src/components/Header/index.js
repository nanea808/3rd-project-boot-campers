import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* Use Link component to create a link that returns to the homepage on click */}
        
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Task-A-Saurus
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
        Our task listing website provides meaningful tasks for users to complete and accepts donations to fund each task, aiming to create positive change and improve people's lives.
        Welcome to Task-a-saurus, the Community Task Manager! Our mission is simple: connect people in local communities to collaborate and solve the
        problems they face. From landscape cleanup and filling potholes, to repairing plumbing at the townhouse or funding a new park bench, we hope
        to connect tasks to those who can get them done.
        </p>
      </div>
    </header>
  );
};

export default Header;
