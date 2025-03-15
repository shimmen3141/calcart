import { seasoningList } from "data";

// itemInfo 中の大さじ・小さじ表記をグラム表記に変換する関数
export default function convertSpoonToGram(itemName, itemInfo) {
  // itemName が seasoningList に含まれているか確認
  const matchedSeasoning = seasoningList.find((seasoning) =>
    seasoning.identifiers.some((identifier) => itemName.includes(identifier))
  );

  if (matchedSeasoning) {
    // 一般的な "大さじ" 、"小さじ" の表記に変換
    const fixedItemInfo = itemInfo
      .replace(/匙/g, "さじ")
      .replace(/お\s*お\s*さ\s*じ/g, "大さじ")
      .replace(/こ\s*さ\s*じ/g, "小さじ")

      // 大さじ表記をグラム表記に変換
      .replace(/大\s*さ\s*じ\s*(\d+(?:\.\d+)?)(?:\s*杯)?/g, (match, value) => {
        const grams = 3 * matchedSeasoning.grams * parseFloat(value);
        return `${grams}g`;
      })

      // 小さじ表記をグラム表記に変換
      .replace(/小\s*さ\s*じ\s*(\d+(?:\.\d+)?)(?:\s*杯)?/g, (match, value) => {
        const grams = matchedSeasoning.grams * parseFloat(value);
        return `${grams}g`;
      });

    return fixedItemInfo;
  } else {
    return itemInfo;
  }
}
