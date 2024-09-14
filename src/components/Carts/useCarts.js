const useCarts = ({ allCarts, setAllCarts }) => {
    // カートの上限数
    const maxCarts = 5;

    // カート追加ボタンの押下により発火する関数
    const handleAddInput = () => {
      if (allCarts.length < maxCarts) {
        setAllCarts([
          ...allCarts,
          { id: Date.now(), ingredients: [], cartCount: 1 },
        ]);
      }
    };

    // カート数が上限に達したか判定する関数
    const hasMaxCarts = () => {
      return allCarts.length >= maxCarts;
    };

    return { hasMaxCarts, handleAddInput };
};

export default useCarts;