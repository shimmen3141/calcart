import { Modal } from "../index";

const RemoveSymbolsModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen("removeSymbols")}
      onClose={() => onClose("removeSymbols")}
      title="記号消去について"
    >
      記号消去についての説明
    </Modal>
  );
};

export default RemoveSymbolsModal;
