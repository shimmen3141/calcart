import React, { createContext, useContext, useState } from "react";

// Context の作成
const CartContext = createContext();

// Context プロバイダの作成
export const CartProvider = ({ children }) => {
  // carts の初期状態
  const [carts, setCarts] = useState([
    { id: Date.now(), ingredients: [], cartCount: 1 },
    { id: Date.now() + 1, ingredients: [], cartCount: 1 },
  ]);

  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      {children}
    </CartContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useCartContext = () => useContext(CartContext);
