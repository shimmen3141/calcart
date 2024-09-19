import React from "react";

const InputFormatTag = ({ inputFormat }) => {
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
        style={{
          height: "auto",
          width: "5rem",
          margin: "0 0 0 auto",
          padding: "8px 12px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          cursor: "pointer",
          border: "1px solid #ddd",
        }}
        //onClick={() => setIsModalOpen(true)}
      >
        {getTagLabel()}
      </div>
    </div>
  );
};

export default InputFormatTag;
