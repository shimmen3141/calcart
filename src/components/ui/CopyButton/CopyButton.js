import React from "react";
import useCopyButton from "./useCopyButton";
import "./CopyButton.scss";

const CopyButton = ({ text }) => {
  const { copyStatus, handleCopy } = useCopyButton({ text });

  return (
    <div class="copy-icon-wrapper" onClick={handleCopy}>
      <div class="copy-icon-background"></div>
      <div class="dli-copy">
        <div></div>
      </div>
    </div>
  );
};

export default CopyButton;
