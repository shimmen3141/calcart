import { ToggleSwitch, HelpButton, useModal, useToggleSwitch } from "../index";
import "./LabeledToggleSwitch.scss";

const LabeledToggleSwitch = ({ id, labelText }) => {
  console.log("LabeledToggleSwitch");

  const { toggleStates, handleSwitchChange } = useToggleSwitch();

  const { handleOpenModal } = useModal();

  return (
    <div className="labeledToggleSwitch">
      <div className="labelText">{labelText}</div>
      <HelpButton onClick={() => handleOpenModal(id)} />
      <ToggleSwitch
        id={id}
        isChecked={toggleStates[id]}
        onChange={handleSwitchChange}
      />
    </div>
  );
};

export default LabeledToggleSwitch;
