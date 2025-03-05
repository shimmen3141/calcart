import CrossIcon from "./CrossIcon";
import "./CloseButton.scss";

const CloseButton = ({ onClick, disabled }) => {
  return (
    <button className="closeButton" onClick={onClick} disabled={disabled}>
      <CrossIcon />
    </button>
  );
};

export default CloseButton;
