import React, { createContext, useContext, useState, useRef } from "react";
// import classifyInputFormat from "./classifyInputFormat";
// import divideInput from "./divideInput";
// import parseLines from "./parseLines";
// import { useToggleSwitch } from "../index";

// Context の作成
const CartContext = createContext();

// Context プロバイダの作成
export const CartProvider = ({ children }) => {
  // carts の初期状態
  const [carts, setCarts] = useState([
    { id: Date.now(), ingredients: [], cartCount: 1 },
    { id: Date.now() + 1, ingredients: [], cartCount: 1 },
  ]);

  // 全てのカートに対応する ref を格納するための配列
  const cartRefs = useRef([]);

  // ref を各カートに設定するための関数
  const setRefs = (node, index) => {
    if (node) {
      // 各カートの ref を対応するインデックスに保存
      cartRefs.current[index] = node;
    }
  };

  // カートの上限数
  const maxCarts = 5;

  // カートの下限数
  const minCarts = 1;

  // カート追加ボタンの押下により発火する関数
  const handleAddCart = () => {
    if (carts.length < maxCarts) {
      // 新しいカートを追加
      setCarts([...carts, { id: Date.now(), ingredients: [], cartCount: 1 }]);

      // 新しい入力欄にスクロール
      setTimeout(() => {
        // 追加されたカートの index
        const lastIndex = carts.length;
        // スクロールの親要素を指定
        const cartContainer = document.querySelector(".carts");

        if (cartRefs.current[lastIndex]) {
          const targetCart = cartRefs.current[lastIndex];
          const targetLeftPosition = targetCart.offsetLeft;
          // 追加されたカートにスクロール
          cartContainer.scrollTo({
            left: targetLeftPosition,
            behavior: "smooth",
          });
        }
      }, 0);
    }
  };

  // ✕ボタンの押下により発火する関数
  const handleRemoveCart = (cartId, cartNumber) => {
    if (carts.length > 1) {
      setCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== cartId));

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
  const hasMinCarts = () => {
    return carts.length <= minCarts;
  };

  // カート数が上限に達したか判定する関数
  const hasMaxCarts = () => {
    return carts.length >= maxCarts;
  };

  // カートを更新する関数
  const updateCart = (cartId, key, value) => {
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.id === cartId ? { ...cart, [key]: value } : cart
      )
    );
  };

  //   const { toggleStates } = useToggleSwitch();

  //   // 入力内容を改行ごとに分割してそれぞれ処理する
  //   const lines = divideInput(inputText, toggleStates.removeSymbols);

  //   // 入力内容から入力形式を分類する
  //   const inputFormat = classifyInputFormat(lines);

  //   // 入力形式をもとに入力内容を処理する
  //   const parsedIngredients = parseLines(
  //     lines,
  //     inputFormat,
  //     toggleStates.spoonToGram
  //   );

  //   const organizeIngredient = () => {
  //     return carts
  //       .filter((cart) => cart.cartCount > 0)
  //       // ここに上の処理を入れる
  //       .flatMap((cart) =>
  //         cart.ingredients.map((ingredient) => ({
  //           name: ingredient.name,
  //           info: ingredient.info,
  //           cartCount: cart.cartCount,
  //         }))
  //       );
  //   };

  return (
    <CartContext.Provider
      value={{
        carts,
        setCarts,
        cartRefs,
        setRefs,
        handleAddCart,
        hasMaxCarts,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useCart = () => useContext(CartContext);
