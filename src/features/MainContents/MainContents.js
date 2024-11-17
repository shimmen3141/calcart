import { useState } from "react";
import { ShoppingListArea, Carts, Modal } from "../index";
import "./MainContents.scss";

const MainContents = () => {
  console.log("MainContents");

  const [carts, setCarts] = useState([
    { id: Date.now(), ingredients: [], cartCount: 1 },
    { id: Date.now() + 1, ingredients: [], cartCount: 1 },
  ]);

  const organizeIngredient = () => {
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

  return (
    <div className="mainContents">
      <Carts carts={carts} setCarts={setCarts} />
      <ShoppingListArea items={organizeIngredient()} />
      <Modal />
    </div>
  );
};

export default MainContents;
