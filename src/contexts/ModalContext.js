import React, { createContext, useContext, useState } from "react";

// Context の作成
const ModalContext = createContext();

// Context プロバイダの作成
export const ModalProvider = ({ children }) => {
  // 現在開いているモーダルの id を管理する state
  const [openedModal, setOpenedModal] = useState(null);

  // モーダルを開く関数
  const handleOpenModal = (id) => {
    setOpenedModal(() => id);
  };

  // モーダルを閉じる関数
  const handleCloseModal = () => {
    setOpenedModal(() => null);
  };

  return (
    <ModalContext.Provider
      value={{ openedModal, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useModals = () => {
  return useContext(ModalContext);
};
