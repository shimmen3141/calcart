import { useCart } from "../index";
import "./AddCartButton.scss";

const AddCartButton = () => {
  const { handleAddCart, hasMaxCarts } = useCart();

  return (
    <button
      className="addCartButton"
      onClick={handleAddCart}
      disabled={hasMaxCarts()}
    >
      + カートを追加
    </button>
  );
};

export default AddCartButton;
