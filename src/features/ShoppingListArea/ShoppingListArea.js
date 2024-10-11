import React from "react";
import aggregateItems from "./aggregateItems";
import classifyItems from "./classifyItems";
import {
  CopyButton,
  useToggleSwitch,
  ShoppingList,
  ClassifiedShoppingList,
  EmptyShoppingList,
} from "../index";
import "./ShoppingList.css";

const ShoppingListArea = ({ items }) => {
  console.log("ShoppingList");

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
