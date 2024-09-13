import React, { useState } from "react";
import "./App.css";
import {
  ShoppingList,
  Carts,
} from "./components/index";

const App = () => {
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
      <h1>Calcart</h1>
      <Carts allCarts={allCarts} setAllCarts={setAllCarts} />
      <ShoppingList items={organizeIngredient()} />
    </div>
  );
};

export default App;
