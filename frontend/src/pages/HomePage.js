import React from 'react';
import { Link } from 'react-router-dom';

// This is the Home Page component
// It serves as the landing page for the application

function HomePage() {
  return (
    <div className="home-page">
      <h1>Artist Anonymous</h1>
      <p>Anonymous Digital Art Marketplace</p>
      
      {/* Navigation buttons */}
      <div className="auth-buttons">
        <Link to="/register">
          <button className="register-btn">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
      
      {/* Maybe add art gallery preview here later */}
    </div>
  );
}

export default HomePage;