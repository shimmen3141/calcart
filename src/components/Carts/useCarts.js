import { useRef } from "react";

const useCarts = ({ allCarts, setAllCarts }) => {
  // 全てのカートに対応する ref を格納するための配列
  const cartRefs = useRef([]);

  // カートの上限数
  const maxCarts = 5;

  // カート追加ボタンの押下により発火する関数
  const handleAddCart = () => {
    if (allCarts.length < maxCarts) {
      // 新しいカートを追加
      setAllCarts([
        ...allCarts,
        { id: Date.now(), ingredients: [], cartCount: 1 },
      ]);

      // 新しい入力欄にスクロール
      setTimeout(() => {
        const lastIndex = allCarts.length; // 新しいカートが追加された後の最後のカートのインデックス
        if (cartRefs.current[lastIndex]) {
          cartRefs.current[lastIndex].scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  // カート数が上限に達したか判定する関数
  const hasMaxCarts = () => {
    return allCarts.length >= maxCarts;
  };

  // ref を各カートに設定するための関数
  const setRefs = (node, index) => {
    if (node) {
      // 各カートの ref を対応するインデックスに保存
      cartRefs.current[index] = node;
    }
  };

  return { hasMaxCarts, handleAddCart, setRefs, cartRefs };
};

export default useCarts;
