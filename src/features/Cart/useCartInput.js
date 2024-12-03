import { useState, useEffect } from "react";
import { useCart } from "contexts";

const useCartInput = ({ cartId }) => {
  const { updateCart, getCartInputText } = useCart();

  // inputTextの初期値をcartsから取得
  const initialValue = getCartInputText(cartId);
  const [inputText, setInputText] = useState(initialValue);

  useEffect(() => {
    updateCart(cartId, "inputText", inputText);
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
    handleInputChange,
    handleClear,
  };
};

export default useCartInput;
