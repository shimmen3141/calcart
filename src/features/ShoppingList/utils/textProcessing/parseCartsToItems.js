import {
  splitTextByLinebreak,
  cleanLines,
  parseLinesToItems,
  convertSpoonToGram,
  multiplyQuantities,
} from "functions";
import mergeDuplicateItems from "./mergeDuplicateItems";

const parseCartsToItems = (
  carts,
  options = { removeSymbols: true, spoonToGram: true }
) => {
  const items = carts
    .filter((cart) => cart.count > 0)
    .flatMap((cart) => {
      // 入力内容を改行ごとに分割する
      const lines = splitTextByLinebreak(cart.inputText);
      // 各行をクリーニングする (オプションに応じて記号除去)
      const cleanedLines = cleanLines(lines, options.removeSymbols);
      // 行をオブジェクトに変換する
      let items = parseLinesToItems(cleanedLines, cart.inputMode);

      // spoonToGram オプションが true の場合のみ変換
      if (options.spoonToGram) {
        items = items.map((item) => ({
          ...item,
          info: convertSpoonToGram(item.name, item.info),
        }));
      }

      // カートの個数に応じて数量を乗算
      return items.map((item) => ({
        ...item,
        info: multiplyQuantities(item.info, cart.count),
      }));
    });
  // 重複アイテムをマージ
  return mergeDuplicateItems(items);
};

export default parseCartsToItems;
