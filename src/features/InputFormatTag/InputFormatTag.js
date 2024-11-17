import React from "react";
import { useModal } from "../index";
import "./InputFormatTag.scss";

const InputFormatTag = ({ inputFormat }) => {

  const { handleOpenModal } = useModal();

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
      <div
        className={`inputFormatTag ${inputFormat}`}
        onClick={() => handleOpenModal("inputFormat")}
      >
        {getTagLabel()}
      </div>
    </div>
  );
};

export default InputFormatTag;
