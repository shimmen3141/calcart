import { useCart } from "contexts";
import "./CartIcon.scss";

const CartIcon = ({ cartId }) => {
  const { getCartCount, getCartInputText } = useCart();

  const cartCount = getCartCount(cartId);
  const cartInputText = getCartInputText(cartId);

  const baseName = cartInputText === "" ? "cart_empty" : "cart_full";

  let count = 0;
  const parsedCount = Number(cartCount);
  if (isNaN(parsedCount) || parsedCount <= 0) {
    count = 0;
  } else if (parsedCount <= 1) {
    count = 1;
  } else if (parsedCount <= 2) {
    count = 2;
  } else {
    count = 3;
  }

  const imageName = `${baseName}_${count}.png`;

  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/${imageName}`}
      alt="Cart Icon"
      className="cartIcon"
    />
  );
};

export default CartIcon;
