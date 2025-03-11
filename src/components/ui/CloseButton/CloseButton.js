import CrossIcon from "components/icons/CrossIcon";
import "./CloseButton.scss";

const CloseButton = ({ onClick, disabled, variant = "square" }) => {
  return (
    <button
      className={`closeButton closeButton--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      <CrossIcon />
    </button>
  );
};

export default CloseButton;
