import {
  ToggleSwitch,
  HelpButton,
  RemoveSymbolsModal,
  SpoonToGramModal,
  Modal,
  useModal,
  useToggleSwitch,
} from "../index";
import { modalContents } from "../common/Modal/modalContents";

const LabeledToggleSwitch = ({ id, labelText }) => {
  console.log("LabeledToggleSwitch");

  const { toggleStates, handleToggleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  const { title, content } = modalContents[id] || modalContents.default;

  return (
    <div>
      {labelText}
      <HelpButton onClick={() => handleOpenModal(id)} />
      <ToggleSwitch
        id={id}
        isChecked={toggleStates[id]}
        onChange={handleToggleSwitchChange}
      />
      {/* <RemoveSymbolsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <SpoonToGramModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      <Modal
        isOpen={isModalOpen(id)}
        onClose={() => handleCloseModal(id)}
        title={title}
      >
        {content}
      </Modal>
    </div>
  );
};

export default LabeledToggleSwitch;
