import React, { useState } from "react";
import "./App.css";
import {
  IngredientInput,
  ShoppingList,
} from "./components/index";
import IngredientsContainer from "./components/IngredientsContainer";

const App = () => {
  const [allCarts, setAllCarts] = useState([
    { id: Date.now(), ingredients: [], cartCount: 1 },
    { id: Date.now() + 1, ingredients: [], cartCount: 1 },
  ]);

  const organizeShoppingList = () => {
    return allCarts.flatMap((cart) =>
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
      <IngredientsContainer allCarts={allCarts} setAllCarts={setAllCarts} />
      <ShoppingList items={organizeShoppingList()} />
    </div>
  );
};

export default App;
