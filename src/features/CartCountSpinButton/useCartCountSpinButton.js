import { useState } from "react";

const useCartCountSpinButton = ({ hadleCartCountChange }) => {
  const maxCount = 1000;
  const [value, setValue] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  // 入力が日本語の変換中かを管理する変数
  const [isComposing, setIsComposing] = useState(false);

  const handleCountUp = () => {
    setValue((prevCount) => {
      const newCount = Math.min(prevCount + 1, maxCount);
      hadleCartCountChange(newCount);
      return newCount;
    });
  };

  const handleCountDown = () => {
    setValue((prevCount) => {
      const newCount = Math.max(0, prevCount - 1);
      hadleCartCountChange(newCount);
      return newCount;
    });
  };

  const handleCountChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  // 入力欄からフォーカスを外した際の処理
  const handleBlur = () => {
    const inputNumber = Number(value);
    if (value === "") {
      setValue(0);
      hadleCartCountChange(0);
    } else if (isNaN(inputNumber) || inputNumber < 0) {
      setValue(0);
      hadleCartCountChange(0);
      setErrorMessage("半角の数値を入力してください。");
    } else if (inputNumber > maxCount) {
      setValue(maxCount);
      hadleCartCountChange(maxCount);
      setErrorMessage(`最大値は${maxCount}です。`);
    } else {
      setValue(inputNumber);
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
    return Number(value) <= 0;
  };

  // 入力が上限に達したか判定する関数
  const isMaxCount = () => {
    return Number(value) >= maxCount;
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
    value,
    errorMessage,
  };
};

export default useCartCountSpinButton;
