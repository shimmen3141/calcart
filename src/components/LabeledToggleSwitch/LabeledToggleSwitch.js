import {
  ToggleSwitch,
  HelpButton,
  RemoveSymbolsModal,
  SpoonToGramModal,
  useModal,
  useToggleSwitch,
} from "../index";

const LabeledToggleSwitch = ({ id, labelText }) => {
  console.log("LabeledToggleSwitch");

  const { toggleStates, handleToggleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  return (
    <div>
      <div>{labelText}</div>
      <HelpButton onClick={() => handleOpenModal(id)} />
      <ToggleSwitch
        id={id}
        isChecked={toggleStates[id]}
        onChange={handleToggleSwitchChange}
      />

      <RemoveSymbolsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <SpoonToGramModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default LabeledToggleSwitch;
