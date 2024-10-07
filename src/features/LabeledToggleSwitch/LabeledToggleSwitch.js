import {
  ToggleSwitch,
  HelpButton,
  RemoveSymbolsModal,
  SpoonToGramModal,
  Modal,
  useModal,
  useToggleSwitch,
} from "../index";
import { modalContents } from "../../components/Modal/modalContents";

const LabeledToggleSwitch = ({ id, labelText }) => {
  console.log("LabeledToggleSwitch");

  const { toggleStates, handleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  const { title, content } = modalContents[id] || modalContents.default;

  return (
    <div>
      {labelText}
      <HelpButton onClick={() => handleOpenModal(id)} />
      <ToggleSwitch
        id={id}
        isChecked={toggleStates[id]}
        onChange={handleSwitchChange}
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
