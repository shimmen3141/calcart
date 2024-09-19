import React from "react";
import useCart from "./useCart";
import { InputFormatTag } from "../index";

const Cart = React.memo(
  ({
    allCarts,
    setAllCarts,
    cartID,
    cartNumber,
    cartRefs,
  }) => {
    const {
      inputText,
      handleInputChange,
      handleClear,
      handleRemove,
      isLastCart,
      hadleCartCountChange,
      inputFormat,
    } = useCart({
      allCarts,
      setAllCarts,
      cartID,
      cartNumber,
      cartRefs,
    });

    console.log(`Cart${cartNumber}`);

    return (
      <div>
        <h2>カート{cartNumber + 1} </h2>
        {/* <div>{inputFormat}</div> */}
        <InputFormatTag inputFormat={inputFormat} />
        <div>材料リストを入力：</div>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder={`例:\nにんじん 2本\nタマネギ 3個\n醤油 50ml`}
          rows="30"
          cols="50"
        />
        <div>
          <button onClick={handleClear}>クリア</button>
          <button onClick={handleRemove} disabled={isLastCart()}>
            ×
          </button>
        </div>
        <div>カート台数：</div>
        <input
          type="number"
          min="0"
          defaultValue="1"
          onChange={hadleCartCountChange}
        />
      </div>
    );
  }
);

export default Cart;
