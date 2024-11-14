import {
  ToggleSwitch,
  HelpButton,
  Modal,
  useModal,
  useToggleSwitch,
} from "../index";
import { ModalContents } from "../../components/Modal/ModalContents";

const LabeledToggleSwitch = ({ id, labelText }) => {
  console.log("LabeledToggleSwitch");

  const { toggleStates, handleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  const { title, content } = ModalContents[id] || ModalContents.default;

  return (
    <div>
      {labelText}
      <HelpButton onClick={() => handleOpenModal(id)} />
      <ToggleSwitch
        id={id}
        isChecked={toggleStates[id]}
        onChange={handleSwitchChange}
      />
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
