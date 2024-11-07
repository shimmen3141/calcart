import itemToTeaspoonGramsMap from "../data/itemToTeaspoonGramsMap";

// itemInfo 中の大さじ・小さじ表記をグラム表記に変換する関数
export default function convertSpoonToGram(itemName, itemInfo) {
  // itemName が itemToTeaspoonGramsMap に含まれているか確認
  const seasoningName = Array.from(itemToTeaspoonGramsMap.keys()).find(
    (seasoningName) => itemName.includes(seasoningName)
  );

  if (seasoningName) {
    // 一般的な "大さじ" 、"小さじ" の表記に変換
    const fixedItemInfo = itemInfo
      .replace(/匙/g, "さじ")
      .replace(/お\s*お\s*さ\s*じ/g, "大さじ")
      .replace(/こ\s*さ\s*じ/g, "小さじ")

      // 大さじ表記をグラム表記に変換
      .replace(/大\s*さ\s*じ\s*(\d+(?:\.\d+)?)(?:\s*杯)?/g, (match, value) => {
        const grams =
          3 * itemToTeaspoonGramsMap.get(seasoningName) * parseFloat(value);
        return `${grams}g`;
      })

      // 小さじ表記をグラム表記に変換
      .replace(/小\s*さ\s*じ\s*(\d+(?:\.\d+)?)(?:\s*杯)?/g, (match, value) => {
        const grams =
          itemToTeaspoonGramsMap.get(seasoningName) * parseFloat(value);
        return `${grams}g`;
      });

    return fixedItemInfo;
  } else {
    return itemInfo;
  }
}
