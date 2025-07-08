import React from 'react';
import UserRegistration from '../components/UserRegistration';
import { Link } from 'react-router-dom';

// This is the Register Page component
// It allows users to create a new account

function RegisterPage() {
  return (
    <div className="min-h-screen bg-black text-green-400 flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      {/* Full screen rabbit hole spiral */}
      <div 
        className="fixed top-0 left-0 w-screen h-screen opacity-20 pointer-events-none"
        style={{
          zIndex: 1,
          background: `repeating-radial-gradient(circle at 50% 50%,
            transparent 0px,
            transparent 80px,
            rgba(34, 197, 94, 0.3) 100px,
            rgba(34, 197, 94, 0.3) 120px,
            transparent 140px,
            transparent 200px)`
        }}
      />
      {/* Main content container */}
      <div className="max-w-md w-full mx-4 p-8 bg-gray-900 bg-opacity-50 rounded-lg border border-green-500 border-opacity-30 backdrop-blur-sm">
        
        {/* Back to Home Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-green-300 hover:text-green-400 mb-6 transition-colors duration-200 font-mono"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-400 font-mono mb-2">
            Enter the Trap
          </h1>
          <p className="text-green-300 font-mono text-sm">
            Get Anonymous
          </p>
        </div>

        {/* User Registration Component */}
        <div className="mb-6">
          <UserRegistration />
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-green-300 font-mono text-sm">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors duration-200"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

export default RegisterPage;