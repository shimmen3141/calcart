import { Modal } from "../index";

const RemoveSymbolsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="記号消去について">
        記号消去についての説明
    </Modal>
  );
};

export default RemoveSymbolsModal;
