import React from "react";
import useCartInput from "./useCartInput";
import { InputFormatTag, CloseButton } from "../index";
import "./Cart.scss";
import CartCountSpinButton from "../CartCountSpinButton/CartCountSpinButton";

const Cart = React.memo(({ carts, setCarts, cartId, cartNumber, cartRefs }) => {
  const {
    inputText,
    inputFormat,
    handleInputChange,
    handleClear,
    handleRemove,
    isLastCart,
  } = useCartInput({
    carts,
    setCarts,
    cartId,
    cartNumber,
    cartRefs,
  });

  console.log(`Cart${cartNumber}`);

  return (
    <div className="cart">
      <h2>カート{cartNumber + 1} </h2>
      <CloseButton onClick={handleRemove} disabled={isLastCart()} />
      <InputFormatTag inputFormat={inputFormat} />
      <div>材料リストを入力：</div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder={`---例1 (1行1材料)---\nにんじん 2本\nタマネギ 3個\n醤油 50ml\n\n---例2 (2行1材料)---\nにんじん\n2本\nタマネギ\n3個\n醤油\n50ml`}
      />
      <div>
        <button className="clearButton" onClick={handleClear}>
          クリア
        </button>
      </div>
      <div className="spinButtonArea">
        <div>カート台数：</div>
        <CartCountSpinButton
          cartId={cartId}
        />
      </div>
    </div>
  );
});

export default Cart;
