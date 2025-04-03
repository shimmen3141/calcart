import React, { createContext, useContext, useRef } from "react";
import { useLocalStorage } from "hooks";

// カートの上限数
const MAX_CARTS = 5;
// カートの下限数
const MIN_CARTS = 1;
// カートのデフォルト値
const createDefaultCart = () => ({
  id: Date.now(),
  inputMode: "one-line",
  inputText: "",
  count: 1,
});

// Context の作成
const CartContext = createContext();

// Context プロバイダの作成
export const CartProvider = ({ children }) => {
  // carts の初期状態
  const [carts, setCarts] = useLocalStorage("carts", [createDefaultCart()]);

  // 全てのカートに対応する ref を格納するための配列
  const cartRefs = useRef([]);

  // ref を各カートに設定するための関数
  const setRefs = (node, index) => {
    if (node) {
      // 各カートの ref を対応するインデックスに保存
      cartRefs.current[index] = node;
    }
  };

  // カート追加ボタンの押下により発火する関数
  const handleAddCart = () => {
    if (carts.length < MAX_CARTS) {
      // 新しいカートを追加
      setCarts([...carts, createDefaultCart()]);

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
    return carts.length <= MIN_CARTS;
  };

  // カート数が上限に達したか判定する関数
  const hasMaxCarts = () => {
    return carts.length >= MAX_CARTS;
  };

  // カートを更新する関数
  const updateCart = (cartId, key, value) => {
    setCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.id === cartId ? { ...cart, [key]: value } : cart
      )
    );
  };

  const getCartCount = (cartId) => {
    const cart = carts.find((cart) => cart.id === cartId);
    return cart ? Number(cart.count) : 1;
  };

  const getCartInputMode = (cartId) => {
    const cart = carts.find((cart) => cart.id === cartId);
    return cart ? cart.inputMode : "one-line";
  };

  const getCartInputText = (cartId) => {
    const cart = carts.find((cart) => cart.id === cartId);
    return cart ? cart.inputText : "";
  };

  return (
    <CartContext.Provider
      value={{
        carts,
        setCarts,
        cartRefs,
        setRefs,
        handleAddCart,
        handleRemoveCart,
        hasMaxCarts,
        hasMinCarts,
        updateCart,
        getCartCount,
        getCartInputMode,
        getCartInputText,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// カスタムフックで Context を使用
export const useCart = () => useContext(CartContext);
