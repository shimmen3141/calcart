import { Modal } from "../index";

const SpoonToGramModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen("spoonToGram")}
      onClose={() => onClose("spoonToGram")}
      title="大さじ・小さじ → g の変換について"
    >
      大さじ・小さじ → g の変換についての説明
    </Modal>
  );
};

export default SpoonToGramModal;
