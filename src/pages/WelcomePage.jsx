import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  return (
    <div className="welcome-container page-container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/signup" className="btn btn-primary">Create Account</Link>
      <Link to="/login" className="btn btn-secondary">Already Registered? Login</Link>
    </div>
  );
}

export default WelcomePage;