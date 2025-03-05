import React from "react";
import {
  CartIcon,
  CartCountSpinButton,
  CartInputArea,
} from "features";
import { CloseButton } from "components";
import { useCart } from "contexts";
import "./Cart.scss";

const Cart = React.memo(({ cartId, cartNumber }) => {

  const { handleRemoveCart, hasMinCarts } = useCart();

  console.log(`Cart${cartNumber}`);

  return (
    <div>
      <div className="spinButtonContainer">
        <div className="spinButtonArea">
          <div>カート台数：</div>
          <CartCountSpinButton cartId={cartId} />
        </div>
        <div className="cartIconArea">
          <div className="cartName">カート{cartNumber + 1}</div>
          <CartIcon cartId={cartId} />
        </div>
        <CloseButton
          onClick={() => handleRemoveCart(cartId, cartNumber)}
          disabled={hasMinCarts()}
          variant="circle"
        />
      </div>
      <CartInputArea cartId={cartId} />
    </div>
  );
});

export default Cart;
