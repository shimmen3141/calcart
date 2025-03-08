import React from "react";
import { useModal } from "modules/Modal";
import { useSettingToggle } from "features/Setting/contexts";
import {
  classifyInputFormat,
  cleanLines,
  splitTextByLinebreak,
} from "functions";
import "./InputFormatTag.scss";

const InputFormatTag = ({ inputText }) => {
  const { handleOpenModal } = useModal();

  const { settingToggles } = useSettingToggle();

  const lines = splitTextByLinebreak(inputText);

  // 入力内容を改行ごとに分割してそれぞれ処理する
  const cleanedLines = cleanLines(lines, settingToggles.removeSymbols);

  // 入力内容から入力形式を分類する
  const inputFormat = classifyInputFormat(cleanedLines);

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
