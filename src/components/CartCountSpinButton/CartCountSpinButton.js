import { useState } from "react";
import { motion } from "framer-motion";

const CartCountSpinButton = ({ hadleCartCountChange2 }) => {
  const maxCount = 1000;
  const [count, setCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCountUp = () => {
    setCount((prevCount) => {
      const newCount = Math.min(prevCount + 1, maxCount);
      hadleCartCountChange2(newCount);
      return newCount;
    });
  };

  const handleCountDown = () => {
    setCount((prevCount) => {
      const newCount = Math.max(0, prevCount - 1);
      hadleCartCountChange2(newCount);
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
      hadleCartCountChange2(0);
    } else if (isNaN(inputNumber) || inputNumber < 0) {
      setCount(0);
      hadleCartCountChange2(0);
      setErrorMessage("無効な値です。");
    } else if (inputNumber > maxCount) {
      setCount(maxCount);
      hadleCartCountChange2(maxCount);
      setErrorMessage(`最大値は${maxCount}です。`);
    } else {
      setCount(inputNumber);
      hadleCartCountChange2(inputNumber);
    }

    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  };

  // 入力が下限に達したか判定する関数
  const isMinCount = () => {
    return Number(count) <= 0;
  };

  // 入力が上限に達したか判定する関数
  const isMaxCount = () => {
    return Number(count) >= maxCount;
  };

  return (
    <div>
      {errorMessage && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {errorMessage}
        </motion.div>
      )}
      <button onClick={handleCountDown} disabled={isMinCount()}>
        -
      </button>
      <input
        type="text"
        inputmode="numeric"
        value={count}
        onChange={handleCountChange}
        onBlur={handleBlur}
      />
      <button onClick={handleCountUp} disabled={isMaxCount()}>
        +
      </button>
    </div>
  );
};

export default CartCountSpinButton;
