import React from "react";
import aggregateItems from "./aggregateItems";
import classifyItems from "./classifyItems";
import {
  ShoppingList,
  ClassifiedShoppingList,
  EmptyShoppingList,
} from "features";
import { CopyButton } from "components";
import { useCart, useToggleSwitch } from "contexts";
import { classifyInputFormat, divideInput, parseLines } from "functions";
import "./ShoppingList.scss";

const ShoppingListArea = () => {
  console.log("ShoppingList");

  const { carts } = useCart();
  const { toggleStates } = useToggleSwitch();

  const organizeIngredient = (carts) => {
    return carts
      .filter((cart) => cart.count > 0)
      .flatMap((cart) => {
        // 入力内容を改行ごとに分割してそれぞれ処理する
        const lines = divideInput(cart.inputText, toggleStates.removeSymbols);
        // 入力内容から入力形式を分類する
        const inputFormat = classifyInputFormat(lines);
        // 入力形式をもとに入力内容を処理する
        const parsedIngredients = parseLines(
          lines,
          inputFormat,
          toggleStates.spoonToGram
        );

        return parsedIngredients.map((ingredient) => ({
          name: ingredient.name,
          info: ingredient.info,
          count: cart.count,
        }));
      });
  };

  const items = organizeIngredient(carts);

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
