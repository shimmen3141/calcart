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
      ? `---例 (1行ずつ)---\n\nニンジン 2本\n玉ねぎ 1/3個\n醤油 大さじ2`
      : `---例 (2行ずつ)---\n\nニンジン\n2本\n玉ねぎ\n1/3個\n醤油\n大さじ2`;

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
