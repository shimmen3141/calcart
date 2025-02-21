import React from "react";
import mergeDuplicateItems from "features/ShoppingList/utils/textProcessing/mergeDuplicateItems";
import classifyItems from "features/ShoppingList/utils/textProcessing/classifyItems";
import {
  ShoppingList,
  ClassifiedShoppingList,
  EmptyShoppingList,
} from "features";
import { CopyButton } from "components";
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

const ShoppingListArea = () => {
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
  const itemsText = items
    .map((item) => `${item.name}  ${item.info}`)
    .join("\n");
  const classifiedItems = classifyItems(items);
  const classifiedItemsText = Object.entries(classifiedItems)
    .map(([category, items]) =>
      items.length > 0
        ? items.map((item) => `${item.name}  ${item.info}`).join("\n")
        : ""
    )
    .filter(Boolean) // 空のセクションを削除
    .join("\n\n"); // 1行間をあけて各セクションを結合

  const copyText = toggleStates.classifyItems ? classifiedItemsText : itemsText;

  let content;
  if (items.length === 0) {
    content = <EmptyShoppingList />;
  } else if (toggleStates.classifyItems) {
    content = <ClassifiedShoppingList classifiedItems={classifiedItems} />;
  } else {
    content = <ShoppingList items={items} />;
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
