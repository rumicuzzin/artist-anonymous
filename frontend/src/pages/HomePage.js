import React from 'react';
import { Link } from 'react-router-dom';

// This is the Home Page component
// It serves as the landing page for the application

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center">
      <div className="text-center">
        {/* Alice in Wonderland Rabbit with Clock */}
        <div className="w-56 h-56 mx-auto mb-6 flex items-center justify-center">
          <img 
            src={require('../images/rabbit-clock-nobg.png')} 
            alt="White Rabbit with Pocket Watch" 
            className="w-full h-full object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="text-4xl font-mono mb-4 text-green-400">Artist Anonymous</h1>
        <p className="font-mono text-green-400 mb-8">Create, Buy and Discover Digital Art</p>
        
        {/* Navigation buttons */}
        <div className="auth-buttons space-y-4">
          <Link to="/login">
            <button className="login-btn w-full py-3 bg-green-400 text-black font-semibold hover:bg-green-600 transition-colors">
              Login
            </button>
          </Link>
          
          <Link to="/register">
            <button className="register-btn w-full py-3 border-2 border-green-400 text-green-400 font-semibold rounded hover:bg-green-500 hover:text-black transition-colors">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      {/* Floating bubbles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-green-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-green-500 rounded-full animate-bounce opacity-70" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
}

export default HomePage;