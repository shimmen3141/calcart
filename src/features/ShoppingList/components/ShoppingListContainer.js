import React from "react";
import mergeDuplicateItems from "features/ShoppingList/utils/textProcessing/mergeDuplicateItems";
import {
  StandardShoppingList,
  ClassifiedShoppingList,
  EmptyShoppingList,
} from "features";
import { useCart, useToggleSwitch } from "contexts";
import {
  classifyInputFormat,
  cleanLines,
  parseLinesToItems,
  splitTextByLinebreak,
  convertSpoonToGram,
  multiplyQuantities,
} from "functions";
import "./ShoppingList.scss";

const ShoppingListContainer = () => {
  console.log("ShoppingList");

  const { carts } = useCart();
  const { toggleStates } = useToggleSwitch();

  const parseCartsToItems = (carts) => {
    const items = carts
      .filter((cart) => cart.count > 0)
      .flatMap((cart) => {
        // 入力内容を改行ごとに分割する
        const lines = splitTextByLinebreak(cart.inputText);
        // 各行をクリーニングする
        const cleanedLines = cleanLines(lines, toggleStates.removeSymbols);
        // 入力内容から入力形式を分類する
        const inputFormat = classifyInputFormat(cleanedLines);
        // 入力形式をもとにObjectに変換する
        let items = parseLinesToItems(cleanedLines, inputFormat);

        if (toggleStates.spoonToGram) {
          items = items.map((item) => ({
            ...item,
            info: convertSpoonToGram(item.name, item.info),
          }));
        }

        return items.map((item) => ({
          ...item,
          info: multiplyQuantities(item.info, cart.count),
        }));
      });
    return mergeDuplicateItems(items);
  };

  const items = parseCartsToItems(carts);

  let content;
  if (items.length === 0) {
    content = <EmptyShoppingList />;
  } else if (toggleStates.classifyItems) {
    content = <ClassifiedShoppingList items={items} />;
  } else {
    content = <StandardShoppingList items={items} />;
  }

  return <div>{content}</div>;
};

export default ShoppingListContainer;
