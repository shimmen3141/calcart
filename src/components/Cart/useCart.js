import { useState, useEffect } from "react";
import {
  fullWidthToHalfWidth,
  fractionToDecimal,
  ellipsisToSpace,
  removeSymbols,
  spoonToGram,
} from "../index";
import classifyInputFormat from "./classifyInputFormat";

const useCart = ({
  allCarts,
  setAllCarts,
  cartID,
  cartNumber,
  cartRefs,
  isRemoveSymbolsApplied,
  isSpoonToGramApplied,
}) => {
  const [inputText, setInputText] = useState("");

  const [inputFormat, setInputFormat] = useState("not-entered");

  useEffect(() => {
    parseInput(inputText);
  }, [isRemoveSymbolsApplied, isSpoonToGramApplied]);

  const divideInput = (text, isRemoveSymbolsApplied) => {
    const lines = text
      .split("\n")
      .map((line) => fullWidthToHalfWidth(line)) // 全角を半角に変換
      .map((line) => ellipsisToSpace(line)) // 三点リーダーを半角スペースに置換
      .map((line) => (isRemoveSymbolsApplied ? removeSymbols(line) : line)) // 余計な空白文字を削除
      .filter((line) => line.trim()) // 空行を無視
      .map((line) => fractionToDecimal(line)) // 分数を小数に変換
      .map((line) => line.trim()); // 余計な空白文字を削除

    return lines;
  };

  const parseLines = (lines, currentFormat) => {
    let parsedIngredients = [];

    if (currentFormat === "one-line") {
      parsedIngredients = lines
        .map((line) => {
          // 最初のスペースで2つに分割
          const [name, quantity] = line.split(/(?<=^[^\s]+)\s/);
          const info =
            quantity !== undefined ? quantity.replace(/\s+/g, "") : "適量";
          const fixedInfo = spoonToGram(name, info);

          return { name: name, info: fixedInfo };
        })
        .filter((ingredient) => ingredient !== null);
    } else if (currentFormat === "two-line") {
      for (let i = 0; i < lines.length; i += 2) {
        // 偶数行が材料名
        const name = lines[i];
        // 奇数行が分量
        const quantity = lines[i + 1] ? lines[i + 1] : "適量";
        const fixedInfo = spoonToGram(name, quantity);
        parsedIngredients.push({ name: name, info: fixedInfo });
      }
    }

    return parsedIngredients;
  };

  const parseInput = (text) => {
    const lines = text
      .split("\n")
      .map((line) => fullWidthToHalfWidth(line)) // 全角を半角に変換
      .map((line) => ellipsisToSpace(line)) // 三点リーダーを半角スペースに置換
      .map((line) => (isRemoveSymbolsApplied ? removeSymbols(line) : line)) // 余計な空白文字を削除
      .filter((line) => line.trim()) // 空行を無視
      .map((line) => fractionToDecimal(line)) // 分数を小数に変換
      .map((line) => line.trim()); // 余計な空白文字を削除

    const currentFormat = classifyInputFormat(lines);
    setInputFormat(currentFormat);

    let parsedIngredients = [];

    if (currentFormat === "one-line") {
      parsedIngredients = lines
        .map((line) => {
          // 最初のスペースで2つに分割
          const [name, quantity] = line.split(/(?<=^[^\s]+)\s/);
          const info =
            quantity !== undefined ? quantity.replace(/\s+/g, "") : "適量";
          const fixedInfo = isSpoonToGramApplied ? spoonToGram(name, info) : info;

          return { name: name, info: fixedInfo };
        })
        .filter((ingredient) => ingredient !== null);
    } else if (currentFormat === "two-line") {
      for (let i = 0; i < lines.length; i += 2) {
        // 偶数行が材料名
        const name = lines[i];
        // 奇数行が分量
        const quantity = lines[i + 1] ? lines[i + 1] : "適量";
        const fixedInfo = isSpoonToGramApplied ? spoonToGram(name, quantity) : quantity;
        parsedIngredients.push({ name: name, info: fixedInfo });
      }
    }

    setAllCarts((prevAllCarts) =>
      prevAllCarts.map((cart) =>
        cart.id === cartID ? { ...cart, ingredients: parsedIngredients } : cart
      )
    );
  };

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
    setAllCarts((prevAllCarts) =>
      prevAllCarts.map((cart) =>
        cart.id === cartID ? { ...cart, ingredients: [] } : cart
      )
    );
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
    setAllCarts((prevAllCarts) =>
      prevAllCarts.map((cart) =>
        cart.id === cartID
          ? { ...cart, cartCount: Number(event.target.value) }
          : cart
      )
    );
  };

  return {
    inputText,
    handleInputChange,
    handleClear,
    handleRemove,
    isLastCart,
    hadleCartCountChange,
    inputFormat,
  };
};

export default useCart;
