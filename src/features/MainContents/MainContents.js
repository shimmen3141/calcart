import { useState } from "react";
import { ToggleSwitchArea, ShoppingListArea, Carts } from "../index";
import "./MainContents.css";
import Accordion from "../../components/Accordion/Accordion";

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
    <div className="mainContents">
      <Accordion accordionButton={<h3>設定</h3>}>
        <ToggleSwitchArea />
      </Accordion>
      <Carts allCarts={allCarts} setAllCarts={setAllCarts} />
      <ShoppingListArea items={organizeIngredient()} />
    </div>
  );
};

export default MainContents;
