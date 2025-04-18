import SettingToggleSwitch from "./SettingToggleSwitch";
import { SETTINGS_CONFIG } from "../constants";
import "./ToggleSwitchArea.scss";

const ToggleSwitchArea = () => {
  console.log("ToggleSwitchArea");

  const settings = Object.values(SETTINGS_CONFIG);

  return (
    <div className="toggleSwitchArea">
      <div className="triangleBorder"></div>
      <div className="triangle"></div>
      <div className="settingToggleSwitches">
        {settings.map((setting) => (
          <SettingToggleSwitch
            key={setting.settingId}
            settingId={setting.settingId}
          />
        ))}
      </div>
    </div>
  );
};

export default ToggleSwitchArea;
