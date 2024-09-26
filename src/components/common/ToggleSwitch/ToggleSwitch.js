import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ id, title, isChecked, setIsChecked }) => {

  // チェックボックスの状態を変更する関数
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div>{title}</div>
      <div className="toggleButton">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={setIsChecked}
        />
        <label htmlFor={id} />
      </div>
    </div>
  );
};

export default ToggleSwitch;
