import { useState } from "react";

const useDropdownMenu = () => {
  // アコーディオンの開閉を管理する変数
  const [isOpen, setIsOpen] = useState(false);

  // アコーディオンの開閉を切り替える関数
  const toggleDropdown = () => {
    setIsOpen((prevStates) => !prevStates);
  };

  return { isOpen, toggleDropdown };
};

export default useDropdownMenu;