import isVegetable from "./isVegetable";
import isMeat from "./isMeat";

// リストを分類する関数
export default function classifyItems({ itemList }) {
  const classifiedItemList = {
    vegetable: [],
    meat: [],
    others: [],
  };

  // 各アイテムを分類
  itemList.forEach((item) => {
    if (isVegetable(item.name)) {
      classifiedItemList.vegetable.push(item);
    } else if (isMeat(item.name)) {
      classifiedItemList.meat.push(item);
    } else {
      classifiedItemList.others.push(item);
    }
  });

  const classifiedItemListText = Object.entries(classifiedItemList)
    .map(([category, items]) =>
      items.length > 0
        ? items.map((item) => `${item.name}  ${item.info}`).join("\n")
        : ""
    )
    .filter(Boolean) // 空のセクションを削除
    .join("\n\n"); // 1行間をあけて各セクションを結合;

  return { classifiedItemList, classifiedItemListText };
};
