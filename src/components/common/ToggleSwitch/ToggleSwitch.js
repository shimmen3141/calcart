import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ title, isChecked, setIsChecked }) => {
  // チェックボックスの状態を管理する変数
  //const [isChecked, setIsChecked] = useState(true);

  // チェックボックスの状態を変更する関数
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div>{title}</div>
      <div className="toggleButton">
        <input
          id="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor="toggle" />
      </div>
    </div>
  );
};

export default ToggleSwitch;
