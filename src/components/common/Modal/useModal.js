import { useState } from "react";

const useModal = () => {
  const [openedModal, setOpenedModal] = useState(null);

  // モーダルの開閉どちらも扱える関数。分かりづらいので未使用。
  const handleToggleModal = (id) => {
    setOpenedModal((prevOpenedModal) => (prevOpenedModal === id ? null : id));
  };

  // 引数として受け取った id のモーダルを開く関数
  const handleOpenModal = (id) => {
    setOpenedModal(() => id);
  };

  // モーダルを閉じる関数
  const handleCloseModal = () => {
    setOpenedModal(() => null);
  };

  // 引数として受け取った id のモーダルが開かれているかを返す関数
  const isModalOpen = (id) => {
    return openedModal === id;
  };

  return { handleOpenModal, handleCloseModal, isModalOpen };
};

export default useModal;
