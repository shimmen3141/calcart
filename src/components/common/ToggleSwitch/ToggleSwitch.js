import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ id, isChecked, onChange }) => {

  return (
    <div>
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
