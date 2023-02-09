import React, { useState } from 'react';
import './ColorPicker.css';

const vernsRed = `rgb(250, 85, 83)`;
const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose', vernsRed];

export default function ColorPicker() {
  const [color, setColor] = useState('CornflowerBlue');

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <h1>Selected color: {color}</h1>
      <div id="color-buttons">
        {colorNames.map((colorName)=>(
          <button 
            onClick={() => setColor(colorName)} 
            key={colorName}>
              {colorName}
          </button>
        ))}
      </div>
    </div>
  );
}