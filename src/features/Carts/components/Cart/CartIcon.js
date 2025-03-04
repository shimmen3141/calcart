import { useCart } from "contexts";

const CartIcon = ({ cartId }) => {
  const { getCartCount, getCartInputText } = useCart();

  const cartCount = getCartCount(cartId);
  const cartInputText = getCartInputText(cartId);

  // cartInputText が空なら"cart_empty"、そうでなければ"cart_full"
  const baseName = cartInputText === "" ? "cart_empty" : "cart_full";

  // cartCount が3以上なら "3"、0～2なら cartCount の数字
  const displayCount = cartCount >= 3 ? 3 : cartCount;

  const imageName = `${baseName}_${displayCount}.png`;

  console.log(`imageName: ${imageName}`);

  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/${imageName}`}
      alt="Cart Icon"
    />
  );
};

export default CartIcon;
