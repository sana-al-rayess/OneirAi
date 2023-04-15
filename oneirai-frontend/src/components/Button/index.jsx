import React from 'react';
import './button.css';

const Button = ({ children, onClick, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
