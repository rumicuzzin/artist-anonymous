import React from 'react';
import UserRegistration from '../components/UserRegistration';
import { Link } from 'react-router-dom';
// This is the Register Page component
// It allows users to create a new account

function RegisterPage() {
  return (
    <div className="register-page">
      <Link to="/">← Back to Home</Link>
      <UserRegistration />
      <p>
        Already have an account? 
        <Link to="/login"> Login here</Link>
      </p>
    </div>
  );
}

export default RegisterPage;