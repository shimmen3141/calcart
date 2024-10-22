import { useState } from "react";

const useAccordion = () => {
  // アコーディオンの開閉を管理する変数
  const [isOpen, setIsOpen] = useState(false);

  // アコーディオンの開閉を切り替える関数
  const toggleAccordion = () => {
    setIsOpen((prevStates) => !prevStates);
  };

  return { isOpen, toggleAccordion };
};

export default useAccordion;