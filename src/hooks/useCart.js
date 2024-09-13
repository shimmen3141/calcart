import { useState } from "react";
import fullWidthToHalfWidth from "../functions/fullWidthToHalfWidth";
import fractionToDecimal from "../functions/fractionToDecimal";
import spoonToGram from "../functions/spoonToGram";

const useCart = ({allCarts, setAllCarts, cartID}) => {
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
      const newAllCarts = allCarts.filter((cart) => cart.id !== cartID);
      setAllCarts(newAllCarts);
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
      hadleCartCountChange,
    };
};

export default useCart;