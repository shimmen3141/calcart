import React from "react";
import useCartInput from "features/Carts/hooks/useCartInput";
import { InputFormatTag, CartIcon, CartCountSpinButton } from "features";
import { CloseButton } from "components";
import { useCart } from "contexts";
import "./Cart.scss";

const Cart = React.memo(({ cartId, cartNumber }) => {
  const { inputText, handleInputChange, handleClear } = useCartInput({
    cartId,
  });

  const { handleRemoveCart, hasMinCarts } = useCart();

  console.log(`Cart${cartNumber}`);

  return (
    <div>
      <div className="spinButtonContainer">
        <div className="spinButtonArea">
          <div>カート台数：</div>
          <CartCountSpinButton cartId={cartId} />
        </div>
        <CartIcon cartId={cartId} />
        <CloseButton
          onClick={() => handleRemoveCart(cartId, cartNumber)}
          disabled={hasMinCarts()}
          variant="circle"
        />
      </div>
      <div className="cart">
        <h2>カート{cartNumber + 1} </h2>
        <InputFormatTag inputText={inputText} />
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
      </div>
    </div>
  );
});

export default Cart;
