// Component for the go button that I will use accross the application
import React from 'react';

const GoButton = ({ 
  children, 
  loading = false, 
  loadingText = 'Loading...', 
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = "w-full py-3 font-semibold rounded transition-colors font-mono";
  const isDisabled = loading || disabled;
  const variants = {
    primary: "bg-green-600 text-black hover:bg-green-700 disabled:bg-green-800",
    secondary: "bg-gray-600 text-green-400 hover:bg-gray-700 border border-green-500",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`
        px-4 py-2 
        font-mono font-bold text-lg
        rounded-lg
        transition-all duration-300 
        transform hover:scale-105
        ${isDisabled
          ? 'bg-gray-700 text-gray-500 cursor-not-allowed border border-gray-600' 
          : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black border border-green-400 hover:shadow-lg hover:shadow-green-500/25'
        }
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full"></div>
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default GoButton;