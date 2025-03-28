import { ToggleSwitch, HelpButton } from "components";
import { useModal } from "modules/Modal";
import { useSettingToggle } from "../contexts";
import { SETTINGS_CONFIG } from "../constants";
import "./SettingToggleSwitch.scss";

const SettingToggleSwitch = ({ settingId }) => {
  console.log("SettingToggleSwitch");

  const { settingToggles, handleToggleChange } = useSettingToggle();

  const { handleOpenModal } = useModal();

  // 設定情報を SETTINGS_CONFIG から取得
  const setting = SETTINGS_CONFIG[settingId];
  if (!setting) {
    console.error(`設定が見つかりません: ${settingId}`);
    return null;
  }
  const { labelText, relatedModalId, settingId: id } = setting;

  return (
    <div className="settingToggleSwitch">
      <div className="labelText">{labelText}</div>
      <HelpButton onClick={() => handleOpenModal(relatedModalId)} />
      <ToggleSwitch
        id={id}
        isChecked={settingToggles[id]}
        onChange={() => handleToggleChange(id)}
      />
    </div>
  );
};

export default SettingToggleSwitch;
