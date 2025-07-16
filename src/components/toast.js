// Toast.jsx
import React from 'react';
import '../App.css'; // Assure-toi que les styles sont bien présents

const Toast = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="toast show" id="toast">
      <div className="spinner"></div>
      <span id="toast-message">{message}</span>
    </div>
  );
};

export default Toast;
