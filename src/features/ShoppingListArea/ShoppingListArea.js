import React from "react";
import aggregateItems from "./aggregateItems";
import classifyItems from "./classifyItems";
import {
  CopyButton,
  useCart,
  useToggleSwitch,
  ShoppingList,
  ClassifiedShoppingList,
  EmptyShoppingList,
} from "../index";
import "./ShoppingList.scss";

const ShoppingListArea = () => {
  console.log("ShoppingList");

  const { carts } = useCart();

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

  const { toggleStates } = useToggleSwitch();
  const { itemList, itemListText } = aggregateItems({ items });
  const { classifiedItemList, classifiedItemListText } = classifyItems({
    itemList,
  });

  const copyText = toggleStates.classifyItems
    ? classifiedItemListText
    : itemListText;

  if (itemList.length === 0) {
    return (
      <div className="shoppingList">
        <div className="title">買い物リスト</div>
        <EmptyShoppingList />
      </div>
    );
  }

  return (
    <div className="shoppingList">
      <div className="title">
        買い物リスト <CopyButton text={copyText} />
      </div>
      {toggleStates.classifyItems ? (
        <ClassifiedShoppingList classifiedItemList={classifiedItemList} />
      ) : (
        <ShoppingList itemList={itemList} />
      )}
    </div>
  );
};

export default ShoppingListArea;
