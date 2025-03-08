import { CloseButton } from "components";
import { useModal } from "./ModalContext";
import { modalContents } from "./modalContents";
import { useScrollLock } from "hooks";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";

const Modal = () => {
  const { openedModal, handleCloseModal } = useModal();
  const animationDuration = 200;
  const { targetRef } = useScrollLock({
    isScrollLocked: openedModal,
    animationDuration,
  });
  const { title, content } = modalContents[openedModal] || modalContents.default;

  return (
    <AnimatePresence>
      {openedModal && (
        <div>
          <div
            className="overlay"
            onClick={() => handleCloseModal(openedModal)}
          ></div>
          <motion.div
            className="modal-window"
            ref={targetRef}
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration / 1000 }}
          >
            <div className="header">
              <CloseButton onClick={() => handleCloseModal(openedModal)} />
              {title}
            </div>
            <div className="main">{content}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
