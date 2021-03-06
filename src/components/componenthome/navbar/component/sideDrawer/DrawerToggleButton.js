import React from "react";
import "./DrawerToggleBuutton.css";

function DrawerToggleButton(props) {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
      <div className="toggle-button_line"></div>
    </button>
  );
}

export default DrawerToggleButton;
