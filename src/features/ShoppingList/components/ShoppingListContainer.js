import React from "react";
import {
  StandardShoppingList,
  ClassifiedShoppingList,
  EmptyShoppingList,
  useSettingToggle,
} from "features";
import { useCart } from "contexts";
import parseCartsToItems from "features/ShoppingList/utils/textProcessing/parseCartsToItems";
import "./ShoppingListContainer.scss";

const ShoppingListContainer = () => {
  console.log("ShoppingList");

  const { carts } = useCart();
  const { settingToggles } = useSettingToggle();

  const options = {
    removeSymbols: settingToggles.removeSymbols,
    spoonToGram: settingToggles.spoonToGram,
  };

  const items = parseCartsToItems(carts, options);

  let content;
  if (items.length === 0) {
    content = <EmptyShoppingList />;
  } else if (settingToggles.classifyItems) {
    content = <ClassifiedShoppingList items={items} />;
  } else {
    content = <StandardShoppingList items={items} />;
  }

  return <div>{content}</div>;
};

export default ShoppingListContainer;
