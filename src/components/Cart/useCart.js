import { useState } from "react";
import {
  fullWidthToHalfWidth,
  fractionToDecimal,
  spoonToGram,
} from "../index";

const useCart = ({
  allCarts,
  setAllCarts,
  cartID,
  cartNumber,
  cartRefs,
}) => {
  const [inputText, setInputText] = useState("");

  // 入力欄の変更により発火する関数
  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    const lines = text
      .split("\n")
      .map((line) => fullWidthToHalfWidth(line)) // 全角を半角に変換
      .filter((line) => line.trim()) // 空行を無視
      .map((line) => line.trim()) // 余計な空白文字を削除
      .map((line) => fractionToDecimal(line)); // 分数を小数に変換

    const parsedIngredients = lines
      .map((line) => {
        // 最初のスペースで2つに分割
        const [name, quantity] = line.split(/(?<=^[^\s]+)\s/);
        const info =
          quantity !== undefined ? quantity.replace(/\s+/g, "") : "適量";

        const fixedInfo = spoonToGram(name, info);

        return { name: name, info: fixedInfo };
      })
      .filter((ingredient) => ingredient !== null);

    const newAllCarts = allCarts.map((cart) =>
      cart.id === cartID ? { ...cart, ingredients: parsedIngredients } : cart
    );
    setAllCarts(newAllCarts);
  };

  // クリアボタンの押下により発火する関数
  const handleClear = () => {
    setInputText("");
    const newAllCarts = allCarts.map((cart) =>
      cart.id === cartID ? { ...cart, ingredients: [] } : cart
    );
    setAllCarts(newAllCarts);
  };

  // ✕ボタンの押下により発火する関数
  const handleRemove = () => {
    if (allCarts.length > 1) {
      const newAllCarts = allCarts.filter((cart) => cart.id !== cartID);
      setAllCarts(newAllCarts);

      setTimeout(() => {
        // 削除されたカートの次のカートにスクロール
        if (cartRefs.current[cartNumber]) {
          cartRefs.current[cartNumber].scrollIntoView({ behavior: "smooth" });
        } else if (cartRefs.current[cartNumber - 1]) {
          // 次のカートが存在しない場合は、前のカートにスクロール
          cartRefs.current[cartNumber - 1].scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 0);
    }
  };

  // カート数が上限に達したか判定する関数
  const isLastCart = () => {
    return allCarts.length <= 1;
  };

  // カート台数のスピンボタン変更時に発火する関数
  const hadleCartCountChange = (event) => {
    const newAllCarts = allCarts.map((cart) =>
      cart.id === cartID
        ? { ...cart, cartCount: Number(event.target.value) }
        : cart
    );
    setAllCarts(newAllCarts);
  };

  return {
    inputText,
    handleInputChange,
    handleClear,
    handleRemove,
    isLastCart,
    hadleCartCountChange,
  };
};

export default useCart;
