import { LabeledToggleSwitch } from "features";
import "./ToggleSwitchArea.scss";

const ToggleSwitchArea = () => {
  console.log("ToggleSwitchArea");

  return (
    <div className="toggleSwitchArea">
      <div className="triangle"></div>
      <div className="labeledToggleSwitches">
        <LabeledToggleSwitch id="removeSymbols" labelText="記号を消去" />
        <LabeledToggleSwitch
          id="spoonToGram"
          labelText="大さじ・小さじをグラムに変換"
        />
        <LabeledToggleSwitch id="classifyItems" labelText="リストを分割" />
      </div>
    </div>
  );
};

export default ToggleSwitchArea;
