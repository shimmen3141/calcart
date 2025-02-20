import { CATEGORIES, CATEGORY_KEYS } from "features/ShoppingList/constants";

// アイテム分類関数
const classifyItem = (itemName) => {
  // others以外のカテゴリを優先的にチェック
  const matchedCategory = CATEGORY_KEYS.find((key) =>
    CATEGORIES[key].classifier(itemName)
  );

  return matchedCategory || "others"; // デフォルトフォールバック
};

// リストを分類する関数
export default function classifyItems(items) {
  // カテゴリごとの初期化
  const classifiedItems = CATEGORY_KEYS.reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {});

  // アイテム分類処理
  items.forEach((item) => {
    const categoryKey = classifyItem(item.name);
    classifiedItems[categoryKey].push(item);
  });

  const classifiedItemsText = Object.entries(classifiedItems)
    .map(([category, items]) =>
      items.length > 0
        ? items.map((item) => `${item.name}  ${item.info}`).join("\n")
        : ""
    )
    .filter(Boolean) // 空のセクションを削除
    .join("\n\n"); // 1行間をあけて各セクションを結合;

  return { classifiedItems, classifiedItemsText };
}
