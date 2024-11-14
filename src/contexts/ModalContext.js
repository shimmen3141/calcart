import React, { createContext, useContext, useState } from "react";

// Context の作成
const ModalContext = createContext();

// Context プロバイダの作成
export const ModalProvider = ({ children }) => {
  // 現在開いているモーダルの id を管理する state
  const [openedModal, setOpenedModal] = useState(null);

  // モーダルを開く関数（モーダルの id を設定）
  const openModal = (id) => {
    setOpenedModal(() => id);
  };

  // モーダルを閉じる関数（id を null にリセット）
  const closeModal = () => {
    setOpenedModal(() => null);
  };

  // 引数として受け取った id のモーダルが開かれているかを返す関数
  const isModalOpen = (id) => {
    return openedModal === id;
  };

  return (
    <ModalContext.Provider
      value={{ openedModal, openModal, closeModal, isModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useModals = () => {
  return useContext(ModalContext);
};
