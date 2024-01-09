// SpecialButton.js
import React from 'react';

const SpecialButton = ({ value, image, onClick }) => {
  return (
    <button className="special-button" onClick={onClick}>
      {image ? <img src={require(image)} alt={value} /> : value}
    </button>
  );
};

export default SpecialButton;
