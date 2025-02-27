import { ToggleSwitch, HelpButton } from "components";
import { useModal, useSettingToggle } from "contexts";
import "./LabeledToggleSwitch.scss";

const LabeledToggleSwitch = ({ id, labelText }) => {
  console.log("LabeledToggleSwitch");

  const { settingToggles, handleToggleChange } = useSettingToggle();

  const { handleOpenModal } = useModal();

  return (
    <div className="labeledToggleSwitch">
      <div className="labelText">{labelText}</div>
      <HelpButton onClick={() => handleOpenModal(id)} />
      <ToggleSwitch
        id={id}
        isChecked={settingToggles[id]}
        onChange={() => handleToggleChange(id)}
      />
    </div>
  );
};

export default LabeledToggleSwitch;
