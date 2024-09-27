import { useState } from "react";
import { ShoppingList, Carts } from "../index";

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

  return (
    <div>
      <Carts allCarts={allCarts} setAllCarts={setAllCarts} />
      <ShoppingList items={organizeIngredient()} />
    </div>
  );
};

export default MainContents;
