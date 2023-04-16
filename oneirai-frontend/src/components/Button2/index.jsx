import React from 'react';
import './button2.css';

const Button2 = ({ children, onClick, disabled }) => (
  <button className="button2" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button2;
