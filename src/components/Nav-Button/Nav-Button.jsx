import React from "react";
import './Nav-Button.css';

function onClick(color) {
  alert(color);
}

const NavButton = (props) => {
  const { color } = props;
  return (
    <div className="btt">
      <button className="button" onClick={()=>onClick(color)}>Button</button>
    </div>
  );
};

export default NavButton;
