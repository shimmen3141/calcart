import { useState, useEffect } from "react";
import classifyInputFormat from "./classifyInputFormat";
import divideInput from "./divideInput";
import parseLines from "./parseLines";
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

  // 入力形式をもとに入力内容を処理する
  const parsedIngredients = parseLines(
    lines,
    inputFormat,
    toggleStates.spoonToGram
  );

  useEffect(() => {
    updateCart(cartId, "ingredients", parsedIngredients);
    // eslint-disable-next-line
  }, [toggleStates, inputText]);

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
