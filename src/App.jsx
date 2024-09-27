import React, { useState } from "react";
import "./App.css";
import { AppHeader, AppFooter, ShoppingList, Carts } from "./components/index";
import { ToggleSwitchProvider } from "./contexts/ToggleSwitchContext";

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
    <ToggleSwitchProvider>
      <AppHeader />
      <Carts allCarts={allCarts} setAllCarts={setAllCarts} />
      <ShoppingList items={organizeIngredient()} />
      <AppFooter />
    </ToggleSwitchProvider>
  );
};

export default App;
