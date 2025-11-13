import React from 'react';

const ErrorBox = ({ message }) => {
  const errorStyle = {
    border: '1px solid #ff4d4d',
    backgroundColor: '#ffb3b3',
    color: '#990000',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '1.5rem auto',
    maxWidth: '500px',
  };

  return <div style={errorStyle}>{message}</div>;
};

export default ErrorBox;