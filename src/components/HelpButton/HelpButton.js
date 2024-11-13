import "./HelpButton.scss";

const HelpButton = ({ onClick }) => {
  return (
    <div className="helpButton" onClick={onClick}>
      ?
    </div>
  );
};

export default HelpButton;
