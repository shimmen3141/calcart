import { useState } from "react";

const useCartCountSpinButton = ({ hadleCartCountChange }) => {
  const maxCount = 1000;
  const [count, setCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  // 入力が日本語の変換中かを管理する変数
  const [isComposing, setIsComposing] = useState(false);

  const handleCountUp = () => {
    setCount((prevCount) => {
      const newCount = Math.min(prevCount + 1, maxCount);
      hadleCartCountChange(newCount);
      return newCount;
    });
  };

  const handleCountDown = () => {
    setCount((prevCount) => {
      const newCount = Math.max(0, prevCount - 1);
      hadleCartCountChange(newCount);
      return newCount;
    });
  };

  const handleCountChange = (event) => {
    const inputValue = event.target.value;
    setCount(inputValue);
  };

  // 入力欄からフォーカスを外した際の処理
  const handleBlur = () => {
    const inputNumber = Number(count);
    if (count === "") {
      setCount(0);
      hadleCartCountChange(0);
    } else if (isNaN(inputNumber) || inputNumber < 0) {
      setCount(0);
      hadleCartCountChange(0);
      setErrorMessage("半角の数値を入力してください。");
    } else if (inputNumber > maxCount) {
      setCount(maxCount);
      hadleCartCountChange(maxCount);
      setErrorMessage(`最大値は${maxCount}です。`);
    } else {
      setCount(inputNumber);
      hadleCartCountChange(inputNumber);
    }

    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  // Enterキーが押されたときの処理
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !isComposing) {
      handleBlur();
      event.target.blur();
    }
  };

  // 入力が下限に達したか判定する関数
  const isMinCount = () => {
    return Number(count) <= 0;
  };

  // 入力が上限に達したか判定する関数
  const isMaxCount = () => {
    return Number(count) >= maxCount;
  };

  return {
    handleCountUp,
    handleCountDown,
    handleCountChange,
    handleBlur,
    handleKeyDown,
    setIsComposing,
    isMinCount,
    isMaxCount,
    count,
    errorMessage,
  };
};

export default useCartCountSpinButton;
