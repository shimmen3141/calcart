import { useCart } from "contexts";
import { PlusIcon } from "components";
import "./AddCartButton.scss";

const AddCartButton = () => {
  const { handleAddCart, hasMaxCarts } = useCart();

  return (
    <button
      className="addCartButton"
      onClick={handleAddCart}
      disabled={hasMaxCarts()}
    >
      <PlusIcon />
      カートを追加
    </button>
  );
};

export default AddCartButton;
