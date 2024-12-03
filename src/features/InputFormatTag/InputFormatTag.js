import React from "react";
import {
  useToggleSwitch,
  useModal,
  classifyInputFormat,
  divideInput,
} from "../index";
import "./InputFormatTag.scss";

const InputFormatTag = ({ inputText }) => {

  const { handleOpenModal } = useModal();

  const { toggleStates } = useToggleSwitch();

  // 入力内容を改行ごとに分割してそれぞれ処理する
  const lines = divideInput(inputText, toggleStates.removeSymbols);

  // 入力内容から入力形式を分類する
  const inputFormat = classifyInputFormat(lines);

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
