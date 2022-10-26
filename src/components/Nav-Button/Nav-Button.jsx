import React from "react";
import "./Nav-Button.css";

const NavButton = (props) => {
  const { colors, showOrder } = props;
  return (
    <div className="btt">
      <button className="button" onClick={() => showOrder(colors)}>
        Button
      </button>
    </div>
  );
};

export default NavButton;
