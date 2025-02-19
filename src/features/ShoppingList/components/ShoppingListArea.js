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
import {
  classifyInputFormat,
  cleanLines,
  parseLinesToItems,
  splitTextByLinebreak,
  convertSpoonToGram,
} from "functions";
import "./ShoppingList.scss";

const ShoppingListArea = () => {
  console.log("ShoppingList");

  const { carts } = useCart();
  const { toggleStates } = useToggleSwitch();

  const organizeIngredient = (carts) => {
    return carts
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
    content = (
      <ClassifiedShoppingList classifiedItemList={classifiedItemList} />
    );
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
