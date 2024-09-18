import React from 'react';

const Button = ({ children, type, className, onClick }) => {
  return (
    <button
      type={type}
      className={`px-6 py-2.5 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;