import React, { createContext, useContext, useState } from "react";
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
    { id: Date.now(), ingredients: [], count: 1 },
    { id: Date.now() + 1, ingredients: [], count: 1 },
  ]);

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
  //       .filter((cart) => cart.count > 0)
  //       // ここに上の処理を入れる
  //       .flatMap((cart) =>
  //         cart.ingredients.map((ingredient) => ({
  //           name: ingredient.name,
  //           info: ingredient.info,
  //           count: cart.count,
  //         }))
  //       );
  //   };

  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useCart = () => useContext(CartContext);
