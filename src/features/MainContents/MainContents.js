import { ShoppingListArea, Carts, Modal, useCart } from "../index";
import "./MainContents.scss";

const MainContents = () => {
  console.log("MainContents");

  const { carts, setCarts } = useCart();

  const organizeIngredient = (carts) => {
    return carts
      .filter((cart) => cart.cartCount > 0)
      .flatMap((cart) =>
        cart.ingredients.map((ingredient) => ({
          name: ingredient.name,
          info: ingredient.info,
          cartCount: cart.cartCount,
        }))
      );
  };

  const items = organizeIngredient(carts);

  return (
    <div className="mainContents">
      <Carts carts={carts} setCarts={setCarts} />
      <ShoppingListArea items={items} />
      <Modal />
    </div>
  );
};

export default MainContents;
