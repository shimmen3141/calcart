import "./HelpButton.css";

const HelpButton = ({ onClick }) => {
  return (
    <div className="helpButton" onClick={onClick}>
      ?
    </div>
  );
};

export default HelpButton;
