import React from "react";
import { CloseButton } from "components";
import { useModal } from "contexts";
import { useScrollLock } from "hooks";
import { modalContents } from "./modalContents";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.scss";

const Modal = () => {
  const { openedModal, handleCloseModal } = useModal();
  const { targetRef } = useScrollLock({ isScrollLocked: openedModal });
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
            transition={{ duration: 0.2 }}
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
