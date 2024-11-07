import itemToTeaspoonGramsMap from "../data/itemToTeaspoonGramsMap";

// 文字列中の大さじ・小さじ表記をグラム表記に変換する関数
export default function convertSpoonToGram(name, info) {
  // nameがgramPerTeaspoonに含まれているか確認
  const seasoningName = Array.from(itemToTeaspoonGramsMap.keys()).find(
    (seasoningName) => name.includes(seasoningName)
  );

  if (seasoningName) {
    // 一般的な "大さじ" 、"小さじ" の表記に変換
    info = info
      .replace(/匙/g, "さじ")
      .replace(/お\s*お\s*さ\s*じ/g, "大さじ")
      .replace(/こ\s*さ\s*じ/g, "小さじ");

    // 大さじ表記をグラム表記に変換
    info = info.replace(
      /大\s*さ\s*じ\s*(\d+(?:\.\d+)?)(?:\s*杯)?/g,
      (match, tablespoon) => {
        const grams =
          3 *
          itemToTeaspoonGramsMap.get(seasoningName) *
          parseFloat(tablespoon);
        return `${grams}g`;
      }
    );

    // 小さじ表記をグラム表記に変換
    info = info.replace(
      /小\s*さ\s*じ\s*(\d+(?:\.\d+)?)(?:\s*杯)?/g,
      (match, teaspoon) => {
        const grams =
          itemToTeaspoonGramsMap.get(seasoningName) * parseFloat(teaspoon);
        return `${grams}g`;
      }
    );

    return info;
  } else {
    return info;
  }
}
