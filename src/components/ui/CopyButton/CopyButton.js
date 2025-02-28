import React from "react";
import useCopyButton from "./useCopyButton";
import CopyIcon from "./CopyIcon";
import "./CopyButton.scss";

const CopyButton = ({ text }) => {
  const { copyStatus, handleCopy } = useCopyButton({ text });

  return (
    <div className="copyButton" onClick={handleCopy}>
      <CopyIcon />
      <div className="copyStatus">{copyStatus}</div>
    </div>
  );
};

export default CopyButton;
