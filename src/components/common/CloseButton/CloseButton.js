import "./CloseButton.css";

const CloseButton = ({ onClick, disabled }) => {
  return (
    <button className="closeButton" onClick={onClick} disabled={disabled}></button>
  );
};

export default CloseButton;
