import { useState, useEffect } from "react";
import { useCart } from "contexts";

const useCartInput = ({ cartId }) => {
  const { updateCart, getCartInputMode, getCartInputText } = useCart();

  // inputTextの初期値をcartsから取得
  const initialInputText = getCartInputText(cartId);
  const [inputText, setInputText] = useState(initialInputText);

  // inputModeの初期値をcartsから取得
  const initialInputMode = getCartInputMode(cartId);
  const [inputMode, setInputMode] = useState(initialInputMode);

  // inputTextの変更をcartに反映
  useEffect(() => {
    updateCart(cartId, "inputText", inputText);
    // eslint-disable-next-line
  }, [inputText]);

  // inputModeの変更をcartに反映
  useEffect(() => {
    updateCart(cartId, "inputMode", inputMode);
    // eslint-disable-next-line
  }, [inputMode]);

  // 入力欄の変更により発火する関数
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
  };

  // クリアボタンの押下により発火する関数
  const handleClear = () => {
    setInputText("");
  };

  // ラジオボタンの変更により発火する関数
  const handleModeChange = (mode) => {
    setInputMode(mode);
  };

  const placeholder =
    inputMode === "one-line"
      ? `---例1 (1行1材料)---\nにんじん 2本\nタマネギ 3個\n醤油 50ml`
      : `---例2 (2行1材料)---\nにんじん\n2本\nタマネギ\n3個\n醤油\n50ml`;

  return {
    inputText,
    inputMode,
    handleInputChange,
    handleClear,
    handleModeChange,
    placeholder,
  };
};

export default useCartInput;
