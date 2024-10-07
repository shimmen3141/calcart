import isVegetable from "./isVegetable";
import isMeat from "./isMeat";

// リストを分類する関数
export default function classifyItems({ shoppingList }) {
  const vegetableItemList = [];
  const meatItemList = [];
  const otherItemList = [];

  // 各アイテムを分類
  shoppingList.forEach((item) => {
    if (isVegetable(item.name)) {
      vegetableItemList.push(item);
    } else if (isMeat(item.name)) {
      meatItemList.push(item);
    } else {
      otherItemList.push(item);
    }
  });

  return { vegetableItemList, meatItemList, otherItemList };
}
