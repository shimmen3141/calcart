import LabeledToggleSwitch from "./LabeledToggleSwitch";
import "./ToggleSwitchArea.scss";

const ToggleSwitchArea = () => {
  console.log("ToggleSwitchArea");

  return (
    <div className="toggleSwitchArea">
      <div className="triangleBorder"></div>
      <div className="triangle"></div>
      <div className="labeledToggleSwitches">
        <LabeledToggleSwitch settingId="removeSymbols" />
        <LabeledToggleSwitch settingId="spoonToGram" />
        <LabeledToggleSwitch settingId="classifyItems" />
      </div>
    </div>
  );
};

export default ToggleSwitchArea;
