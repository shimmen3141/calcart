import { useState, useEffect } from "react";
import classifyInputFormat from "./classifyInputFormat";
import divideInput from "./divideInput";
import parseLines from "./parseLines";

const useCart = ({
  allCarts,
  setAllCarts,
  cartID,
  cartNumber,
  cartRefs,
  isRemoveSymbolsApplied,
  isSpoonToGramApplied,
}) => {
  // 入力内容を管理する変数
  const [inputText, setInputText] = useState("");
  // 入力形式を管理する変数
  const [inputFormat, setInputFormat] = useState("not-entered");

  useEffect(() => {
    parseInput(inputText);
    // eslint-disable-next-line
  }, [isRemoveSymbolsApplied, isSpoonToGramApplied]);

  // 入力内容を処理し、入力形式とカートを更新する関数
  const parseInput = (text) => {
    // 入力内容を改行ごとに分割してそれぞれ処理する
    const lines = divideInput(text, isRemoveSymbolsApplied);

    // 入力内容から入力形式を分類する
    const currentFormat = classifyInputFormat(lines);
    setInputFormat(currentFormat);

    // 入力形式をもとに入力内容を処理する
    const parsedIngredients = parseLines(
      lines,
      currentFormat,
      isSpoonToGramApplied
    );

    // カートを更新する
    updateCart("ingredients", parsedIngredients);
  };

  // カートを更新する関数
  const updateCart = (key, value) => {
    setAllCarts((prevAllCarts) =>
      prevAllCarts.map((cart) =>
        cart.id === cartID ? { ...cart, [key]: value } : cart
      )
    );
  };

  // 入力欄の変更により発火する関数
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    parseInput(text);
  };

  // クリアボタンの押下により発火する関数
  const handleClear = () => {
    setInputText("");
    updateCart("ingredients", []);
  };

  // ✕ボタンの押下により発火する関数
  const handleRemove = () => {
    if (allCarts.length > 1) {
      setAllCarts((prevAllCarts) =>
        prevAllCarts.filter((cart) => cart.id !== cartID)
      );

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
    return allCarts.length <= 1;
  };

  // カート台数のスピンボタン変更時に発火する関数
  const hadleCartCountChange = (event) => {
    updateCart("cartCount", Number(event.target.value));
  };

  return {
    inputText,
    inputFormat,
    handleInputChange,
    handleClear,
    handleRemove,
    isLastCart,
    hadleCartCountChange,
  };
};

export default useCart;
