import React from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = ({ id, isChecked, onChange }) => {

  return (
    <div>
      <div className="toggleSwitch">
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
