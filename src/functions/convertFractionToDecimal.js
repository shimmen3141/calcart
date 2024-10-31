// 文字列中の分数を小数に変換する関数
export default function convertFractionToDecimal(str) {
  // "数値と数値/数値" の形式の分数を小数に変換
  str = str.replace(
    /(\d+)\s*と\s*(\d+)\s*\/\s*(\d+)/g,
    (match, whole, numerator, denominator) => {
      return (
        parseFloat(whole) +
        parseFloat(numerator) / parseFloat(denominator)
      ).toString();
    }
  );

  // "数値/数値" の形式の分数を小数に変換
  str = str.replace(/(\d+)\s*\/\s*(\d+)/g, (match, numerator, denominator) => {
    return (parseFloat(numerator) / parseFloat(denominator)).toString();
  });

  return str;
}
