import React from "react";
import aggregateItems from "features/ShoppingList/utils/textProcessing/aggregateItems";
import classifyItems from "features/ShoppingList/utils/textProcessing/classifyItems";
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

  let content;
  if (itemList.length === 0) {
    content = <EmptyShoppingList />;
  } else if (toggleStates.classifyItems) {
    content = <ClassifiedShoppingList classifiedItemList={classifiedItemList} />;
  } else {
    content = <ShoppingList itemList={itemList} className="normalList" />;
  }

  return (
    <div className="shoppingList">
      <div className="title">
        買い物リスト
        {copyText && <CopyButton text={copyText} />}
      </div>
      {content}
    </div>
  );
};

export default ShoppingListArea;
