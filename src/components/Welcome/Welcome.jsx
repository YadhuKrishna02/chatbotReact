import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1 className="header-title">Ratham University</h1>
      </header>
      <h2 className="title">Enter Student Info System</h2>
      <p className="description">
        Welcome to the Student Info System. Enroll now!
      </p>
      <Link to="/chatbot">
        <button className="enroll-button">Enroll Now</button>
      </Link>
    </div>
  );
};

export default Welcome;
