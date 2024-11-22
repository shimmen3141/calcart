import { useState, useEffect } from "react";
import classifyInputFormat from "./classifyInputFormat";
import divideInput from "./divideInput";
import parseLines from "./parseLines";
import { useToggleSwitch } from "../index";

const useCartInput = ({ carts, setCarts, cartID, cartNumber, cartRefs }) => {
  // 入力内容を管理する変数
  const [inputText, setInputText] = useState("");
  // カート台数を管理する変数
  const [cartCount, setCartCount] = useState(1);

  const { toggleStates } = useToggleSwitch();

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
    updateCart("ingredients", parsedIngredients);
    // eslint-disable-next-line
  }, [toggleStates, inputText]);

  // カートを更新する関数
  const updateCart = (key, value) => {
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.id === cartID ? { ...cart, [key]: value } : cart
      )
    );
  };

  // 入力欄の変更により発火する関数
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
  };

  // クリアボタンの押下により発火する関数
  const handleClear = () => {
    setInputText("");
  };

  // ✕ボタンの押下により発火する関数
  const handleRemove = () => {
    if (carts.length > 1) {
      setCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== cartID));

      setTimeout(() => {
        // 削除されたカートの次のカートにスクロール
        if (cartRefs.current[cartNumber]) {
          const targetCart = cartRefs.current[cartNumber];
          const targetLeftPosition = targetCart.offsetLeft;

          window.scrollTo({
            left: targetLeftPosition, // 横方向にスクロール
            behavior: "smooth",
          });
        } else if (cartRefs.current[cartNumber - 1]) {
          // 次のカートが存在しない場合は、前のカートにスクロール
          const targetCart = cartRefs.current[cartNumber - 1];
          const targetLeftPosition = targetCart.offsetLeft;

          window.scrollTo({
            left: targetLeftPosition, // 横方向にスクロール
            behavior: "smooth",
          });
        }
      }, 0);
    }
  };

  // カート数が下限に達したか判定する関数
  const isLastCart = () => {
    return carts.length <= 1;
  };

  // カート台数のスピンボタン変更時に発火する関数
  // const hadleCartCountChange = (event) => {
  //   updateCart("cartCount", Number(event.target.value));
  // };

  const hadleCartCountChange = (count) => {
    setCartCount(Number(count));
    updateCart("cartCount", Number(count));
  };

  return {
    inputText,
    cartCount,
    inputFormat,
    handleInputChange,
    handleClear,
    handleRemove,
    isLastCart,
    hadleCartCountChange,
  };
};

export default useCartInput;
