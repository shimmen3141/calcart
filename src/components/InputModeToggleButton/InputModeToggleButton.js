import React, { useState } from "react";
import "./InputModeToggleButton.css";

const InputModeToggleButton = ({ inputMode, setInputMode }) => {
  //const [inputMode, setInputMode] = useState("auto");

  return (
    <div className="toggle-buttons">
      <button
        className={`toggle-btn ${inputMode === "one-line" ? "active" : ""}`}
        onClick={() => setInputMode("one-line")}
      >
        1行1材料
      </button>
      <button
        className={`toggle-btn ${inputMode === "two-line" ? "active" : ""}`}
        onClick={() => setInputMode("two-line")}
      >
        2行1材料
      </button>
      <button
        className={`toggle-btn ${inputMode === "auto" ? "active" : ""}`}
        onClick={() => setInputMode("auto")}
      >
        オート
      </button>
    </div>
  );
};

export default InputModeToggleButton;
