
import React from 'react';
import UserRegistration from '../components/UserRegistration';
import GoButton from '../components/common/GoButton.js';
import { Link } from 'react-router-dom';

// This is the Register Page component
// It allows users to create a new account

function RegisterPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-green-900 opacity-50"></div>
      
      {/* Matrix-style background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 gap-1 h-full w-full">
          {Array.from({length: 400}).map((_, i) => (
            <div 
              key={i} 
              className="border border-green-500 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-5 animate-pulse"></div>
      </div>

      {/* Main register container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Back button */}
        <Link 
          to="/" 
          className="mb-8 flex items-center text-green-400 hover:text-green-300 transition-colors group"
        >
          <span className="mr-2 group-hover:animate-pulse">←</span>
          <span className="font-mono text-sm tracking-wider">Back to Home</span>
        </Link>

        {/* Registration form */}
        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm border border-green-500 border-opacity-30 rounded-lg p-8 shadow-2xl relative">
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-transparent to-green-500 opacity-20 rounded-lg blur-sm"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-green-400 mb-2 font-mono tracking-wider">
                Sign Up
              </h1>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mt-4"></div>
            </div>

            {/* User Registration Component */}
            <div className="mb-6">
              <UserRegistration />
            </div>

            {/* Login link */}
            <div className="text-center mt-8">
                <Link 
                  to="/login" 
                  className="text-green-300 underline hover:text-white transition-colors"
                >
                  Login
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length: 20}).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default RegisterPage;