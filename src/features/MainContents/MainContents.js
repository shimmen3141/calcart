import { useState } from "react";
import { ShoppingListArea, Carts, Modal, useModals } from "../index";
import "./MainContents.scss";

const MainContents = () => {
  const [allCarts, setAllCarts] = useState([
    { id: Date.now(), ingredients: [], cartCount: 1 },
    { id: Date.now() + 1, ingredients: [], cartCount: 1 },
  ]);

  const organizeIngredient = () => {
    return allCarts
      .filter((cart) => cart.cartCount > 0)
      .flatMap((cart) =>
        cart.ingredients.map((ingredient) => ({
          name: ingredient.name,
          info: ingredient.info,
          cartCount: cart.cartCount,
        }))
      );
  };

  const { openedModal } = useModals();

  return (
    <div className="mainContents">
      <Carts allCarts={allCarts} setAllCarts={setAllCarts} />
      <ShoppingListArea items={organizeIngredient()} />
      <Modal id={openedModal} />
    </div>
  );
};

export default MainContents;
