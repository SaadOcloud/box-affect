import React from "react";

const ShowOrder = ({ colors }) => {
  return (
    <div>
      <ol>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ol>
    </div>
  );
};

export default ShowOrder;
