import { useState } from "react";
import Box from "../Box/box";
import NavButton from "../Nav-Button/Nav-Button";
import "./box-list.css";

const BoxList = () => {
  const [colors, setColors] = useState(["red", "blue", "green"]);

  function ColorSwap(color) {
    var newColors = [...colors];
    newColors.push(newColors.shift());
    color=newColors
    return color;
  }

  const ScrollEvent = (e) => {
    if(window.scrollY%100===0){
      setColors(ColorSwap(colors));
      console.log(colors)
    }
  };

  window.addEventListener("scroll", ScrollEvent);

  
  return (
    <>
      <div className="Box-List">
        <NavButton color={colors} />
        {colors.map((color) => (
          <Box key={color} color={color} />
        ))}
      </div>
    </>
  );
};

export default BoxList;
