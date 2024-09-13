import React from "react";
import {
  multiplyQuantities,
  roundQuantities,
  containsNumber,
  CopyButton,
  removeNumbers,
  splitIntoNumAndChar,
} from "../index";

const ShoppingList = ({ items }) => {
  console.log("ShoppingList");

  // 第一段階: name と infoの形式 が等しい要素を集約
  const firstAggregation = items.reduce((acc, item) => {
    // info に含まれる数値を cartCount 倍したもの
    const updatedInfo = multiplyQuantities(item.info, item.cartCount);

    // name と infoの形式 が等しい要素を取得
    const existingItem = acc.find(
      (i) =>
        i.name === item.name &&
        removeNumbers(i.info) === removeNumbers(updatedInfo)
    );

    if (existingItem) {
      const existingParts = splitIntoNumAndChar(existingItem.info);
      const newParts = splitIntoNumAndChar(updatedInfo);
      let combinedInfo = "";

      // 数値と文字列を交互に処理して結合
      for (let i = 0; i < existingParts.length; i++) {
        if (!isNaN(parseFloat(existingParts[i]))) {
          const sum = parseFloat(existingParts[i]) + parseFloat(newParts[i]);
          combinedInfo += sum;
        } else {
          combinedInfo += existingParts[i];
        }
      }
      // 文字列に含まれる数値を小数第3位で四捨五入
      existingItem.info = roundQuantities(combinedInfo);
    } else {
      acc.push({
        ...item,
        info: updatedInfo,
      });
    }
    return acc;
  }, []);

  // 第二段階: name が同じで infoの形式 が異なる要素の info を + でつなげて集約
  const secondAggregation = firstAggregation.reduce((acc, item) => {
    // name が等しい要素を取得
    const existingItem = acc.find((i) => i.name === item.name);

    if (existingItem) {
      // 数値情報を先に表示
      if (containsNumber(item.info)) {
        existingItem.info =
          item.info + (existingItem.info ? ` + ${existingItem.info}` : "");
      } else if (item.info) {
        existingItem.info += existingItem.info ? ` + ${item.info}` : item.info;
      }
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const shoppingListText = secondAggregation
    .map((item) => `${item.name}  ${item.info}`)
    .join("\n");

  return (
    <div>
      <h2>
        買い出しリスト <CopyButton text={shoppingListText} />
      </h2>
      {/* <div>{shoppingListText}</div> */}
      <ul>
        {secondAggregation.map((item, index) => (
          <li key={index}>
            {item.name} {item.info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
