import React from 'react';

const UsernamePasswordInputs = ({ 
  username, 
  password,
  handleUsernameChange,
  handlePasswordChange
}) => {
  return (
    <div>
      <label htmlFor="username" className="text-green-400">Username:</label>
      <input 
        type="text" 
        className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded focus:border-green-400 focus:outline-none"
        id="username"
        value={username} 
        onChange={handleUsernameChange}
        required
      />
      
      <label htmlFor="password" className="text-green-400">Password:</label>
      <input 
        type="password"
        className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded focus:border-green-400 focus:outline-none" 
        id="password"
        value={password} 
        onChange={handlePasswordChange}
        required
      />
    </div>
  );
};

export default UsernamePasswordInputs;
