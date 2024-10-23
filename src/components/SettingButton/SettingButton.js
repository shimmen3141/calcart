import "./SettingButton.css";

const SettingButton = ({ onClick }) => {
  return (
    <div className="outer" onClick={onClick}>
      <div className="iconGear">
        <div></div>
      </div>
    </div>
  );
};

export default SettingButton;
