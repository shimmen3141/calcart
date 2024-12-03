import { useState, useEffect } from "react";
import classifyInputFormat from "./classifyInputFormat";
import divideInput from "./divideInput";
import { useToggleSwitch, useCart } from "../index";

const useCartInput = ({ cartId }) => {
  // 入力内容を管理する変数
  const [inputText, setInputText] = useState("");

  const { toggleStates } = useToggleSwitch();

  const { updateCart } = useCart();

  // 入力内容を改行ごとに分割してそれぞれ処理する
  const lines = divideInput(inputText, toggleStates.removeSymbols);

  // 入力内容から入力形式を分類する
  const inputFormat = classifyInputFormat(lines);

  useEffect(() => {
    updateCart(cartId, "ingredients", inputText);
    // eslint-disable-next-line
  }, [inputText]);

  // 入力欄の変更により発火する関数
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
  };

  // クリアボタンの押下により発火する関数
  const handleClear = () => {
    setInputText("");
  };

  return {
    inputText,
    inputFormat,
    handleInputChange,
    handleClear,
  };
};

export default useCartInput;
