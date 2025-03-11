import useCopyButton from "./useCopyButton";
import CopyIcon from "components/icons/CopyIcon";
import "./CopyButton.scss";

const CopyButton = ({ copyText }) => {
  const { copyStatus, handleCopy } = useCopyButton({ copyText });

  return (
    <div className="copyButton" onClick={handleCopy}>
      <CopyIcon />
      <div className="copyStatus">{copyStatus}</div>
    </div>
  );
};

export default CopyButton;
