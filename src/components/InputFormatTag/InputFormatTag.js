import React from "react";
import "./InputFormatTag.css";

const InputFormatTag = ({ inputFormat, onClick }) => {
  // inputFormatに基づいて表示するテキストを決定
  const getTagLabel = () => {
    switch (inputFormat) {
      case "not-entered":
        return "未入力";
      case "one-line":
        return "1行1材料";
      case "two-line":
        return "2行1材料";
      default:
        return "形式不明";
    }
  };

  return (
    <div>
      <div className="inputFormatTag" onClick={onClick}>
        {getTagLabel()}
      </div>
    </div>
  );
};

export default InputFormatTag;
