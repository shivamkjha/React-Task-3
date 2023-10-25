import React, { useState } from 'react';
import './colourpicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker-container">
      <div
        className="inner-box"
        style={{
          backgroundColor: selectedColor || 'lightpink', 
        }}
      >
        <h2 className="heading">Color Picker</h2>
        <button className="pick-color-button" onClick={handleButtonClick}>
          Pick a color
        </button>
        {showColorList && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && <p>You picked: {selectedColor}</p>}
      </div>
    </div>
  );
};

export default ColorPicker;