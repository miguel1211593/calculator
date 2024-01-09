// SpecialButton.js
import React from 'react';

const SpecialButton = ({ value, image, onClick }) => {
  return (
    <button className="specialCharacters" onClick={onClick}>
      {image ? <img src={image} alt={value} className="button-image"/> : value}
    </button>
  );
};

export default SpecialButton;
