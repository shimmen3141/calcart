import React, { createContext, useContext, useState } from "react";

// Context の作成
const ModalContext = createContext();

// Context プロバイダの作成
export const ModalProvider = ({ children }) => {
  // 現在開いているモーダルの id を管理する state
  const [openModalId, setOpenModalId] = useState(null);

  // モーダルを開く関数（モーダルの id を設定）
  const openModal = (id) => {
    setOpenModalId(id);
  };

  // モーダルを閉じる関数（id を null にリセット）
  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <ModalContext.Provider value={{ openModalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useModals = () => {
  return useContext(ModalContext);
};
