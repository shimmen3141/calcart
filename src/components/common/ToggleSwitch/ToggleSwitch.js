import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ id, title, isChecked, onChange }) => {

  return (
    <div>
      <div>{title}</div>
      <div className="toggleButton">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={() => onChange(id)}
        />
        <label htmlFor={id} />
      </div>
    </div>
  );
};

export default ToggleSwitch;
