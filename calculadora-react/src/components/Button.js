import React from 'react';
import './Calculator.css'; 

const Button = ({ value, onClick }) => {
  return (
    <button className="numbers" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default Button;
