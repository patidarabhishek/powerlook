import React, { useState } from 'react';

const ColorFilter = ({ selectedColors, onColorChange }) => {
  const initialColors = [
    { name: "Brown", code: "#795548" },
    { name: "Black", code: "#000000" },
    { name: "Light Green", code: "#90ee90" },
    { name: "Pink", code: "#ffc0cb" },
    { name: "White", code: "#ffffff", border: true },
    { name: "Navy Blue", code: "#000080" },
    { name: "Green", code: "#008000" },
  ];

  const additionalColors = [
    { name: "Red", code: "#ff0000" },
    { name: "Orange", code: "#ffa500" },
    { name: "Yellow", code: "#ffff00" },
    { name: "Blue", code: "#0000ff" },
    { name: "Sky Blue", code: "#87ceeb" },
    { name: "Beige", code: "#f5f5dc" },
    { name: "Teal", code: "#008080" },
    { name: "Maroon", code: "#800000" },
    { name: "Lavender", code: "#e6e6fa" },
    { name: "Magenta", code: "#ff00ff" },
    { name: "Olive", code: "#808000" },
    { name: "Coral", code: "#ff7f50" },
    { name: "Mint", code: "#98ff98" },
    { name: "Grey", code: "#808080" },
  ];

  const [showMoreColors, setShowMoreColors] = useState(false);

  // const handleColorChange = (colorName) => {
  //   setSelectedColors((prevSelected) =>
  //     prevSelected.includes(colorName)
  //       ? prevSelected.filter((color) => color !== colorName)
  //       : [...prevSelected, colorName]
  //   );
  // };

  return (
    <>
      {[...initialColors, ...(showMoreColors ? additionalColors : [])].map((color, idx) => (
        <div className="form-check d-flex align-items-center mb-1" key={idx}>
          <input
            className="form-check-input me-2"
            type="checkbox"
            id={color.name}
            checked={selectedColors.includes(color.name)}
            onChange={() => onColorChange(color.name)}
            style={{ accentColor: 'red' }}
          />

          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: color.code,
              border: color.border ? '1px solid #aaa' : '1px solid #ccc',
              marginRight: '8px',
              flexShrink: 0,
            }}
          ></div>

          <label
            className="form-check-label"
            htmlFor={color.name}
            style={{ fontSize: '14px', fontWeight: '600', color: '#555454' }}
          >
            {color.name}
          </label>
        </div>
      ))}

      {!showMoreColors && (
        <div
          className="text-danger mt-1"
          style={{ cursor: 'pointer', fontSize: '14px' }}
          onClick={() => setShowMoreColors(true)}
        >
          +14 more
        </div>
      )}
    </>
  );
};
export default ColorFilter;
