import React from "react";
import "./box.css";

const Box = ({color}) => {
  return <div className='boxes' style={{ backgroundColor: color }}></div>
};

export default Box;
